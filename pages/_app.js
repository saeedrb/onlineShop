import "../styles/globals.css";
import TopNav from "../components/sections/topnavbar";
import "../public/fonts/fontawesome/css/all.css";
import Header from "../components/sections/header";
import { HorizontalMenu } from "../components/sections/categories/index";
import Head from "next/head";
import Footer from "../components/sections/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="stylesheet" href="/icomon/style.css" />
      </Head>
      <div className="container">
        <div className="wrapper">
          <TopNav />
          <Header />
          <HorizontalMenu />
          <div className="main">
            <div className="mainBox">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
