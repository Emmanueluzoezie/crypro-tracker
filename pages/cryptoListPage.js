import Head from 'next/head'
import HeadLine from '../components/Headline';
import Menu from "../components/Menu";
import Footer from '../components/footer'
import CryproList from '../components/cryptoFullList';



export default function CryptoListPage() {


  return (
    <div className="bg-green-100 dark:bg-gray-900 pb-5 h-screen w-screen">
      <Head>
        <title>Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Menu />
        <HeadLine />
      </header>
      <CryproList />
      <Footer />
    </div>
  )
}