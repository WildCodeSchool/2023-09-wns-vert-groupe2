import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Test } from "@/components/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p>Hello World</p>
      <Test />
    </>
  );
}
