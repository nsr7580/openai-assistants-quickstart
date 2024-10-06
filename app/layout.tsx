import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assistants API Quickstart OpenAI Examples",
  description: "OpenAI Examples",
  icons: {
    icon: "/Zenora.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/Zenora.svg" alt="Zenora Logo" style={{ width: '150px', height: 'auto' }}  />
      </body>
    </html>
  );
}
