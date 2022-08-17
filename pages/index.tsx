import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/HomePage/Header";
import HeroSection from "components/HomePage/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discord | Konuşma Ve Vakit Geçirme Ortamınız</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
