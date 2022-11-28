import Link from 'next/link';

const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
];

export default function AboutPage() {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map(({ route, label }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
