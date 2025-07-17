"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserMenu() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  return session ? (
    <div className="flex items-center gap-2 ml-4">
      <span className="text-sm text-gray-700">{session.user?.email}</span>
      <button
        onClick={() => signOut()}
        className="ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs font-medium"
      >
        Sign out
      </button>
    </div>
  ) : (
    <button
      onClick={() => signIn()}
      className="ml-4 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-medium"
    >
      Sign in
    </button>
  );
} 