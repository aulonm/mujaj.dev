import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout relative flex min-h-screen flex-col">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
