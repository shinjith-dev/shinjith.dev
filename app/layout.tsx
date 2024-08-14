import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { rubik } from "@/lib/fonts";
import Background from "@/components/common/Background";
import Footer from "@/components/common/Footer";
import { ReactLenis } from "@/lib/lenis";
import SectionContextProvider from "@/components/contexts/SectionContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rubik.className} max-w-screen relative h-full min-h-screen w-full overflow-y-auto overflow-x-hidden bg-background text-base text-fg`}
      >
        <ReactLenis root>
          <SectionContextProvider>
            <Background />
            <Navbar />
            <main className="container relative z-10">{children}</main>
            <Footer />
          </SectionContextProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
