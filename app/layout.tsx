import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb_yeram",
  description: "Airbnb",
};
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28"> {children}</div>
      </body>
    </html>
  );
}
