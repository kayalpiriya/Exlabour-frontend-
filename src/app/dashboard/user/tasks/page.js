// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiPlusCircle, FiEye, FiTrash2, FiClock } from 'react-icons/fi';

// export default function MyTasksPage() {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchTasks = async () => {
//         try {
//             const { data } = await API.get('/tasks');
//             setTasks(data);
//         } catch (error) {
//             toast.error('Failed to fetch tasks');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!confirm('Are you sure you want to delete this task?')) return;
//         try {
//             await API.delete(`/tasks/${id}`);
//             toast.success('Task deleted');
//             fetchTasks();
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Delete failed');
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     return (
//         <div>
//             <div className="flex justify-between items-center mb-6">
//                 <div>
//                     <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
//                     <p className="text-gray-500">Manage all your posted tasks</p>
//                 </div>
//                 <Link
//                     href="/dashboard/user/tasks/create"
//                     className="btn-primary flex items-center gap-2"
//                 >
//                     <FiPlusCircle />
//                     Post Task
//                 </Link>
//             </div>

//             {loading ? (
//                 <div className="text-center py-20 text-gray-400">Loading...</div>
//             ) : tasks.length === 0 ? (
//                 <div className="card text-center py-16">
//                     <FiClock className="text-gray-300 text-6xl mx-auto mb-4" />
//                     <p className="text-gray-400 font-medium text-lg">No tasks posted yet</p>
//                     <Link
//                         href="/dashboard/user/tasks/create"
//                         className="btn-primary mt-4 inline-block"
//                     >
//                         Post Your First Task
//                     </Link>
//                 </div>
//             ) : (
//                 <div className="grid gap-4">
//                     {tasks.map((task) => (
//                         <div
//                             key={task._id}
//                             className="card hover:shadow-md transition"
//                         >
//                             <div className="flex justify-between items-start">
//                                 <div className="flex-1">
//                                     <div className="flex items-center gap-3 mb-2">
//                                         <h3 className="font-semibold text-gray-800 text-lg">
//                                             {task.title}
//                                         </h3>
//                                         <span className={`text-xs px-2 py-1 rounded-full font-medium ${
//                                             task.approvalStatus === 'approved'
//                                                 ? 'badge-verified'
//                                                 : task.approvalStatus === 'rejected'
//                                                 ? 'badge-rejected'
//                                                 : 'badge-pending'
//                                         }`}>
//                                             {task.approvalStatus}
//                                         </span>
//                                         <span className={`text-xs px-2 py-1 rounded-full font-medium ${
//                                             task.taskStatus === 'completed'
//                                                 ? 'badge-verified'
//                                                 : task.taskStatus === 'assigned'
//                                                 ? 'bg-blue-100 text-blue-700'
//                                                 : 'badge-pending'
//                                         }`}>
//                                             {task.taskStatus}
//                                         </span>
//                                     </div>
//                                     <p className="text-gray-500 text-sm mb-3 line-clamp-2">
//                                         {task.description}
//                                     </p>
//                                     <div className="flex gap-4 text-sm text-gray-500">
//                                         <span>📂 {task.category}</span>
//                                         <span>📍 {task.location}</span>
//                                         <span>💰 ₹{task.budgetMin} - ₹{task.budgetMax}</span>
//                                         <span>📅 {new Date(task.deadline).toLocaleDateString()}</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-2 ml-4">
//                                     <Link
//                                         href={`/dashboard/user/tasks/${task._id}`}
//                                         className="btn-secondary flex items-center gap-1 text-sm"
//                                     >
//                                         <FiEye /> View Bids
//                                     </Link>
//                                     {task.taskStatus === 'open_for_bidding' && (
//                                         <button
//                                             onClick={() => handleDelete(task._id)}
//                                             className="btn-danger flex items-center gap-1 text-sm"
//                                         >
//                                             <FiTrash2 />
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { 
//     FiPlusCircle, 
//     FiEye, 
//     FiTrash2, 
//     FiClock,
//     FiFolder,
//     FiMapPin,
//     FiDollarSign,
//     FiCalendar
// } from 'react-icons/fi';

// export default function MyTasksPage() {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchTasks = async () => {
//         try {
//             const { data } = await API.get('/tasks');
//             setTasks(data);
//         } catch (error) {
//             toast.error('Failed to fetch tasks');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!confirm('Are you sure you want to delete this task?')) return;
//         try {
//             await API.delete(`/tasks/${id}`);
//             toast.success('Task deleted');
//             fetchTasks();
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Delete failed');
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // Helper functions for modern badge styling
//     const formatStatus = (status) => status?.replace(/_/g, ' ') || 'Unknown';
    
//     return (
//         <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-12">
            
//             {/* Header Section */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)]">
//                 <div>
//                     <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Tasks</h1>
//                     <p className="text-gray-500 mt-1 font-medium">Manage all your posted tasks and review bids</p>
//                 </div>
//                 <Link
//                     href="/dashboard/user/tasks/create"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
//                 >
//                     <FiPlusCircle className="text-xl" />
//                     Post New Task
//                 </Link>
//             </div>

//             {/* Content Area */}
//             {loading ? (
//                 <div className="flex flex-col justify-center items-center py-24 space-y-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
//                     <div className="w-12 h-12 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
//                     <p className="text-gray-400 font-medium animate-pulse">Loading your tasks...</p>
//                 </div>
//             ) : tasks.length === 0 ? (
//                 <div className="text-center py-20 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
//                     <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-gray-100">
//                         <FiClock className="text-gray-400 text-4xl" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">No tasks posted yet</h2>
//                     <p className="text-gray-500 font-medium text-base max-w-sm mx-auto mb-8">
//                         You haven't created any tasks. Post your first task to start receiving bids from qualified taskers!
//                     </p>
//                     <Link
//                         href="/dashboard/user/tasks/create"
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-md shadow-blue-500/20 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
//                     >
//                         <FiPlusCircle className="text-xl" />
//                         Post Your First Task
//                     </Link>
//                 </div>
//             ) : (
//                 <div className="flex flex-col gap-5">
//                     {tasks.map((task) => (
//                         <div
//                             key={task._id}
//                             className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
//                         >
//                             {/* Task Info */}
//                             <div className="flex-1">
//                                 <div className="flex flex-wrap items-center gap-3 mb-3">
//                                     <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors line-clamp-1">
//                                         {task.title}
//                                     </h3>
                                    
//                                     {/* Approval Badge */}
//                                     <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ring-1 ${
//                                         task.approvalStatus === 'approved'
//                                             ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
//                                             : task.approvalStatus === 'rejected'
//                                             ? 'bg-red-50 text-red-700 ring-red-600/20'
//                                             : 'bg-amber-50 text-amber-700 ring-amber-600/20'
//                                     }`}>
//                                         {formatStatus(task.approvalStatus)}
//                                     </span>

//                                     {/* Task Status Badge */}
//                                     <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ring-1 ${
//                                         task.taskStatus === 'completed'
//                                             ? 'bg-purple-50 text-purple-700 ring-purple-600/20'
//                                             : task.taskStatus === 'assigned'
//                                             ? 'bg-blue-50 text-blue-700 ring-blue-600/20'
//                                             : 'bg-gray-50 text-gray-600 ring-gray-600/20'
//                                     }`}>
//                                         {formatStatus(task.taskStatus)}
//                                     </span>
//                                 </div>
                                
//                                 <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed max-w-4xl">
//                                     {task.description}
//                                 </p>
                                
//                                 {/* Metadata Grid */}
//                                 <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-600">
//                                     <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
//                                         <FiFolder className="text-blue-500" />
//                                         <span>{task.category}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
//                                         <FiMapPin className="text-red-500" />
//                                         <span>{task.location}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
//                                         <FiDollarSign className="text-green-600" />
//                                         <span className="text-green-700 font-bold">₹{task.budgetMin} - ₹{task.budgetMax}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
//                                         <FiCalendar className="text-purple-500" />
//                                         <span>{new Date(task.deadline).toLocaleDateString()}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Actions Container */}
//                             <div className="flex md:flex-col justify-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
//                                 <Link
//                                     href={`/dashboard/user/tasks/${task._id}`}
//                                     className="bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 flex-1 md:flex-none"
//                                 >
//                                     <FiEye className="text-lg" /> 
//                                     <span>View Bids</span>
//                                 </Link>
                                
//                                 {task.taskStatus === 'open_for_bidding' && (
//                                     <button
//                                         onClick={() => handleDelete(task._id)}
//                                         className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 flex-none group/btn"
//                                         title="Delete Task"
//                                     >
//                                         <FiTrash2 className="text-lg group-hover/btn:scale-110 transition-transform" />
//                                         <span className="md:hidden">Delete</span>
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }



'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import {
    FiPlusCircle,
    FiEye,
    FiTrash2,
    FiClock,
    FiFolder,
    FiMapPin,
    FiDollarSign,
    FiCalendar,
    FiImage
} from 'react-icons/fi';

