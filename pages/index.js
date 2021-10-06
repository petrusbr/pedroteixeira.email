import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Email Marketing Sem Vergonha e Sem Frescuras.</p>
        <p>
          Cadastre-se na minha lista e receba diaramente {' '}
          dicas sobre Email Marketing, Copywriting e Negócios.
        </p>
      </section>
    </Layout>
  )
}