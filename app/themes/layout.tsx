import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Themes - React 3D Button | 5 Beautiful Pre-built Themes',
  description:
    'Explore 5 stunning pre-built themes for React 3D Button: Ocean, Sunset, Forest, Pirate, and Neon. Customize with CSS variables or create your own theme. Live interactive preview and code examples.',
  keywords: [
    'react button themes',
    '3d button themes',
    'button customization react',
    'react ui themes',
    'button color schemes',
    'css button themes',
  ],
  openGraph: {
    title: 'Themes - React 3D Button',
    description:
      'Explore 5 beautiful pre-built themes and customize your own with CSS variables',
    url: 'https://react-3d-button-demo.vercel.app/themes',
  },
};

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
