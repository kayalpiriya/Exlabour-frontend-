// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { FiBriefcase, FiLogOut, FiUser, FiBell } from 'react-icons/fi';

// export default function Navbar() {
//     const { user, logout } = useAuth();
//     const router = useRouter();

//     const handleLogout = () => {
//         logout();
//         router.push('/login');
//     };

//     return (
//         <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
//             <Link
//                 href="/"
//                 className="flex items-center gap-2 text-2xl font-bold text-blue-600"
//             >
//                 <FiBriefcase />
//                 ExLabour
//             </Link>

//             <div className="flex items-center gap-4">
//                 {!user ? (
//                     <>
//                         <Link
//                             href="/login"
//                             className="text-gray-600 hover:text-blue-600 font-medium transition"
//                         >
//                             Login
//                         </Link>
//                         <Link
//                             href="/register"
//                             className="btn-primary"
//                         >
//                             Get Started
//                         </Link>
//                     </>
//                 ) : (
//                     <>
//                         <button className="text-gray-500 hover:text-blue-600 transition relative">
//                             <FiBell size={20} />
//                         </button>

//                         <Link href={`/dashboard/${user.role}`}>
//                             <div className="flex items-center gap-2 cursor-pointer">
//                                 <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                                     {user.name?.charAt(0).toUpperCase()}
//                                 </div>
//                                 <div className="hidden md:block">
//                                     <p className="text-sm font-medium text-gray-800">
//                                         {user.name}
//                                     </p>
//                                     <p className="text-xs text-gray-500 capitalize">
//                                         {user.role}
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>

//                         <button
//                             onClick={handleLogout}
//                             className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition"
//                         >
//                             <FiLogOut size={20} />
//                         </button>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// }


// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { FiBriefcase, FiLogOut, FiBell } from 'react-icons/fi';

// export default function Navbar() {
//     const { user, logout } = useAuth();
//     const router = useRouter();

//     const handleLogout = () => {
//         logout();
//         router.push('/login');
//     };

//     return (
//         <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between py-4">
//                     {/* Logo */}
//                     <Link
//                         href="/"
//                         className="group flex items-center gap-3"
//                     >
//                         <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
//                             <FiBriefcase size={20} />
//                         </div>
//                         <div>
//                             <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-violet-600 bg-clip-text text-transparent">
//                                 ExLabour
//                             </h1>
//                             <p className="text-[11px] text-gray-400 -mt-1 tracking-wide">
//                                 Smart Task Marketplace
//                             </p>
//                         </div>
//                     </Link>

//                     {/* Right */}
//                     <div className="flex items-center gap-3 sm:gap-4">
//                         {!user ? (
//                             <>
//                                 <Link
//                                     href="/login"
//                                     className="hidden sm:inline-flex text-gray-600 hover:text-blue-600 font-medium transition-all duration-300"
//                                 >
//                                     Login
//                                 </Link>

//                                 <Link
//                                     href="/register"
//                                     className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 px-5 py-2.5 text-white font-semibold shadow-[0_10px_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition-all duration-300"
//                                 >
//                                     Get Started
//                                 </Link>
//                             </>
//                         ) : (
//                             <>
//                                 {/* Notification */}
//                                 <button className="relative w-11 h-11 rounded-2xl bg-white/80 border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-sm">
//                                     <FiBell size={18} />
//                                     <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
//                                 </button>

//                                 {/* User Profile */}
//                                 <Link href={`/dashboard/${user.role}`}>
//                                     <div className="group flex items-center gap-3 cursor-pointer rounded-2xl border border-gray-200 bg-white/80 hover:bg-white hover:border-blue-200 px-3 py-2 shadow-sm transition-all duration-300">
                                        
//                                         {/* 🟢 PROFILE IMAGE LOGIC ADDED HERE 🟢 */}
//                                         <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-all duration-300 overflow-hidden border border-blue-100">
//                                             {user?.profileImage ? (
//                                                 <img 
//                                                     src={user.profileImage} 
//                                                     alt={user.name} 
//                                                     className="w-full h-full object-cover"
//                                                 />
//                                             ) : (
//                                                 user?.name?.charAt(0).toUpperCase()
//                                             )}
//                                         </div>

//                                         <div className="hidden md:block leading-tight">
//                                             <p className="text-sm font-semibold text-gray-800">
//                                                 {user.name}
//                                             </p>
//                                             <p className="text-xs text-gray-500 capitalize">
//                                                 {user.role}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Link>

//                                 {/* Logout */}
//                                 <button
//                                     onClick={handleLogout}
//                                     className="w-11 h-11 rounded-2xl bg-white/80 border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-300 flex items-center justify-center shadow-sm"
//                                 >
//                                     <FiLogOut size={18} />
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }



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
                                {/* UPDATED LOGIN BUTTON DESIGN */}
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