export default function MyTasksPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        try {
            const { data } = await API.get('/tasks');
            setTasks(data);
        } catch (error) {
            toast.error('Failed to fetch tasks');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this task?')) return;
        try {
            await API.delete(`/tasks/${id}`);
            toast.success('Task deleted');
            fetchTasks();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Delete failed');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Helper functions for modern badge styling
    const formatStatus = (status) => status?.replace(/_/g, ' ') || 'Unknown';

    return (
        <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-12">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)]">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Tasks</h1>
                    <p className="text-gray-500 mt-1 font-medium">Manage all your posted tasks and review bids</p>
                </div>
                <Link
                    href="/dashboard/user/tasks/create"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                    <FiPlusCircle className="text-xl" />
                    Post New Task
                </Link>
            </div>

            {/* Content Area */}
            {loading ? (
                <div className="flex flex-col justify-center items-center py-24 space-y-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
                    <p className="text-gray-400 font-medium animate-pulse">Loading your tasks...</p>
                </div>
            ) : tasks.length === 0 ? (
                <div className="text-center py-20 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
                    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-gray-100">
                        <FiClock className="text-gray-400 text-4xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">No tasks posted yet</h2>
                    <p className="text-gray-500 font-medium text-base max-w-sm mx-auto mb-8">
                        You haven't created any tasks. Post your first task to start receiving bids from qualified taskers!
                    </p>
                    <Link
                        href="/dashboard/user/tasks/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-md shadow-blue-500/20 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
                    >
                        <FiPlusCircle className="text-xl" />
                        Post Your First Task
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300 group flex flex-col md:flex-row md:items-start justify-between gap-6"
                        >
                            
                            {/* 🔥 UPDATED: Image Thumbnail Logic Starts Here */}
                            {task.attachments && task.attachments.length > 0 ? (
                                <div className="w-full md:w-48 h-48 md:h-auto shrink-0 rounded-xl overflow-hidden border border-gray-100 relative bg-gray-50">
                                    <img 
                                        src={task.attachments[0]} 
                                        alt={task.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {task.attachments.length > 1 && (
                                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                                            <FiImage /> +{task.attachments.length - 1}
                                        </div>
                                    )}
                                </div>
                            ) : null}
                            {/* 🔥 UPDATED: Image Thumbnail Logic Ends Here */}

                            {/* Task Info */}
                            <div className="flex-1 w-full">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors line-clamp-1">
                                        {task.title}
                                    </h3>

                                    {/* Approval Badge */}
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ring-1 ${task.approvalStatus === 'approved'
                                            ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                                            : task.approvalStatus === 'rejected'
                                                ? 'bg-red-50 text-red-700 ring-red-600/20'
                                                : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                                        }`}>
                                        {formatStatus(task.approvalStatus)}
                                    </span>

                                    {/* Task Status Badge */}
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ring-1 ${task.taskStatus === 'completed'
                                            ? 'bg-purple-50 text-purple-700 ring-purple-600/20'
                                            : task.taskStatus === 'assigned'
                                                ? 'bg-blue-50 text-blue-700 ring-blue-600/20'
                                                : 'bg-gray-50 text-gray-600 ring-gray-600/20'
                                        }`}>
                                        {formatStatus(task.taskStatus)}
                                    </span>
                                </div>

                                <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed max-w-4xl">
                                    {task.description}
                                </p>

                                {/* Metadata Grid */}
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-600">
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <FiFolder className="text-blue-500" />
                                        <span>{task.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <FiMapPin className="text-red-500" />
                                        <span>{task.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <FiDollarSign className="text-green-600" />
                                        <span className="text-green-700 font-bold">₹{task.budgetMin} - ₹{task.budgetMax}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <FiCalendar className="text-purple-500" />
                                        <span>{new Date(task.deadline).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions Container */}
                            <div className="flex md:flex-col justify-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0 w-full md:w-auto">
                                <Link
                                    href={`/dashboard/user/tasks/${task._id}`}
                                    className="bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 flex-1 md:flex-none"
                                >
                                    <FiEye className="text-lg" />
                                    <span>View Bids</span>
                                </Link>

                                {task.taskStatus === 'open_for_bidding' && (
                                    <button
                                        onClick={() => handleDelete(task._id)}
                                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 flex-none group/btn"
                                        title="Delete Task"
                                    >
                                        <FiTrash2 className="text-lg group-hover/btn:scale-110 transition-transform" />
                                        <span className="md:hidden">Delete</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}