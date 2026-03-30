'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiBriefcase, FiLogOut, FiBell, FiUser } from 'react-icons/fi';
import { useNotifications } from '@/context/NotificationContext';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const { notifications, fetchOfflineNotifications, markAsRead } = useNotifications();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (user) {
            const token = Cookies.get('token');
            if (token) fetchOfflineNotifications(token);
        }
    }, [user]);

    // Logic remains exactly the same
    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-indigo-100 bg-white/90 backdrop-blur-xl transition-all shadow-sm supports-[backdrop-filter]:bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* --- LOGO SECTION --- */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FiBriefcase className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-900 bg-clip-text text-transparent">
                                ExLabour
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                                Task Marketplace
                            </span>
                        </div>
                    </Link>

                    {/* --- RIGHT SECTION --- */}
                    <div className="flex items-center gap-4">
                        {!user ? (
                            // LOGGED OUT STATE
                            <>
                                <Link
                                    href="/login"
                                    className="hidden sm:inline-flex rounded-full border border-indigo-200 bg-indigo-50/50 px-6 py-2.5 text-sm font-bold text-indigo-700 transition-all hover:bg-white hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                                >
                                    Log In
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/50 hover:to-fuchsia-600 active:scale-95"
                                >
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            // LOGGED IN STATE
                            <>
                                {/* Notification Bell */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 shadow-sm transition-all hover:bg-indigo-100 hover:text-indigo-700 hover:shadow-indigo-200"
                                    >
                                        <FiBell className="h-5 w-5 transition-transform group-hover:swing" />
                                        {notifications.length > 0 && (
                                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 ring-2 ring-white shadow-sm text-[9px] font-bold text-white">
                                                {notifications.filter(num => !num.isRead).length || notifications.length}
                                            </span>
                                        )}
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-100/50 overflow-hidden z-[100]">
                                            <div className="p-4 border-b border-indigo-50 flex justify-between items-center bg-indigo-50/50">
                                                <h3 className="font-extrabold text-indigo-900 text-sm">Notifications</h3>
                                            </div>
                                            <div className="max-h-[300px] overflow-y-auto">
                                                {notifications.length > 0 ? (
                                                    notifications.map((notif, idx) => (
                                                        <div key={notif._id || idx} className={`p-4 border-b border-indigo-50/50 transition-colors ${!notif.isRead ? 'bg-indigo-50/30' : 'hover:bg-slate-50'}`}>
                                                            <div className="flex justify-between items-start gap-2">
                                                                <div>
                                                                    <p className="font-bold text-slate-800 text-xs mb-1">{notif.title}</p>
                                                                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">{notif.message}</p>
                                                                </div>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        markAsRead(notif._id);
                                                                    }}
                                                                    className="p-1 rounded-full hover:bg-rose-100 hover:text-rose-600 text-slate-400 transition ml-2"
                                                                    title="Dismiss"
                                                                >
                                                                    ✕
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="p-8 text-center text-xs font-medium text-slate-400">You're all caught up!</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* User Profile Pill */}
                                <div className="flex items-center gap-2 pl-1.5 pr-1.5 sm:pr-5 py-1.5 rounded-full border border-indigo-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 group cursor-pointer">
                                    <Link href={`/dashboard/${user.role}`} className="flex items-center gap-3">
                                        {/* Avatar */}
                                        <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all">
                                            {user?.profileImage ? (
                                                <img
                                                    src={user.profileImage}
                                                    alt={user.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
                                                    {user?.name?.charAt(0).toUpperCase() || <FiUser />}
                                                </div>
                                            )}
                                        </div>

                                        {/* Name & Role (Hidden on mobile) */}
                                        <div className="hidden flex-col sm:flex text-left">
                                            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">
                                                {user.name}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-400 group-hover:text-fuchsia-500">
                                                {user.role}
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                {/* Logout Button */}
                                <button
                                    onClick={handleLogout}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
                                    title="Logout"
                                >
                                    <FiLogOut className="h-4 w-4" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}