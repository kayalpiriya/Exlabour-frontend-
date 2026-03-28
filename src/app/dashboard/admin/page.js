// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import Link from 'next/link';
// import {
//     FiUsers,
//     FiList,
//     FiDollarSign,
//     FiCheckSquare,
// } from 'react-icons/fi';

// export default function AdminDashboard() {
//     const [stats, setStats] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchStats = async () => {
//             try {
//                 const { data } = await API.get('/admin/dashboard');
//                 setStats(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchStats();
//     }, []);

//     const cards = [
//         {
//             label: 'Total Users',
//             value: stats?.totalUsers,
//             icon: <FiUsers />,
//             color: 'bg-blue-100 text-blue-600',
//             href: '/dashboard/admin/users',
//         },
//         {
//             label: 'Total Taskers',
//             value: stats?.totalTaskers,
//             icon: <FiUsers />,
//             color: 'bg-purple-100 text-purple-600',
//             href: '/dashboard/admin/users',
//         },
//         {
//             label: 'Total Tasks',
//             value: stats?.totalTasks,
//             icon: <FiList />,
//             color: 'bg-green-100 text-green-600',
//             href: '/dashboard/admin/tasks',
//         },
//         {
//             label: 'Pending Tasks',
//             value: stats?.pendingTasks,
//             icon: <FiCheckSquare />,
//             color: 'bg-yellow-100 text-yellow-600',
//             href: '/dashboard/admin/tasks',
//         },
//         {
//             label: 'Total Bids',
//             value: stats?.totalBids,
//             icon: <FiDollarSign />,
//             color: 'bg-red-100 text-red-600',
//             href: '/dashboard/admin/bids',
//         },
//     ];

//     return (
//         <div>
//             <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//                 <p className="text-gray-500">Platform overview and management</p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
//                 {cards.map((card, i) => (
//                     <Link key={i} href={card.href} className="card hover:shadow-md transition">
//                         <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center text-xl mb-3`}>
//                             {card.icon}
//                         </div>
//                         <p className="text-2xl font-bold text-gray-800">
//                             {loading ? '...' : card.value ?? 0}
//                         </p>
//                         <p className="text-gray-500 text-sm">{card.label}</p>
//                     </Link>
//                 ))}
//             </div>

//             {/* Quick Links */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Link href="/dashboard/admin/users" className="card hover:shadow-md transition text-center">
//                     <FiUsers className="text-blue-600 text-4xl mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-800">Manage Users</h3>
//                     <p className="text-gray-500 text-sm mt-1">Verify or block users and taskers</p>
//                 </Link>
//                 <Link href="/dashboard/admin/tasks" className="card hover:shadow-md transition text-center">
//                     <FiCheckSquare className="text-green-600 text-4xl mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-800">Approve Tasks</h3>
//                     <p className="text-gray-500 text-sm mt-1">Review and approve posted tasks</p>
//                 </Link>
//                 <Link href="/dashboard/admin/bids" className="card hover:shadow-md transition text-center">
//                     <FiDollarSign className="text-yellow-600 text-4xl mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-800">View Bids</h3>
//                     <p className="text-gray-500 text-sm mt-1">Monitor all bidding activity</p>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import Link from 'next/link';
// import {
//     FiUsers,
//     FiList,
//     FiDollarSign,
//     FiCheckSquare,
//     FiArrowRight,
//     FiShield
// } from 'react-icons/fi';

// export default function AdminDashboard() {
//     const [stats, setStats] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchStats = async () => {
//             try {
//                 const { data } = await API.get('/admin/dashboard');
//                 setStats(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchStats();
//     }, []);

//     const cards = [
//         {
//             label: 'Total Users',
//             value: stats?.totalUsers,
//             icon: <FiUsers />,
//             gradient: 'from-blue-500 to-cyan-400',
//             bgLight: 'bg-blue-50',
//             href: '/dashboard/admin/users',
//         },
//         {
//             label: 'Total Taskers',
//             value: stats?.totalTaskers,
//             icon: <FiShield />,
//             gradient: 'from-violet-500 to-fuchsia-400',
//             bgLight: 'bg-violet-50',
//             href: '/dashboard/admin/users',
//         },
//         {
//             label: 'Total Tasks',
//             value: stats?.totalTasks,
//             icon: <FiList />,
//             gradient: 'from-emerald-500 to-teal-400',
//             bgLight: 'bg-emerald-50',
//             href: '/dashboard/admin/tasks',
//         },
//         {
//             label: 'Pending Tasks',
//             value: stats?.pendingTasks,
//             icon: <FiCheckSquare />,
//             gradient: 'from-amber-500 to-orange-400',
//             bgLight: 'bg-amber-50',
//             href: '/dashboard/admin/tasks',
//         },
//         {
//             label: 'Total Bids',
//             value: stats?.totalBids,
//             icon: <FiDollarSign />,
//             gradient: 'from-rose-500 to-pink-400',
//             bgLight: 'bg-rose-50',
//             href: '/dashboard/admin/bids',
//         },
//     ];

