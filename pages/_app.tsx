import { FC } from "react";
import type { AppProps } from "next/app";

import { PageLayout } from "../components/PageLayout";
import { Provider } from "../contexts";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
};

export default MyApp;
