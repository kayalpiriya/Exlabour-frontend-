// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import API from '@/utils/api';
// import {
//     FiPlusCircle,
//     FiList,
//     FiClock,
//     FiCheckCircle,
//     FiAlertCircle,
// } from 'react-icons/fi';

// export default function UserDashboard() {
//     const { user } = useAuth();
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const { data } = await API.get('/tasks');
//                 setTasks(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchTasks();
//     }, []);

//     const stats = [
//         {
//             label: 'Total Tasks',
//             value: tasks.length,
//             icon: <FiList />,
//             color: 'bg-blue-100 text-blue-600',
//         },
//         {
//             label: 'Pending Approval',
//             value: tasks.filter((t) => t.approvalStatus === 'pending_admin_approval').length,
//             icon: <FiClock />,
//             color: 'bg-yellow-100 text-yellow-600',
//         },
//         {
//             label: 'Active Tasks',
//             value: tasks.filter((t) => t.taskStatus === 'open_for_bidding').length,
//             icon: <FiAlertCircle />,
//             color: 'bg-green-100 text-green-600',
//         },
//         {
//             label: 'Completed',
//             value: tasks.filter((t) => t.taskStatus === 'completed').length,
//             icon: <FiCheckCircle />,
//             color: 'bg-purple-100 text-purple-600',
//         },
//     ];

//     return (
//         <div>
//             {/* Header */}
//             <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-gray-800">
//                     Welcome back, {user?.name}! 👋
//                 </h1>
//                 <p className="text-gray-500 mt-1">
//                     Here is what is happening with your tasks today.
//                 </p>

//                 {user?.verificationStatus === 'pending' && (
//                     <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-3">
//                         <FiAlertCircle className="text-yellow-500 text-xl" />
//                         <p className="text-yellow-700 text-sm font-medium">
//                             Your account is pending admin verification. Some features may be limited.
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
//                     href="/dashboard/user/tasks/create"
//                     className="card hover:shadow-md transition flex items-center gap-4 cursor-pointer"
//                 >
//                     <div className="bg-blue-100 p-3 rounded-xl">
//                         <FiPlusCircle className="text-blue-600 text-2xl" />
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800">Post New Task</h3>
//                         <p className="text-gray-500 text-sm">Create a task and receive bids</p>
//                     </div>
//                 </Link>

//                 <Link
//                     href="/dashboard/user/tasks"
//                     className="card hover:shadow-md transition flex items-center gap-4 cursor-pointer"
//                 >
//                     <div className="bg-green-100 p-3 rounded-xl">
//                         <FiList className="text-green-600 text-2xl" />
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800">View My Tasks</h3>
//                         <p className="text-gray-500 text-sm">Manage and track your tasks</p>
//                     </div>
//                 </Link>
//             </div>

//             {/* Recent Tasks */}
//             <div className="card">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-lg font-bold text-gray-800">Recent Tasks</h2>
//                     <Link
//                         href="/dashboard/user/tasks"
//                         className="text-blue-600 text-sm hover:underline"
//                     >
//                         View all
//                     </Link>
//                 </div>

//                 {loading ? (
//                     <p className="text-gray-400 text-center py-8">Loading tasks...</p>
//                 ) : tasks.length === 0 ? (
//                     <div className="text-center py-12">
//                         <FiList className="text-gray-300 text-5xl mx-auto mb-4" />
//                         <p className="text-gray-400 font-medium">No tasks yet</p>
//                         <Link
//                             href="/dashboard/user/tasks/create"
//                             className="btn-primary mt-4 inline-block"
//                         >
//                             Post Your First Task
//                         </Link>
//                     </div>
//                 ) : (
//                     <div className="space-y-3">
//                         {tasks.slice(0, 5).map((task) => (
//                             <Link
//                                 key={task._id}
//                                 href={`/dashboard/user/tasks/${task._id}`}
//                                 className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
//                             >
//                                 <div>
//                                     <p className="font-medium text-gray-800">{task.title}</p>
//                                     <p className="text-sm text-gray-500">{task.category}</p>
//                                 </div>
//                                 <div className="text-right">
//                                     <span className={`text-xs px-2 py-1 rounded-full font-medium ${
//                                         task.approvalStatus === 'approved'
//                                             ? 'bg-green-100 text-green-700'
//                                             : task.approvalStatus === 'rejected'
//                                             ? 'bg-red-100 text-red-700'
//                                             : 'bg-yellow-100 text-yellow-700'
//                                     }`}>
//                                         {task.approvalStatus}
//                                     </span>
//                                     <p className="text-xs text-gray-400 mt-1">
//                                         ₹{task.budgetMin} - ₹{task.budgetMax}
//                                     </p>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 )}
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
    FiPlusCircle,
    FiList,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiChevronRight,
    FiArrowRight
} from 'react-icons/fi';

