import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";



export const metadata: Metadata = {
  title: "Virtual Tour 360",
  description: "Immersive Virtual Tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}