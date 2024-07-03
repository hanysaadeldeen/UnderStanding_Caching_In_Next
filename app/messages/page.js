import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import next from "next";

// import { unstable_noStore } from "next/cache";
// export const revalidate = 5;
// export const dynamic = "force-static" this is make it cach and store this cach;
// export const dynamic = "force-dynamic";
// this make it doesn't cach and every refresh call ;

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
