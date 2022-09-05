import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout(props: Props) {
  return (
    <>
      <Header />
      <div className="grow">
        <main className="container relative mx-auto mb-8">
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  );
}
