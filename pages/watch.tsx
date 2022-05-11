import type { NextPage } from "next";
import Head from "next/head";
import HeaderMainContainer from "../components/Organisms/HeaderMainContainer";
import styles from "../styles/Watch.module.css";

const Watch:NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>(?)video title</title>
      </Head>
      <header>
        <HeaderMainContainer />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.main__video}>
            
          </div>
          <section className={styles.section}>

          </section>
        </div>
        <aside className={styles.aside}>

        </aside>
      </main>
    </div>
  )
}

export default Watch;