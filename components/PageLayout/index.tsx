import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../contexts";

type Props = {
  children: JSX.Element;
};

export const PageLayout: FC<Props> = ({ children }) => {
  const { username, handleLogout, isSSR } = useAuth();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Indigo Charlie</title>
        <meta name="description" content="N-back assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-6 md:px-10 flex w-full items-center justify-between">
        <Link href="/">
          <a className="flex">
            <Image
              src="/logo.png"
              width="100"
              height="30"
              alt="incard grey logo with white background"
            />
          </a>
        </Link>

        {!isSSR && username && (
          <button
            type="button"
            className="bg-primary px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </header>

      <main
        className="flex flex-col w-full p-4 lg:px-0"
        style={{ maxWidth: 500 }}
      >
        {children}
      </main>
    </div>
  );
};
