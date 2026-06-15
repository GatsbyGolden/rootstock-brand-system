import localFont from 'next/font/local';

export const RootstockSansHeadline = localFont({
  src: '../../../dist/fonts/Rootstock-Sans-Headline.woff2',
  variable: '--font-rootstock-headline',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default RootstockSansHeadline;
