import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html lang="nb-NO">
      <Head />
      <body className="bg-bg text-text transition-colors duration-200 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
