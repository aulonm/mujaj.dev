import Link from 'next/link';

export const Header = () => {
  return (
    <header className="mb-6 flex h-20 items-center">
      <div className="container flex items-center justify-between">
        <div className="app-logo">
          <Link href="/">
            <a>
              <strong>Sitename</strong>
            </a>
          </Link>
        </div>
        <nav className="ml-auto">
          <ul className="flex">
            <li>
              <Link href="/blog" passHref>
                <a className="ml-6 font-semibold lowercase">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
