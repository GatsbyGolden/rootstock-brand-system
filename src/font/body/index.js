import localFont from 'next/font/local';

export const RootstockSansBody = localFont({
  src: '../../../dist/fonts/Rootstock-Sans-Body.woff2',
  variable: '--font-rootstock-body',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default RootstockSansBody;
