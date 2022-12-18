import "../styles/globals.css";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

const googleSans = localFont({
  src: [
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-BoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-Italic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-MediumItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/GoogleSans/GoogleSans-Regular.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={googleSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
