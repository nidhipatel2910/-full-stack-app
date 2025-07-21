"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();
  return (
    <header className="bg-white shadow p-0 sticky top-0 z-10">
      <nav className="container mx-auto flex items-center justify-end py-4 px-6">
        <div className="flex items-center gap-6 font-semibold text-lg">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          {session && (
            <Link href="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          )}
          {status === "loading" ? (
            <span className="text-gray-500">Loading...</span>
          ) : session ? (
            <>
              <span className="text-sm text-gray-700 font-medium bg-gray-100 px-3 py-1 rounded">
                {session.user?.email}
              </span>
              <button
                className="ml-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition text-sm font-medium"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="ml-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="ml-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition text-sm font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
} 