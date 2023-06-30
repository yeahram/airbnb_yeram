import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modal/Modal";
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
          <Modal isOpen />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
