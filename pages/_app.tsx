import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { Layout } from "../components";
import { useApollo } from "../lib/apolloClient";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
