import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Header.css";
import "../styles/MainPage.css";
import "../styles/Slider.css";
import "../styles/OrderProcess.css";
import "../styles/product.scss";
import "../styles/style.scss";
import "../styles/Footer.scss";
import "../styles/Store.scss";
import "../styles/contact.scss";
import "../styles/about.scss";
import "../styles/privacy.scss";
import "react-input-range/lib/css/index.css";
import Nav from "../Components/Navbar/Nav";
import Head from "next/head";
import Footer from "../Components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <script src="/static/jquery.min.js"></script>
      <script src="/static/bootstrap.min.js"></script>
    </>
  );
}

export default MyApp;
