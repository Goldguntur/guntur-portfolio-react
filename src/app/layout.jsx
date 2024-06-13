import Head from "next/head";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guntur ph",
  description: "guntur portfolio",
  author: "Guntur",
  keywords: "guntur portfolio, portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body
        className="w-[100vw] max-w-full overflow-x-hidden bg-black"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
