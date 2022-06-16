import Head from "next/head"
import Footer from '../components/footer'
import Menu from "../components/Menu"

const More = () => {

      return (
        <div className="bg-green-100 dark:bg-gray-900 pb-5 h-screen w-screen">
        <Head>
        <title>Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


        <Menu />
        <div className="pt-20 text-center text-2xl font-bold">
        <h1 >page still in progress</h1>
        </div>

        <Footer />

    </div>
  )
};

export default More;