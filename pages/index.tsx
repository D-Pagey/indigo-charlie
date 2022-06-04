import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "../contexts";

const Home: NextPage = () => {
  const { username } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (username === undefined) {
      router.push("/login");
    }
  }, [router, username]);

  return (
    <main>
      <h1 className="text-primary">Dashboard</h1>
    </main>
  );
};

export default Home;
