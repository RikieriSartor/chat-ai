"use client";

import { useChat } from "ai/react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MessageProps {
  type: "ai" | "user";
  message: string;
}

const Message = ({ type, message }: MessageProps) => {
  return (
    <div className="flex gap-4 text-slate-600">
      <Avatar>
        <AvatarFallback>{type === "ai" ? "AI" : "YU"}</AvatarFallback>
        <AvatarImage src={type === "ai" ? "openai.svg" : ""} />
      </Avatar>

      <p className="text-sm">
        <span className="block font-bold text-slate-700">
          {type === "ai" ? "AI" : "You"}:
        </span>
        {message}
      </p>
    </div>
  );
};

export default function Chat() {
  const { input, isLoading, messages, handleSubmit, handleInputChange } =
    useChat({
      api: "/api/chat",
    });

  return (
    <Card className="flex flex-col w-full sm:w-[480px] min-h-screen sm:h-[85vh] sm:min-h-[500px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot.</CardDescription>
      </CardHeader>

      <CardContent className="grow flex flex-col gap-4 overflow-y-auto">
        <Message type="ai" message="How can I help you?" />
        {messages.map((message) => (
          <Message
            key={message.id}
            type={message.role === "user" ? "user" : "ai"}
            message={message.content}
          />
        ))}
      </CardContent>

      <CardFooter className="py-4">
        <form onSubmit={handleSubmit} className="flex gap-x-4 w-full">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you?"
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
