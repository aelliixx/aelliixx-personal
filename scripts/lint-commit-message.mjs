#!/usr/bin/env node
/**
 * Commit message linter.
 *
 * Format: `Topic: short description`, optional body starting on line 3.
 *
 *   Packages: updated vulnerable packages
 *
 *   Full description goes here, after exactly one blank line.
 *
 * Rules:
 * - subject is `Topic: description` where Topic starts with a capital letter
 * - description starts lowercase, no trailing period, subject <= 72 chars
 * - body (if any) starts on line 3, i.e. line 2 must be blank
 * - `Merge ...` and `fixup!`/`amend!`/`squash!` commits are exempt
 *
 * Cleanup mirrors what git itself commits: everything from the scissors line
 * (`# --- >8 ---`) down is dropped even when uncommented (verbose diffs),
 * `#...` comment lines are dropped, trailing blank lines are dropped.
 *
 * Usage (commit-msg hook): node scripts/lint-commit-message.mjs <commit-msg-file>
 * Manual check:             node scripts/lint-commit-message.mjs --message "Packages: updated x"
 */
import { readFileSync } from "node:fs";

const MAX_SUBJECT_LENGTH = 72;

function fail(message) {
    console.error(`commit-msg lint failed: ${message}`);
    console.error(`expected: "Topic: short description" (e.g. "Packages: updated vulnerable packages")`);
    process.exit(1);
}

function getMessageText(args) {
    const messageFlagIndex = args.indexOf("--message");
    if (messageFlagIndex !== -1) {
        const text = args[messageFlagIndex + 1];
        if (!text) {
            fail("--message requires a value");
        }
        return text;
    }
    const file = args[0];
    if (!file) {
        fail("no commit message file given (usage: lint-commit-message.mjs <file> | --message \"...\")");
    }
    try {
        return readFileSync(file, "utf8");
    } catch {
        fail(`cannot read commit message file: ${file}`);
    }
}

const COMMENT_CHAR = "#";
const SCISSORS_RE = /^#\s*-{8,}\s*>8\s*-{8,}\s*$/;

function stripCommentsAndTrailingBlanks(text) {
    // Mirror git's cleanup: the scissors line and everything below it never
    // becomes part of the message (this is where `git commit -v` puts the
    // diff), comment lines are stripped, trailing blanks are stripped.
    const lines = text.split(/\r?\n/);
    const scissorsIndex = lines.findIndex((line) => SCISSORS_RE.test(line));
    const messageLines = (scissorsIndex === -1 ? lines : lines.slice(0, scissorsIndex))
        .filter((line) => !line.startsWith(COMMENT_CHAR));
    // Drop the trailing newline git appends, plus any extra blank lines
    // at the end, so "subject\n" and "subject" validate identically.
    while (messageLines.length > 0 && messageLines[messageLines.length - 1].trim() === "") {
        messageLines.pop();
    }
    return messageLines;
}

function lintSubject(subject) {
    if (subject.startsWith("Merge ")) {
        return; // exempt merge commits
    }
    if (/^(fixup!|amend!|squash!) /.test(subject)) {
        return; // exempt autosquash placeholders, rewritten away on rebase
    }
    const separatorIndex = subject.indexOf(": ");
    if (separatorIndex === -1) {
        fail("first line must be \"Topic: short description\" (missing \": \")");
    }
    const topic = subject.slice(0, separatorIndex);
    const description = subject.slice(separatorIndex + 2);

    if (!/^[A-Z]([A-Za-z0-9, \-]*[A-Za-z0-9])?$/.test(topic)) {
        fail(`topic "${topic}" must start with a capital letter and contain only letters, numbers, spaces, commas or hyphens`);
    }
    if (description.length === 0 || description.trim() !== description) {
        fail("description must be non-empty with no leading/trailing spaces");
    }
    if (!/^[a-z]/.test(description)) {
        fail("description must start with a lowercase letter");
    }
    if (subject.endsWith(".")) {
        fail("subject must not end with a period");
    }
    if (subject.length > MAX_SUBJECT_LENGTH) {
        fail(`subject is ${subject.length} chars, max is ${MAX_SUBJECT_LENGTH}`);
    }
}

function lintBody(lines) {
    if (lines.length <= 1) {
        return; // subject only, body is optional
    }
    if (lines[1].trim() !== "") {
        fail("body must start two lines down: line 2 must be blank");
    }
}

const lines = stripCommentsAndTrailingBlanks(getMessageText(process.argv.slice(2)));
if (lines.length === 0) {
    fail("commit message is empty");
}
lintSubject(lines[0]);
lintBody(lines);
console.log("commit-msg lint passed");
