import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/global/Navbar";
import LoginModal from "./components/global/auth/Login";

const font = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "GeeksForGeeks",
  description: "Practice & Learn Programming in best way!!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
