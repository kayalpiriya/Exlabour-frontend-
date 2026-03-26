import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'ExLabour - Freelance Task Marketplace',
    description: 'A freelance-style task marketplace',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <Toaster position="top-right" />
                    <Navbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}