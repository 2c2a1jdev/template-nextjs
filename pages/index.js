import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Links - Alan Fernandes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            className={styles.perfilImg} 
            src="/perfil.jpg" 
            alt="Imagem de Perfil"
            width={150}
            height={150}
          />
        </div>

        <h1 className={styles.title}>
          Gratidão pela <a>visita!</a>
        </h1>

        <p className={styles.description}>
          Esses são os meus links para contato.
        </p>

        <div className={styles.grid}>
          <a href="https://api.whatsapp.com/send?1=pt_br&phone=48988491453" target="new" className={styles.card}>
            <h3>WhatsApp &rarr;</h3>
            <p>Contato pessoal, responderei  assim que estiver disponível!</p>
          </a>

          <a href="" target="new" className={styles.card}>
            <h3>Curriculum &rarr;</h3>
            <p>Confira minhas experiências profissionais.</p>
          </a>

          <a href="https://github.com/2c2a1jdev" target="new" className={styles. card} >
            <h3>Github &rarr;</h3>
            <p>Aqui você encontra todos os meus projetos.</p>
          </a>

          <a href="https://www.linkedin.com/in/alanfernandesss/" target="new" className={styles.card} >
            <h3>Linkedin &rarr;</h3>
            <p>
              Veja aqui meus contatos profissionais. 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
