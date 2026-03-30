'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FiHome,
    FiList,
    FiPlusCircle,
    FiUser,
    FiUsers,
    FiCheckSquare,
    FiDollarSign,
    FiSearch,
} from 'react-icons/fi';

const userLinks = [
    { href: '/dashboard/user', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/user/tasks', label: 'My Tasks', icon: FiList },
    { href: '/dashboard/user/tasks/create', label: 'Post Task', icon: FiPlusCircle },
    { href: '/dashboard/user/profile', label: 'Profile', icon: FiUser },
];

const taskerLinks = [
    { href: '/dashboard/tasker', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/tasker/browse', label: 'Browse Tasks', icon: FiSearch },
    { href: '/dashboard/tasker/my-bids', label: 'My Bids', icon: FiDollarSign },
    { href: '/dashboard/tasker/profile', label: 'Profile', icon: FiUser },
];

const adminLinks = [
    { href: '/dashboard/admin', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/admin/users', label: 'Manage Users', icon: FiUsers },
    { href: '/dashboard/admin/tasks', label: 'Manage Tasks', icon: FiCheckSquare },
    { href: '/dashboard/admin/bids', label: 'View Bids', icon: FiDollarSign },
];

export default function Sidebar() {
    const { user } = useAuth();
    const pathname = usePathname();

    const links =
        user?.role === 'admin'
            ? adminLinks
            : user?.role === 'tasker'
                ? taskerLinks
                : userLinks;

    return (
        <aside className="w-[280px] bg-white/80 backdrop-blur-2xl border-r border-slate-100 min-h-screen flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto custom-scrollbar">

            {/* User Profile Card */}
            <div className="p-6 pb-4">
                <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-3xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/60 rounded-full blur-2xl -mr-8 -mt-8"></div>

                    <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500 rounded-[20px] flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 overflow-hidden border border-blue-100">
                        {user?.profileImage ? (
                            <img
                                src={user.profileImage}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            user?.name?.charAt(0).toUpperCase() || 'U'
                        )}
                    </div>

                    <div className="relative z-10">
                        <p className="font-extrabold text-slate-900 text-lg tracking-tight line-clamp-1">
                            {user?.name || 'Loading...'}
                        </p>

                        <div className={`mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${user?.verificationStatus === 'verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                user?.verificationStatus === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                                    'bg-rose-50 text-rose-600 border-rose-200'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${user?.verificationStatus === 'verified' ? 'bg-emerald-500' :
                                    user?.verificationStatus === 'pending' ? 'bg-amber-500' :
                                        'bg-rose-500'
                                }`}></span>
                            {user?.verificationStatus || 'Unknown'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className="px-4 flex-1 mt-2">
                <p className="px-4 text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
                    Menu
                </p>
                <nav className="space-y-1.5">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${isActive
                                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)]'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <span className={`text-xl transition-transform duration-300 ${isActive
                                        ? 'scale-110'
                                        : 'text-slate-400 group-hover:scale-110 group-hover:text-blue-500'
                                    }`}>
                                    <Icon />
                                </span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Footer Area */}
            <div className="p-6 text-center">
                <p className="text-xs font-medium text-slate-400">
                    © 2026 ExLabour
                </p>
            </div>
        </aside>
    );
}