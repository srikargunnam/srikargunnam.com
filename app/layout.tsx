import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srikar Gunnam",
  description: "Full-Stack Software Engineer (Frontend-Heavy) - Building production-grade mobile and web applications with React, React Native, and NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/media/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

