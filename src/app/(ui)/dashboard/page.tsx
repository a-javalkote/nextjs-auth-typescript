"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const route = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // Redirect to the login page if there's no session
    if (!session) {
      route.push("/login");
    }
  }, [session, route]);

  const handleSignOut = async () => {
    // Sign out the user
    await signOut({ redirect: false });
    // Redirect to the login page
    route.push("/login");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