//     return (
//         <div className="max-w-7xl mx-auto space-y-10">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-violet-100 opacity-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
//                 <div className="relative z-10">
//                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
//                         Command Center
//                     </h1>
//                     <p className="text-slate-500 text-lg">Platform overview and live management metrics.</p>
//                 </div>
//                 <div className="relative z-10 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm font-medium shadow-lg">
//                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
//                     System Online
//                 </div>
//             </div>

//             {/* Top Stat Cards */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//                 {cards.map((card, i) => (
//                     <Link 
//                         key={i} 
//                         href={card.href} 
//                         className="group relative bg-white p-6 rounded-[28px] border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//                     >
//                         {/* Soft background glow on hover */}
//                         <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.bgLight} rounded-[28px]`}></div>
                        
//                         <div className="relative z-10">
//                             <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white text-2xl shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                                 {card.icon}
//                             </div>
                            
//                             {loading ? (
//                                 <div className="h-8 w-16 bg-slate-200 rounded-lg animate-pulse mb-1"></div>
//                             ) : (
//                                 <p className="text-3xl font-extrabold text-slate-900 mb-1">
//                                     {card.value ?? 0}
//                                 </p>
//                             )}
//                             <p className="text-slate-500 font-medium text-sm">{card.label}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>

//             {/* Quick Actions (Large Cards) */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
//                 {/* Manage Users Card */}
//                 <Link href="/dashboard/admin/users" className="group relative overflow-hidden rounded-[32px] p-8 border border-blue-100 bg-white shadow-[0_8px_30px_rgba(59,130,246,0.05)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300">
//                     <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors"></div>
//                     <div className="relative z-10">
//                         <div className="w-16 h-16 rounded-[20px] bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
//                             <FiUsers />
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-900 mb-2">Manage Users</h3>
//                         <p className="text-slate-500 mb-6 leading-relaxed">Verify, review, or block user and tasker accounts securely.</p>
//                         <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
//                             View Directory <FiArrowRight />
//                         </div>
//                     </div>
//                 </Link>

//                 {/* Approve Tasks Card */}
//                 <Link href="/dashboard/admin/tasks" className="group relative overflow-hidden rounded-[32px] p-8 border border-emerald-100 bg-white shadow-[0_8px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
//                     <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors"></div>
//                     <div className="relative z-10">
//                         <div className="w-16 h-16 rounded-[20px] bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
//                             <FiCheckSquare />
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-900 mb-2">Approve Tasks</h3>
//                         <p className="text-slate-500 mb-6 leading-relaxed">Review pending tasks and publish them to the marketplace.</p>
//                         <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
//                             Review Queue <FiArrowRight />
//                         </div>
//                     </div>
//                 </Link>

//                 {/* View Bids Card */}
//                 <Link href="/dashboard/admin/bids" className="group relative overflow-hidden rounded-[32px] p-8 border border-violet-100 bg-white shadow-[0_8px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300">
//                     <div className="absolute top-0 right-0 w-40 h-40 bg-violet-50 rounded-full blur-3xl group-hover:bg-violet-100 transition-colors"></div>
//                     <div className="relative z-10">
//                         <div className="w-16 h-16 rounded-[20px] bg-violet-50 text-violet-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 shadow-sm">
//                             <FiDollarSign />
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-900 mb-2">Monitor Bids</h3>
//                         <p className="text-slate-500 mb-6 leading-relaxed">Oversight of all financial proposals and task assignments.</p>
//                         <div className="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
//                             View Analytics <FiArrowRight />
//                         </div>
//                     </div>
//                 </Link>

//             </div>
//         </div>
//     );
// }



'use client';

import { useEffect, useState } from 'react';
import API from '@/utils/api';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; 
import toast from 'react-hot-toast';
import {
    FiUsers,
    FiList,
    FiDollarSign,
    FiCheckSquare,
    FiArrowRight,
    FiShield,
    FiUser
} from 'react-icons/fi';

