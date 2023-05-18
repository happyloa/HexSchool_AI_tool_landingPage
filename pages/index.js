import Head from "next/head";

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 工具王 - 首頁</title>
        <meta
          name="description"
          content="2023 軟體工程師體驗營 AI 工具王登陸頁"
        />
      </Head>
      <NavBar />
      <main></main>
    </>
  );
}
