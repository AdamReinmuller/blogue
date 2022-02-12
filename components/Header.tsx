import { ReactNode, useContext } from "react";

import Link from "next/link";

type HeaderProps = {
  children?: ReactNode;
};

const categories = [
  { name: "test name", slug: "asd", id: 1 },
  { name: "test name", slug: "asd", id: 2 },
  { name: "test name", slug: "asd", id: 3 },
  { name: "test name", slug: "asd", id: 4 },
];

const Header = ({}: HeaderProps) => {
  return (
    <header className="container mx-auto mb-8 px-10">
      <div className="flex w-full items-center justify-between border-b border-green-400 border-opacity-50 py-8">
        <Link href="/">
          <a className="cursor-pointer text-4xl font-bold text-white">Blogue</a>
        </Link>
        <nav className="hidden gap-4 md:flex">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="cursor-pointer align-middle font-semibold text-white"
          >
            HOME
          </a>
          <a
            href="/client"
            className="cursor-pointer align-middle font-semibold text-white"
          >
            CLIENT
          </a>
          {categories.map((category) => (
            <span key={category.id}>
              <Link href={`/category/${category.slug}`}>
                <a className="cursor-pointer align-middle font-semibold text-white">
                  {category.name}
                </a>
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
