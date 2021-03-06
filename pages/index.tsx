import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "../contexts";
import { useHasMounted } from "../hooks";

const Home: NextPage<{ imageUrl: string }> = ({ imageUrl }) => {
  const { username } = useAuth();
  const router = useRouter();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
  }, [router, username]);

  if (!username) return null;

  return (
    <main className="flex flex-col items-center">
      {hasMounted && (
        <>
          <h1 className="text-2xl mb-4">Welcome {username}</h1>

          <Image src={imageUrl} width="244" height="514" alt="incard" />
        </>
      )}

      <p className="text-center mt-4">
        This page was server side rendered using NextJS&apos;s{" "}
        <code>getServerSideProps</code> functionality.
      </p>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      imageUrl:
        "https://uploads-ssl.webflow.com/60a7804841e66c694b548464/60b903b4142ff6fdb6a5da63_vertical-card.png",
    },
  };
};
