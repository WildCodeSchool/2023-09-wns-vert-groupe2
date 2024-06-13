import "@/styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import type { AppProps } from "next/app";
import ThemeProvider from "../styles/theme";
import { setContext } from "@apollo/client/link/context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Layout from "@/components/Layout";
import { persistor, store } from "@/store/store";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Layout>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Component {...pageProps} />
              </LocalizationProvider>
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
