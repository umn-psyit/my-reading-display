import Head from 'next/head'
import type { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <Head>
        <title>{t('appTitle')}</title>
      </Head>

      <main>
      <h1>{t('appTitle')}</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.locale === undefined) {
    throw new Error('context.locale is undefined');
  }
  return {props: {
    ...(await serverSideTranslations(context.locale, ['common']))
  }}
}
