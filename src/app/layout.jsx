import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thoughts',
  description: 'A platform for sharing ideas and gaining insights',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='m-auto w-[90%] sm:w-[80%] px-4 sm:px-8 lg:px-12 grid grid-rows-[auto_1fr_auto] min-h-[100dvh]'>
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
