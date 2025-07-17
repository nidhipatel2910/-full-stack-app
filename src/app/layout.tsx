import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import SessionProvider from "@/app/component/SessionProvider";
import NavLinks from "@/app/component/NavLinks";

export const metadata = {
  title: "MERN Full-Stack App",
  description: "A production-grade web application using Next.js 15",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 flex flex-col">
        <SessionProvider>
          <header className="bg-white shadow p-0 sticky top-0 z-10">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
              <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                <span className="inline-block w-8 h-8 bg-indigo-500 rounded-full mr-2"></span>
                MERN App
              </div>
              <NavLinks />
            </nav>
          </header>
          <main className="flex-1 container mx-auto px-4 py-10 flex flex-col items-center justify-center">{children}</main>
          <footer className="bg-white p-4 text-center text-sm border-t w-full">
            &copy; 2025 MERN Full-Stack Tutorial
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}