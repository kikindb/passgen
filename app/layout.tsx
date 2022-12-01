import './../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-slate-800 text-white bg-cover'>
        <main className='flex justify-center items-center pt-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
