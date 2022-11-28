import './../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomBg = `bg-bg0${Math.floor(Math.random() * 4) + 1}`;
  return (
    <html>
      <head />
      <body className={`bg-slate-800 text-white ${randomBg} bg-cover`}>
        <main className='flex justify-center items-center pt-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
