import React from "react";
import Head from 'next/head';
// import { Helmet } from "react-helmet";
import App from "./App"; // Path to your App component

export default function AnagramAppPage() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Anagrammiser</title>
        <link rel="canonical" href="http://anagrammiser.netlify.app" />
        <meta name="description" content="Anagram solver" />
      </Head>
      <App />
    </div>
  );
}
