import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import Link from 'next/link';
import './globals.css';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <body>
                <NavBar />
                <main style={{ padding: '24px' }}>{children}</main>
            </body>
        </html>
    );
}