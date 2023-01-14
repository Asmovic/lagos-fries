import Script from 'next/script'
import './styles/globals.css'
/* import './styles/Home.module.css' */

/* import "./js/script" */

/* export default function App({ Component, pageProps }) {
  return <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.2.6/swiper-bundle.min.js"  strategy="beforeInteractive" />
      <Script src="./js/script.js" />
      <Component {...pageProps} />
  </>
} */

const AppComponent = ({ Component, pageProps }) => {
  return <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.2.6/swiper-bundle.min.js" />
    <Component {...pageProps} />
    <Script src="./js/script.js" />
</>
}

AppComponent.getInitialProps = async (appContext) => {

  let pageProps = {};
  if(appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
      pageProps
  };
}

export default AppComponent;
