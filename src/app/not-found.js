import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="btn-primary flex items-center gap-2 justify-center mx-auto w-fit"
                >
                    <FiHome />
                    Go Home
                </Link>
            </div>
        </div>
    );
}