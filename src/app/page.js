'use client';
import { useState } from "react";

export default function Home() {
const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("contact@oussamamansour.de")
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);}
  return (
    <main className="max-w-[1280px] mx-auto mt-8 px-8 font-mono select-none">
      <div className="flex gap-2.5 justify-left items-center">
        <span className="text-zinc-500">Email:</span>
        <a href="mailto:contact@oussamamansour.de" className="">contact@oussamamansour.de</a>
        <button
          onClick={copyToClipboard}
          className="bg-white text-black px-2 py-1 rounded-sm cursor-pointer">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </main>
  );
}
