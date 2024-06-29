import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Godrive</title>
        <meta name="description" content="En route pour le paradis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "15vh 0",
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
