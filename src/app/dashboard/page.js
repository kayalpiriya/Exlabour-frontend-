'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function DashboardRedirect() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.push(`/dashboard/${user.role}`);
        } else if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading]);

    return <LoadingSpinner />;
}