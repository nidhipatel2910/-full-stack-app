"use client";
import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-6 text-base font-medium items-center">
      <Link className="hover:text-indigo-600 transition" href="/">Home</Link>
      <Link className="hover:text-indigo-600 transition" href="/about">About</Link>
      <Link className="hover:text-indigo-600 transition" href="/login">Login</Link>
      <Link className="hover:text-indigo-600 transition" href="/register">Register</Link>
    </div>
  );
} 