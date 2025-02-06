import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Task Syncer",
  description: "A Task Automation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={poppins.style}>
        {children}
      </body>
    </html >
  );
}
