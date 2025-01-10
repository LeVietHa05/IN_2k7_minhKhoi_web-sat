//home
"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
interface Session {
  email: string;
  iat: number;
  exp: number;
}
export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    // const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

    if (token) {
      fetch("/api/session", {
        headers: {
          token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.session) {
            setSession(data.session);
          } else {
            router.push("/login");
          }
        });
    }
  }, [router]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.email}</h1>
    </div>
  );
}
