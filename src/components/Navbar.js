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



// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FiBriefcase, FiLogOut, FiBell, FiUser } from 'react-icons/fi';

// export default function Navbar() {
//     const { user, logout } = useAuth();
//     const router = useRouter();

//  // Notifications State
//     const [notifications, setNotifications] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(false);

//    // Fetch Notifications
//     useEffect(() => {
//         if (user) {
//             fetchNotifications();
//         }
//     }, [user]);

//     const fetchNotifications = async () => {
//         try {
//             const { data } = await API.get('/notifications');
//             setNotifications(data);
//         } catch (error) {
//             console.error('Error fetching notifications', error);
//         }
//     };

//     const handleMarkAsRead = async (id, link) => {
//         try {
//             await API.put(`/notifications/${id}/read`);
//             fetchNotifications(); // Update list after marking as read
//             setShowDropdown(false);
//             if (link) router.push(link);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     // Logic remains exactly the same
//     const handleLogout = () => {
//         logout();
//         router.push('/login');
//     };

//     return (
//         <nav className="sticky top-0 z-50 w-full border-b border-indigo-100 bg-white/90 backdrop-blur-xl transition-all shadow-sm supports-[backdrop-filter]:bg-white/80">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-20 items-center justify-between">
                    
//                     {/* --- LOGO SECTION --- */}
//                     <Link href="/" className="group flex items-center gap-3">
//                         <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
//                             <FiBriefcase className="h-5 w-5" />
//                         </div>
//                         <div className="flex flex-col">
//                             <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-900 bg-clip-text text-transparent">
//                                 ExLabour
//                             </span>
//                             <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
//                                 Task Marketplace
//                             </span>
//                         </div>
//                     </Link>

//                     {/* --- RIGHT SECTION --- */}
//                     <div className="flex items-center gap-4">
//                         {!user ? (
//                             // LOGGED OUT STATE
//                             <>
//                                 {/* UPDATED LOGIN BUTTON DESIGN */}
//                                 <Link
//                                     href="/login"
//                                     className="hidden sm:inline-flex rounded-full border border-indigo-200 bg-indigo-50/50 px-6 py-2.5 text-sm font-bold text-indigo-700 transition-all hover:bg-white hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
//                                 >
//                                     Log In
//                                 </Link>

//                                 <Link
//                                     href="/register"
//                                     className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/50 hover:to-fuchsia-600 active:scale-95"
//                                 >
//                                     Get Started
//                                 </Link>
//                             </>
//                         ) : (
//                             // LOGGED IN STATE
//                             <>
//                                 {/* Notification Bell
//                                 <button className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 shadow-sm transition-all hover:bg-indigo-100 hover:text-indigo-700 hover:shadow-indigo-200">
//                                     <FiBell className="h-5 w-5 transition-transform group-hover:swing" />
//                                     <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-pink-500 ring-2 ring-white shadow-sm"></span>
//                                 </button> */}

//                                    {/* 🔔 Notifications Bell */}
//                         <div className="relative">
//                             <button 
//                                 onClick={() => setShowDropdown(!showDropdown)}
//                                 className="relative text-gray-600 hover:text-blue-600 p-2"
//                             >
//                                 <FiBell size={22} />
//                                 {unreadCount > 0 && (
//                                     <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
//                                         {unreadCount}
//                                     </span>
//                                 )}
//                             </button>

