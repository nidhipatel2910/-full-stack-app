import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full max-w-2xl mx-auto bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Welcome to the MERN Full-Stack App</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">This is the home page.<br/>A modern MERN stack demo using Next.js & Tailwind CSS.</p>
      <a href="/register" className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition mb-2">Get Started</a>
      <div className="mt-8">
        <Image src="/globe.svg" alt="Globe" width={80} height={80} className="mx-auto" />
      </div>
    </section>
  );
}