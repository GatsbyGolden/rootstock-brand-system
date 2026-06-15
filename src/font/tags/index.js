import localFont from 'next/font/local';

export const RootstockSansTags = localFont({
  src: '../../../dist/fonts/Rootstock-Sans-Tags.woff2',
  variable: '--font-rootstock-tags',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default RootstockSansTags;
