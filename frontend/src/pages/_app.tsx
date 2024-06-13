import "@/styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import type { AppProps } from "next/app";
import ThemeProvider from "../styles/theme";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/reducers";
import { Provider } from "react-redux";
import Layout from "@/components/Layout";

const store = configureStore({
  reducer: rootReducer,
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Component {...pageProps} />
            </LocalizationProvider>
          </Layout>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}
