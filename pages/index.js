import Head from "next/head"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>!RAFFLE STRAFFLE!</title>
                <meta name="description" content="Autonomous Lottery Game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <h1>Willkommen</h1>
                <p></p>
            </center>

            <Header />

            <center>
                <LotteryEntrance />
            </center>
        </div>
    )
}
