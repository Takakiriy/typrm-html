import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>typrm document</title>
        <meta name="description" content="The programming information by typrm format" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a
            href="https://github.com/Takakiriy/typrm/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >typrm</a> format documents!
        </h1>

        <form  className={styles.form}  action="/search">
          <input className={styles.input}  type="text"   name="q"  maxLength={400}/>
          <input className={styles.submit} type="submit" value="#search:" />
        </form>

      </main>

      <footer className={styles.footer}>
        <span>Developed by&nbsp;
        <a
          href="https://github.com/Takakiriy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Takakiri
        </a>
        </span>
      </footer>
    </div>
  )
}

export default Home
