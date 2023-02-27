"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

function SideBar() {
	const { data: session } = useSession();

	const [chats, loading, error] = useCollection(
		session &&
			query(
				collection(db, "users", session?.user?.email!, "chats"),
				orderBy("createdAt", "asc")
			)
	);
	return (
		<div className="flex flex-col p-2 h-screen">
			<div className="flex-1">
				<div>
					{/* NEW chat */}
					<NewChat />

					<div>{/* Model Selection */}</div>

					{/* chatlist */}
					{chats?.docs.map((chat) => (
						// <div>{chat.id}</div>
						<ChatRow key={chat.id} id={chat.id} />
					))}
				</div>
			</div>

			{session && (
				<img
					onClick={() => signOut()}
					src={session.user?.image!}
					alt="profile image"
					className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
				/>
			)}
		</div>
	);
}

export default SideBar;
