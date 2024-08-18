import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import FramerWrapper from './FramerWrapper';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        <Link href="/">
          <FramerWrapper delay={3.4}>
            <h1 className="text-4xl font-semibold">
              ANDRIEL<span className="text-accent">.</span>
            </h1>
          </FramerWrapper>
        </Link>

        {/* desktop nav & contato*/}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contato"></Link>
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
