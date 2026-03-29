import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { NotificationProvider } from '@/context/NotificationContext';
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
                    <NotificationProvider>
                        <Toaster position="top-right" />
                        <Navbar />
                        {children}
                    </NotificationProvider>
                </AuthProvider>
            </body>
        </html>
    );
}