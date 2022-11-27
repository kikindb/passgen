import './../styles/globals.css';
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
  {
    label: 'Password Generator',
    route: '/passgen',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-slate-700 text-white'>
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
        {children}
      </body>
    </html>
  );
}