export default function AdminDashboard() {
    const { user } = useAuth(); 
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await API.get('/admin/dashboard');
                setStats(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const cards = [
        {
            label: 'Total Users',
            value: stats?.totalUsers,
            icon: <FiUsers />,
            gradient: 'from-blue-500 to-cyan-400',
            bgLight: 'bg-blue-50',
            href: '/dashboard/admin/users',
        },
        {
            label: 'Total Taskers',
            value: stats?.totalTaskers,
            icon: <FiShield />,
            gradient: 'from-violet-500 to-fuchsia-400',
            bgLight: 'bg-violet-50',
            href: '/dashboard/admin/users',
        },
        {
            label: 'Total Tasks',
            value: stats?.totalTasks,
            icon: <FiList />,
            gradient: 'from-emerald-500 to-teal-400',
            bgLight: 'bg-emerald-50',
            href: '/dashboard/admin/tasks',
        },
        {
            label: 'Pending Tasks',
            value: stats?.pendingTasks,
            icon: <FiCheckSquare />,
            gradient: 'from-amber-500 to-orange-400',
            bgLight: 'bg-amber-50',
            href: '/dashboard/admin/tasks',
        },
        {
            label: 'Total Bids',
            value: stats?.totalBids,
            icon: <FiDollarSign />,
            gradient: 'from-rose-500 to-pink-400',
            bgLight: 'bg-rose-50',
            href: '/dashboard/admin/bids',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-violet-100 opacity-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Text Content */}
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                        Command Center
                    </h1>
                    <p className="text-slate-500 text-lg">Platform overview and live management metrics.</p>
                </div>

                {/* --- ADMIN PROFILE SECTION (Display Only) --- */}
                <div className="relative z-10 flex items-center gap-4">
                    {/* Status Pill */}
                    <div className="hidden md:inline-flex items-center gap-2 bg-slate-50 text-slate-600 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        System Online
                    </div>

                    {/* Profile Card */}
                    <div className="flex items-center gap-3 pl-1 pr-4 py-1 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-slate-100 relative">
                            {user?.profileImage ? (
                                <img 
                                    src={user.profileImage} 
                                    alt="Admin" 
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold">
                                    {user?.name?.charAt(0).toUpperCase() || <FiUser />}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 leading-tight">
                                {user?.name || 'Admin'}
                            </span>
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                                Super Admin
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {cards.map((card, i) => (
                    <Link 
                        key={i} 
                        href={card.href} 
                        className="group relative bg-white p-6 rounded-[28px] border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        {/* Soft background glow on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.bgLight} rounded-[28px]`}></div>
                        
                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white text-2xl shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                {card.icon}
                            </div>
                            
                            {loading ? (
                                <div className="h-8 w-16 bg-slate-200 rounded-lg animate-pulse mb-1"></div>
                            ) : (
                                <p className="text-3xl font-extrabold text-slate-900 mb-1">
                                    {card.value ?? 0}
                                </p>
                            )}
                            <p className="text-slate-500 font-medium text-sm">{card.label}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick Actions (Large Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Manage Users Card */}
                <Link href="/dashboard/admin/users" className="group relative overflow-hidden rounded-[32px] p-8 border border-blue-100 bg-white shadow-[0_8px_30px_rgba(59,130,246,0.05)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-[20px] bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <FiUsers />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Manage Users</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed">Verify, review, or block user and tasker accounts securely.</p>
                        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                            View Directory <FiArrowRight />
                        </div>
                    </div>
                </Link>

                {/* Approve Tasks Card */}
                <Link href="/dashboard/admin/tasks" className="group relative overflow-hidden rounded-[32px] p-8 border border-emerald-100 bg-white shadow-[0_8px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-[20px] bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <FiCheckSquare />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Approve Tasks</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed">Review pending tasks and publish them to the marketplace.</p>
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                            Review Queue <FiArrowRight />
                        </div>
                    </div>
                </Link>

                {/* View Bids Card */}
                <Link href="/dashboard/admin/bids" className="group relative overflow-hidden rounded-[32px] p-8 border border-violet-100 bg-white shadow-[0_8px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-violet-50 rounded-full blur-3xl group-hover:bg-violet-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-[20px] bg-violet-50 text-violet-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <FiDollarSign />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Monitor Bids</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed">Oversight of all financial proposals and task assignments.</p>
                        <div className="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                            View Analytics <FiArrowRight />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}