//                             {/* Notifications Dropdown */}
//                             {showDropdown && (
//                                 <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden z-50">
//                                     <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
//                                         <h3 className="font-bold text-gray-700">Notifications</h3>
//                                         <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{unreadCount} New</span>
//                                     </div>
//                                     <div className="max-h-80 overflow-y-auto">
//                                         {notifications.length === 0 ? (
//                                             <p className="p-4 text-center text-gray-500 text-sm">No notifications yet</p>
//                                         ) : (
//                                             notifications.map(notif => (
//                                                 <div 
//                                                     key={notif._id} 
//                                                     onClick={() => handleMarkAsRead(notif._id, notif.link)}
//                                                     className={`p-4 border-b border-gray-50 cursor-pointer transition ${notif.isRead ? 'bg-white text-gray-500' : 'bg-blue-50/50 text-gray-800'}`}
//                                                 >
//                                                     <p className={`text-sm ${notif.isRead ? '' : 'font-semibold'}`}>{notif.message}</p>
//                                                     <p className="text-xs text-gray-400 mt-1">{new Date(notif.createdAt).toLocaleDateString()}</p>
//                                                 </div>
//                                             ))
//                                         )}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                                 {/* User Profile Pill */}
//                                 <div className="flex items-center gap-2 pl-1.5 pr-1.5 sm:pr-5 py-1.5 rounded-full border border-indigo-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 group cursor-pointer">
//                                     <Link href={`/dashboard/${user.role}`} className="flex items-center gap-3">
//                                         {/* Avatar */}
//                                         <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all">
//                                             {user?.profileImage ? (
//                                                 <img 
//                                                     src={user.profileImage} 
//                                                     alt={user.name} 
//                                                     className="h-full w-full object-cover"
//                                                 />
//                                             ) : (
//                                                 <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
//                                                     {user?.name?.charAt(0).toUpperCase() || <FiUser />}
//                                                 </div>
//                                             )}
//                                         </div>
                                        
//                                         {/* Name & Role (Hidden on mobile) */}
//                                         <div className="hidden flex-col sm:flex text-left">
//                                             <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">
//                                                 {user.name}
//                                             </span>
//                                             <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-400 group-hover:text-fuchsia-500">
//                                                 {user.role}
//                                             </span>
//                                         </div>
//                                     </Link>
//                                 </div>

//                                 {/* Logout Button */}
//                                 <button
//                                     onClick={handleLogout}
//                                     className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
//                                     title="Logout"
//                                 >
//                                     <FiLogOut className="h-4 w-4" />
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
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiBriefcase, FiLogOut, FiBell, FiUser } from 'react-icons/fi';
import API from '@/utils/api'; // <-- ADDED: Imported API so fetchNotifications works!

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();

    // Notifications State
    const [notifications, setNotifications] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    // <-- ADDED: Calculate how many notifications are unread!
    const unreadCount = notifications.filter(notif => !notif.isRead).length;

    // Fetch Notifications
    useEffect(() => {
        if (user) {
            fetchNotifications();
        }
    }, [user]);

    const fetchNotifications = async () => {
        try {
            const { data } = await API.get('/notifications');
            setNotifications(data);
        } catch (error) {
            console.error('Error fetching notifications', error);
        }
    };

    const handleMarkAsRead = async (id, link) => {
        try {
            await API.put(`/notifications/${id}/read`);
            fetchNotifications(); // Update list after marking as read
            setShowDropdown(false);
            if (link) router.push(link);
        } catch (error) {
            console.error(error);
        }
    };

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
                                {/* 🔔 Notifications Bell */}
                                <div className="relative">
                                    <button 
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="relative text-gray-600 hover:text-indigo-600 p-2 transition-colors"
                                    >
                                        <FiBell size={22} />
                                        {unreadCount > 0 && (
                                            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                                {unreadCount}
                                            </span>
                                        )}
                                    </button>

                                    {/* Notifications Dropdown */}
                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50">
                                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                                                <h3 className="font-bold text-gray-700">Notifications</h3>
                                                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-bold">{unreadCount} New</span>
                                            </div>
                                            <div className="max-h-80 overflow-y-auto">
                                                {notifications.length === 0 ? (
                                                    <p className="p-4 text-center text-gray-500 text-sm">No notifications yet</p>
                                                ) : (
                                                    notifications.map(notif => (
                                                        <div 
                                                            key={notif._id} 
                                                            onClick={() => handleMarkAsRead(notif._id, notif.link)}
                                                            className={`p-4 border-b border-gray-50 cursor-pointer transition-colors ${notif.isRead ? 'bg-white text-gray-500 hover:bg-gray-50' : 'bg-indigo-50/50 text-gray-800 hover:bg-indigo-50'}`}
                                                        >
                                                            <p className={`text-sm ${notif.isRead ? '' : 'font-semibold'}`}>{notif.message}</p>
                                                            <p className="text-xs text-gray-400 mt-1.5">{new Date(notif.createdAt).toLocaleDateString()}</p>
                                                        </div>
                                                    ))
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