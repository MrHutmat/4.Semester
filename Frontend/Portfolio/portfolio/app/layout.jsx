import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Helsengren",
  description: "Mathias Helsengren's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-themeblack text-themegray h-screen snap-y snap-mandatory overflow-scroll z-0 ${inter.className}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
