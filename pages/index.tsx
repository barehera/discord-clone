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
        <meta
          name="description"
          content="Discord clone created by Çağan Büyükavcılar"
        ></meta>
        <meta name="keywords" content="discord-clone"></meta>
        <meta name="author" content="Çağan Büyükavcılar"></meta>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
