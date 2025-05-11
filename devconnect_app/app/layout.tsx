import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevConnect",
  description: "App for developers to connect with each other",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
