import React from "react";
import Styles from "../styles/Home.module.css";
import Head from "next/head";
import * as Icon from "react-feather";

export default function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <header className={Styles.header}>
            <div>
              <Icon.Menu color="white" />
              <Icon.X color="white" />
            </div>
            <div>
              <h1 className={Styles.heading}>Raafy Shiham</h1>
            </div>
          </header>
          <div>
            <h2 className={Styles.heroText}>
              Hello! My Name is Ahmed Raafy Shiham.
            </h2>
          </div>

          <footer></footer>
        </div>
      </div>
    </>
  );
}