export default function UserDashboard() {
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await API.get('/tasks');
                setTasks(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    // Formatted for modern Tailwind colors
    const stats = [
        {
            label: 'Total Tasks',
            value: tasks.length,
            icon: <FiList className="w-6 h-6" />,
            color: 'bg-blue-50 text-blue-600 ring-blue-100',
        },
        {
            label: 'Pending Approval',
            value: tasks.filter((t) => t.approvalStatus === 'pending_admin_approval').length,
            icon: <FiClock className="w-6 h-6" />,
            color: 'bg-amber-50 text-amber-600 ring-amber-100',
        },
        {
            label: 'Active Tasks',
            value: tasks.filter((t) => t.taskStatus === 'open_for_bidding').length,
            icon: <FiAlertCircle className="w-6 h-6" />,
            color: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
        },
        {
            label: 'Completed',
            value: tasks.filter((t) => t.taskStatus === 'completed').length,
            icon: <FiCheckCircle className="w-6 h-6" />,
            color: 'bg-purple-50 text-purple-600 ring-purple-100',
        },
    ];

    // Helper to format status text nicely
    const formatStatus = (status) => status?.replace(/_/g, ' ') || 'Unknown';

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-fade-in">
            
            {/* Header Section */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{user?.name?.split(' ')[0]}</span>! 👋
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium text-lg">
                        Here is what is happening with your tasks today.
                    </p>

                    {user?.verificationStatus === 'pending' && (
                        <div className="mt-6 bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-4 flex items-start sm:items-center gap-4 max-w-3xl">
                            <div className="bg-amber-100/50 p-2 rounded-xl shrink-0">
                                <FiAlertCircle className="text-amber-600 text-xl" />
                            </div>
                            <p className="text-amber-800 text-sm font-medium">
                                Your account is currently <strong className="font-bold text-amber-900">pending admin verification</strong>. Some features may be limited until verified.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ring-1 ${stat.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                            {stat.icon}
                        </div>
                        <p className="text-3xl font-black text-gray-900 mb-1">
                            {loading ? <span className="animate-pulse text-gray-300">...</span> : stat.value}
                        </p>
                        <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link
                    href="/dashboard/user/tasks/create"
                    className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-between"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
                        <FiPlusCircle className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                            <FiPlusCircle className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Post New Task</h3>
                        <p className="text-blue-100 font-medium text-sm">Create a task and receive bids</p>
                    </div>
                    <FiArrowRight className="text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
                </Link>

                <Link
                    href="/dashboard/user/tasks"
                    className="group relative overflow-hidden bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200 flex items-center justify-between"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                        <FiList className="w-32 h-32 text-emerald-600" />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-emerald-50 ring-1 ring-emerald-100 text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                            <FiList className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">View My Tasks</h3>
                        <p className="text-gray-500 font-medium text-sm">Manage and track your tasks</p>
                    </div>
                    <FiChevronRight className="text-3xl text-gray-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-600 transition-all duration-300 relative z-10" />
                </Link>
            </div>

            {/* Recent Tasks */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] p-6 md:p-8">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Recent Tasks</h2>
                        <p className="text-sm text-gray-500 mt-1 font-medium">Your latest task postings</p>
                    </div>
                    <Link
                        href="/dashboard/user/tasks"
                        className="text-blue-600 text-sm font-bold bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors"
                    >
                        View all
                    </Link>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-3">
                        <div className="w-10 h-10 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-medium">Loading your tasks...</p>
                    </div>
                ) : tasks.length === 0 ? (
                    <div className="text-center py-16 px-4 border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/50">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                            <FiList className="text-gray-400 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">No tasks posted yet</h3>
                        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">Get started by posting your first task to the marketplace.</p>
                        <Link
                            href="/dashboard/user/tasks/create"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md shadow-blue-500/20 inline-flex items-center gap-2"
                        >
                            <FiPlusCircle /> Post Your First Task
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {tasks.slice(0, 5).map((task) => (
                            <Link
                                key={task._id}
                                href={`/dashboard/user/tasks/${task._id}`}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="hidden sm:flex bg-gray-50 border border-gray-100 w-12 h-12 rounded-xl items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors shrink-0">
                                        <FiList className="text-gray-400 group-hover:text-blue-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-1 text-lg">
                                            {task.title}
                                        </p>
                                        <p className="text-sm text-gray-500 font-medium mt-0.5 flex items-center gap-2">
                                            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{task.category}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t border-gray-100 sm:border-0 pt-3 sm:pt-0">
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ring-1 ${
                                        task.approvalStatus === 'approved'
                                            ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                                            : task.approvalStatus === 'rejected'
                                            ? 'bg-red-50 text-red-700 ring-red-600/20'
                                            : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                                    }`}>
                                        {formatStatus(task.approvalStatus)}
                                    </span>
                                    <p className="text-sm font-bold text-gray-700 mt-1.5">
                                        <span className="text-gray-400 font-medium text-xs mr-1">Budget:</span>
                                        ₹{task.budgetMin} - ₹{task.budgetMax}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}