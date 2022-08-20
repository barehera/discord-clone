import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/HomePage/Header";
import HeroSection from "components/HomePage/HeroSection";
import CardSection from "components/HomePage/CardSection";
import DownloadSection from "components/HomePage/DownloadSection";
import Footer from "components/HomePage/Footer";

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
        <CardSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
