import { Outfit, Instrument_Serif } from 'next/font/google';
import './globals.css';
import './sections.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionRoot from '@/components/MotionRoot';
import { site } from '@/lib/site';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#05070c',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}.intro{display:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="intro" aria-hidden="true">
          <div className="intro-inner">
            <span className="intro-code">SKX</span>
            <span className="intro-line" />
            <span className="intro-text">Cleared for departure</span>
          </div>
        </div>
        <div className="page-grid" aria-hidden="true" />
        <span id="top" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
