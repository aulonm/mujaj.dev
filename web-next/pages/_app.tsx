import type { AppProps } from 'next/app';
import PageLayout from '@/components/PageLayout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout relative flex min-h-screen flex-col">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
}

export default MyApp;
