import type {Metadata} from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
    title: "Donatas Mockus | aelliixx",
    description: "Donatas Mockus software developer profile",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-dark={true}>
        {children}
        </html>
    );
}
