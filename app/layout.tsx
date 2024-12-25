import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Header from "@/components/Header/Header";
import Crumbs from "@/components/Crumbs/Crumbs";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import Message from "@/components/Message/Message";
import Page from "@/components/Page/Page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Page>
            <Header />
            <Crumbs />
            {children}
            <Footer />
            <Modal />
            <Message />
          </Page>
        </body>
      </html>
    </StoreProvider>
  );
}
