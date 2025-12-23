import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Virtual Tour 360",
  description: "Immersive Virtual Tours",
};

export const viewport: Viewport ={
  themeColor:"#e7f6f26e"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}