import type { Metadata } from "next";
import { Inter, Rubik, Ubuntu } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const rubik = Rubik({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-rubik",
});

/* META_DATA */

export const metadata: Metadata = {
  title: "Prof.Omar",
  description:
    "Prof.Omar is an online agency established to help individuals and organizations in navigating crisis situations, mastering effective communication, and fostering resilience in the face of challenges. The agency aims to equip clients with the knowledge, skills, and strategies necessary to overcome obstacles, thrive in adversity, and achieve their goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${inter.className} ${ubuntu.variable} ${rubik.variable}`}
      >
        <div className="fixed top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(90%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(204,232,252,.5)_100%)]"></div>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
