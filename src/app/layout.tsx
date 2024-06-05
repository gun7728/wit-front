import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry.tsx';
import '../App.scss';

export const metadata: Metadata = {
  title: 'Wit',
  description: 'where is there',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/logo.png' />
        <script src='https://kit.fontawesome.com/dc0f295e44.js' crossOrigin='anonymous'></script>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
