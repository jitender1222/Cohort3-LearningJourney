"use client";

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TextInput placeholder="Room Name"></TextInput>
        <button
          onClick={() => {
            router.push("/chat/123");
          }}
        >
          Join Me
        </button>
      </div>
    </div>
  );
}
