import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function PrimeiroPost() {
  return (
  <>
    <Layout>
      <Head>
      <title>Primeiro Post!</title>
    </Head>
    <h1>Primeiro Post!</h1>
    <h2>
      <Link href="/">
        <a>Retonar à página principal</a>
      </Link>
    </h2>
    {/* <Image 
      src="/images/profile.jpg"
      height={192}
      width={144}
      alt="Pedro Teixeira"
    /> */}
    </Layout>
  </>
  )
}