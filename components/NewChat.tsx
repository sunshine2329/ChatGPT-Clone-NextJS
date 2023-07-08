"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`
        /chat/${doc.id}
    `);
  };

  return (
    <div
      //   style this like the chatgpt button in tailwind css
      className="border-gray-700 border chatRow items-center justify-center"
      onClick={createNewChat}
    >
      <PlusIcon className="h-4 w-4" />
      <p className="hidden md:inline-flex flex-1">New Chat</p>
    </div>
  );
}

export default NewChat;
