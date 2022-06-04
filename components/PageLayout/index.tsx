import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type Props = {
  children: JSX.Element;
};

export const PageLayout: FC<Props> = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen">
    <Head>
      <title>Indigo Charlie</title>
      <meta name="description" content="N-back assessment" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="p-4 md:px-10 shadow flex w-full">
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
    </header>

    <main
      className="flex flex-col w-full p-4 lg:px-0"
      style={{ maxWidth: 500 }}
    >
      {children}
    </main>
  </div>
);
