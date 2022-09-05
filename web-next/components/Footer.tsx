import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="dev-footer bg-footer text-gray mt-auto p-8 text-center">
      <div className="relative mx-auto w-full">
        <div className="mb-2 flex flex-row justify-center gap-4 text-black dark:text-white">
          <Link href="https://github.com/aulonm" passHref>
            <a>
              <Image src="/images/github.svg" width={24} height={24} />
            </a>
          </Link>
          <Link href="https://instagram.com/photomujaj" passHref>
            <a>
              <Image src="/images/instagram.svg" width={24} height={24} />
            </a>
          </Link>
          <Link href="https://instagram.com/aulonm" passHref>
            <a>
              <Image src="/images/instagram.svg" width={24} height={24} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aulon-mujaj-585a3457/"
            passHref
          >
            <a>
              <Image src="/images/linkedin.svg" width={24} height={24} />
            </a>
          </Link>
          <Link href="https://twitter.com/aulonmujaj" passHref>
            <a>
              <Image src="/images/twitter.svg" width={24} height={24} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
