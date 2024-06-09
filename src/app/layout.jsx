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
      <body className="w-[100vw] max-w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
