import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
