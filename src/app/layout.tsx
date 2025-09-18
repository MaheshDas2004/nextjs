import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Next.js Tutorial',
    description: 'A tutorial project built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1 className='text-3xl font-bold'>Header</h1>
                </header>
                {children}
                <footer className="p-4 bg-gray-200 text-center">
                    <p className="text-sm text-gray-600">footer</p>
                </footer>
            </body>
        </html>
    );
}