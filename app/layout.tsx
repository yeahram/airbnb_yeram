import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/loginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb_yeram",
  description: "Airbnb",
};
const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
