// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import API from '@/utils/api';
// import {
//     FiSearch,
//     FiDollarSign,
//     FiCheckCircle,
//     FiClock,
//     FiAlertCircle,
// } from 'react-icons/fi';

// export default function TaskerDashboard() {
//     const { user } = useAuth();
//     const [bids, setBids] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBids = async () => {
//             try {
//                 const { data } = await API.get('/bids/my-bids');
//                 setBids(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchBids();
//     }, []);

//     const stats = [
//         {
//             label: 'Total Bids',
//             value: bids.length,
//             icon: <FiDollarSign />,
//             color: 'bg-blue-100 text-blue-600',
//         },
//         {
//             label: 'Pending',
//             value: bids.filter((b) => b.bidStatus === 'pending').length,
//             icon: <FiClock />,
//             color: 'bg-yellow-100 text-yellow-600',
//         },
//         {
//             label: 'Accepted',
//             value: bids.filter((b) => b.bidStatus === 'accepted').length,
//             icon: <FiCheckCircle />,
//             color: 'bg-green-100 text-green-600',
//         },
//         {
//             label: 'Rejected',
//             value: bids.filter((b) => b.bidStatus === 'rejected').length,
//             icon: <FiAlertCircle />,
//             color: 'bg-red-100 text-red-600',
//         },
//     ];

//     return (
//         <div>
//             <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-gray-800">
//                     Welcome, {user?.name}! 👋
//                 </h1>
//                 <p className="text-gray-500 mt-1">
//                     Find tasks and grow your freelance career.
//                 </p>

//                 {user?.verificationStatus === 'pending' && (
//                     <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-3">
//                         <FiAlertCircle className="text-yellow-500 text-xl" />
//                         <p className="text-yellow-700 text-sm font-medium">
//                             Your account is pending admin verification. You cannot place bids until verified.
//                         </p>
//                     </div>
//                 )}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//                 {stats.map((stat, i) => (
//                     <div key={i} className="card">
//                         <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-xl mb-3`}>
//                             {stat.icon}
//                         </div>
//                         <p className="text-2xl font-bold text-gray-800">
//                             {loading ? '...' : stat.value}
//                         </p>
//                         <p className="text-gray-500 text-sm">{stat.label}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 <Link
//                     href="/dashboard/tasker/browse"
//                     className="card hover:shadow-md transition flex items-center gap-4 cursor-pointer"
//                 >
//                     <div className="bg-blue-100 p-3 rounded-xl">
//                         <FiSearch className="text-blue-600 text-2xl" />
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800">Browse Tasks</h3>
//                         <p className="text-gray-500 text-sm">Find and bid on available tasks</p>
//                     </div>
//                 </Link>

//                 <Link
//                     href="/dashboard/tasker/my-bids"
//                     className="card hover:shadow-md transition flex items-center gap-4 cursor-pointer"
//                 >
//                     <div className="bg-green-100 p-3 rounded-xl">
//                         <FiDollarSign className="text-green-600 text-2xl" />
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800">My Bids</h3>
//                         <p className="text-gray-500 text-sm">Track all your bids</p>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// }


'use client';

import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import API from '@/utils/api';
import {
    FiSearch,
    FiDollarSign,
    FiCheckCircle,
    FiClock,
    FiAlertCircle,
    FiArrowRight
} from 'react-icons/fi';

export default function TaskerDashboard() {
    const { user } = useAuth();
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBids = async () => {
            try {
                const { data } = await API.get('/bids/my-bids');
                setBids(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBids();
    }, []);

    // 🟢 Safe icon mapping approach
    const stats = [
        {
            label: 'Total Bids',
            value: bids.length,
            icon: FiDollarSign,
            gradient: 'from-blue-500 to-cyan-400',
            bgLight: 'bg-blue-50',
        },
        {
            label: 'Pending',
            value: bids.filter((b) => b.bidStatus === 'pending').length,
            icon: FiClock,
            gradient: 'from-amber-500 to-orange-400',
            bgLight: 'bg-amber-50',
        },
        {
            label: 'Accepted',
            value: bids.filter((b) => b.bidStatus === 'accepted').length,
            icon: FiCheckCircle,
            gradient: 'from-emerald-500 to-teal-400',
            bgLight: 'bg-emerald-50',
        },
        {
            label: 'Rejected',
            value: bids.filter((b) => b.bidStatus === 'rejected').length,
            icon: FiAlertCircle,
            gradient: 'from-rose-500 to-pink-400',
            bgLight: 'bg-rose-50',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        Welcome, {user?.name}! <span className="inline-block animate-bounce origin-bottom-right">👋</span>
                    </h1>
                    <p className="text-slate-500 text-lg mt-2">
                        Find tasks, place bids, and grow your freelance career.
                    </p>
                </div>

                {/* Verification Warning (If pending) */}
                {user?.verificationStatus === 'pending' && (
                    <div className="relative overflow-hidden bg-amber-50 border border-amber-200 rounded-[24px] p-5 flex items-start sm:items-center gap-4 shadow-sm">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-200/50 rounded-full blur-2xl"></div>
                        <div className="w-12 h-12 shrink-0 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl relative z-10">
                            <FiAlertCircle />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-amber-800 font-bold text-lg">Verification Pending</h3>
                            <p className="text-amber-700 font-medium">
                                Your account is currently under review by an admin. You cannot place bids until verified.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div 
                            key={i} 
                            className="group relative bg-white p-6 rounded-[28px] border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.bgLight} rounded-[28px]`}></div>
                            
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white text-2xl shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon />
                                </div>
                                
                                {loading ? (
                                    <div className="h-8 w-16 bg-slate-200 rounded-lg animate-pulse mb-1"></div>
                                ) : (
                                    <p className="text-3xl font-extrabold text-slate-900 mb-1">
                                        {stat.value}
                                    </p>
                                )}
                                <p className="text-slate-500 font-medium text-sm tracking-wide">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Browse Tasks Card */}
                <Link href="/dashboard/tasker/browse" className="group relative overflow-hidden rounded-[32px] p-8 border border-blue-100 bg-white shadow-[0_8px_30px_rgba(59,130,246,0.05)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-[20px] bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <FiSearch />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Browse Tasks</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed">Search through available tasks, filter by category, and place your bids to win jobs.</p>
                        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                            Find Work <FiArrowRight />
                        </div>
                    </div>
                </Link>

                {/* My Bids Card */}
                <Link href="/dashboard/tasker/my-bids" className="group relative overflow-hidden rounded-[32px] p-8 border border-emerald-100 bg-white shadow-[0_8px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-[20px] bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <FiDollarSign />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Manage My Bids</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed">Track the status of your submitted proposals, see accepted bids, and contact clients.</p>
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                            View Status <FiArrowRight />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}