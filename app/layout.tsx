import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marufa Sultana - Lecturer in Computer Science & Engineering",
  description: "Personal website of Marufa Sultana, Lecturer in Computer Science and Engineering at University of Creative Technology Chittagong. Specializing in Computer Networks, Information Security, Software Engineering, and more.",
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
