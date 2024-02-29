import type {Metadata} from "next";
import {Inclusive_Sans, Zilla_Slab} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Zilla_Slab({weight: ["600"], subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Donatas Mockus | aelliixx",
	description: "Donatas Mockus software developer profile",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<body className={inter.className}>{children}</body>
		</html>
	);
}
