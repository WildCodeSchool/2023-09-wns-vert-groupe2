import { useMeQuery } from "@/gql/graphql";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, loading, error } = useMeQuery();
  console.log(data?.me);
  return (
    <>
      <p>Hello World</p>
    </>
  );
}
