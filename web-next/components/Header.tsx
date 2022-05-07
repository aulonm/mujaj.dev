import Link from 'next/link';

export const Header = () => {
  return (
    <header className="mb-6 flex h-20 justify-center">
      <div className="container flex items-center justify-between">
        <div className="app-logo">
          <Link href="/">
            <a>
              <strong>Mujaj</strong>
            </a>
          </Link>
        </div>
        <nav className="ml-auto">
          <ul className="flex">
            <li>
              <Link href="/about" passHref>
                <a className="ml-6 font-semibold lowercase">about</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a className="ml-6 font-semibold lowercase">blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <a className="ml-6 font-semibold lowercase">projects</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref>
                <a className="ml-6 font-semibold lowercase">portfolio</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
