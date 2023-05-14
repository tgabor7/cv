import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "~/components/layout";

import { Provider as ReduxProvider } from "react-redux";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { store } from "~/store/store";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { useEffect } from "react";
import { setUser } from "./main/store/store";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default api.withTRPC(MyApp);
