import React from "react";
import Styles from "../styles/Home.module.css";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={Styles.container}>
        <header className={Styles.header}>
          <div></div>
        </header>

        <footer></footer>
      </div>
    </>
  );
}
