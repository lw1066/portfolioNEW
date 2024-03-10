import { Inter } from "next/font/google";
import HomeNav from "./components/HomeNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lewis Webster",
  description: "A little bit about me.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNav />
        {children}
      </body>
    </html>
  );
}
