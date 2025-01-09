import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SWD Test by Ezekiel",
  description: "built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-circular-std antialiased`}>
        <Nav />
        <main className="min-h-[70vh] flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
