'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedBackground from './core/animated-background';

const links: { name: string; path: string }[] = [
  { name: 'home', path: '/' },
  { name: 'currículo', path: '/curriculo' },
  { name: 'projetos', path: '/projetos' },
  { name: 'contato', path: '/contato' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      <AnimatedBackground
        defaultValue={links[0].path}
        className="rounded-lg bg-zinc-800 dark:bg-zinc-800"
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              data-id={link.path}
              className={`${
                link.path === pathname && 'border-b-2 border-accent text-accent'
              } px-2 py-0.5 font-medium capitalize transition-all hover:text-accent2`}
            >
              {link.name}
            </Link>
          );
        })}
      </AnimatedBackground>
    </nav>
  );
};

export default Nav;
