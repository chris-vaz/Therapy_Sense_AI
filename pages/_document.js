import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Therapy Sense AI" key="title"/>
        <meta property="og:description" content="Your Virtual Therapist" key="description"/>
        <meta
          property="og:image"
          content="https://picsum.photos/500/300?image=13"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
