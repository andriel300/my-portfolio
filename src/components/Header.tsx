import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            ANDRIEL<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & contato*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contato">
            <Button>ME CONTRATA!</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
