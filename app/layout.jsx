import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TextArea from "./TextArea/TextArea";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Codenames | brinkley.dev",
 description: "A companion to the game Codenames",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <meta name="theme-color" content="#B5BD89" />
   <body className={inter.className}>
    <Header />
    {children}
    <TextArea />
    <Footer />
   </body>
  </html>
 );
}
