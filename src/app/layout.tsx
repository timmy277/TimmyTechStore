"use client"

import "./globals.css";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "./components/header/page";
import Footer from "./components/footer/Footer";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Layout>
            <Header />
            {children}
            <Footer />
          </Layout>
        </Provider>

      </body>
    </html>
  );
}
