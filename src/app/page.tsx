import { Metadata } from "next";

import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "Vercel SDK - Open AI Chatbot",
};

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50">
      <Chat />
    </main>
  );
}
