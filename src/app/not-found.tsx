import React from "react";
import {Zilla_Slab} from "next/font/google";
import styles from "./error.module.scss";
import Link from "next/link";

const inter = Zilla_Slab({weight: ["600"], subsets: ["latin"]});

function NotFound() {
    return (
        <body className={inter.className} data-dark={true}>
        <main className={styles.error}>
            <div className={styles.container}>
                <p>Oops! It looks like we couldn&apos;t find the page you were looking for!</p>
                <Link href={"/"}>Return home</Link>
            </div>
        </main>
        </body>
    );
}

export default NotFound;
