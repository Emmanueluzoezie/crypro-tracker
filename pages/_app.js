import '../styles/globals.css'  
import Head from "next/head"
import Router  from 'next/router'
import NProgress from "nprogress"
import {CryptoContext} from "../context/cryptoContext"
import { store } from "../app/store";
import { Provider } from "react-redux";
import { UserProvider } from '@auth0/nextjs-auth0';
 

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => NProgress.start()); 
  Router.events.on('routeChangeComplete', () => NProgress.done());
  
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Head>


    <UserProvider>
      <Provider store={store}>
        <CryptoContext>
          <Component {...pageProps} />
        </CryptoContext>
      </Provider>
    </UserProvider>  
    
    </>
    )
}

export default MyApp