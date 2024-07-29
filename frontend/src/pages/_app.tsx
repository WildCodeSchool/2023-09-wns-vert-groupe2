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
import Layout from "@/components/Layout";
import { AuthProvider } from "@/providers/AuthProvider";
import { ToastContainer } from "react-toast";

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
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Component {...pageProps} />
            </LocalizationProvider>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
      <ToastContainer />
    </ApolloProvider>
  );
}
