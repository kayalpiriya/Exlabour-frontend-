// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import {
//     FiUser,
//     FiClock,
//     FiDollarSign,
//     FiCheckCircle,
//     FiXCircle,
// } from 'react-icons/fi';

// export default function TaskDetailPage() {
//     const { id } = useParams();
//     const [task, setTask] = useState(null);
//     const [bids, setBids] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             const [taskRes, bidsRes] = await Promise.all([
//                 API.get(`/tasks/${id}`),
//                 API.get(`/bids/${id}`),
//             ]);
//             setTask(taskRes.data);
//             setBids(bidsRes.data);
//         } catch (error) {
//             toast.error('Failed to load task details');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleAcceptBid = async (bidId) => {
//         if (!confirm('Accept this bid? All other bids will be rejected.')) return;
//         try {
//             await API.put(`/bids/accept/${bidId}`);
//             toast.success('Bid accepted! Task assigned.');
//             fetchData();
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to accept bid');
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="text-center py-20 text-gray-400">Loading...</div>
//         );
//     }

//     if (!task) return null;

//     return (
//         <div className="max-w-4xl mx-auto">
//             {/* Task Info */}
//             <div className="card mb-6">
//                 <div className="flex justify-between items-start mb-4">
//                     <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
//                     <div className="flex gap-2">
//                         <span className={`text-xs px-3 py-1 rounded-full font-medium ${
//                             task.approvalStatus === 'approved'
//                                 ? 'badge-verified'
//                                 : 'badge-pending'
//                         }`}>
//                             {task.approvalStatus}
//                         </span>
//                         <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
//                             {task.taskStatus}
//                         </span>
//                     </div>
//                 </div>

//                 <p className="text-gray-600 mb-4">{task.description}</p>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4">
//                     <div>
//                         <p className="text-xs text-gray-400">Category</p>
//                         <p className="font-medium text-gray-700">{task.category}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400">Budget</p>
//                         <p className="font-medium text-gray-700">
//                             ₹{task.budgetMin} - ₹{task.budgetMax}
//                         </p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400">Location</p>
//                         <p className="font-medium text-gray-700">{task.location}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400">Deadline</p>
//                         <p className="font-medium text-gray-700">
//                             {new Date(task.deadline).toLocaleDateString()}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Bids Section */}
//             <div className="card">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">
//                     Bids Received ({bids.length})
//                 </h2>

//                 {bids.length === 0 ? (
//                     <div className="text-center py-12">
//                         <FiClock className="text-gray-300 text-5xl mx-auto mb-4" />
//                         <p className="text-gray-400">No bids yet. Waiting for taskers to bid.</p>
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         {bids.map((bid) => (
//                             <div
//                                 key={bid._id}
//                                 className={`border rounded-xl p-5 transition ${
//                                     bid.bidStatus === 'accepted'
//                                         ? 'border-green-300 bg-green-50'
//                                         : bid.bidStatus === 'rejected'
//                                         ? 'border-red-200 bg-red-50 opacity-60'
//                                         : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
//                                 }`}
//                             >
//                                 <div className="flex justify-between items-start">
//                                     <div className="flex items-center gap-3 mb-3">
//                                         <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
//                                             {bid.taskerId?.name?.charAt(0).toUpperCase()}
//                                         </div>
//                                         <div>
//                                             <p className="font-semibold text-gray-800">
//                                                 {bid.taskerId?.name}
//                                             </p>
//                                             <p className="text-xs text-gray-500">
//                                                 {bid.taskerId?.email}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <span className={`text-xs px-3 py-1 rounded-full font-medium ${
//                                         bid.bidStatus === 'accepted'
//                                             ? 'badge-verified'
//                                             : bid.bidStatus === 'rejected'
//                                             ? 'badge-rejected'
//                                             : 'badge-pending'
//                                     }`}>
//                                         {bid.bidStatus}
//                                     </span>
//                                 </div>

//                                 <p className="text-gray-600 text-sm mb-4">
//                                     {bid.proposalMessage}
//                                 </p>

//                                 <div className="flex items-center justify-between">
//                                     <div className="flex gap-6">
//                                         <div className="flex items-center gap-1 text-green-600 font-bold">
//                                             <FiDollarSign />
//                                             ₹{bid.bidAmount}
//                                         </div>
//                                         <div className="flex items-center gap-1 text-gray-500 text-sm">
//                                             <FiClock />
//                                             {bid.deliveryDays} days
//                                         </div>
//                                     </div>

//                                     {task.taskStatus === 'open_for_bidding' &&
//                                         bid.bidStatus === 'pending' && (
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => handleAcceptBid(bid._id)}
//                                                 className="btn-success flex items-center gap-1 text-sm"
//                                             >
//                                                 <FiCheckCircle />
//                                                 Accept
//                                             </button>
//                                         </div>
//                                     )}

//                                     {bid.bidStatus === 'accepted' && (
//                                         <div className="flex items-center gap-1 text-green-600 font-medium">
//                                             <FiCheckCircle />
//                                             Accepted
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import {
//     FiUser,
//     FiClock,
//     FiDollarSign,
//     FiCheckCircle,
//     FiXCircle,
// } from 'react-icons/fi';

// export default function TaskDetailPage() {
//     const { id } = useParams();
//     const [task, setTask] = useState(null);
//     const [bids, setBids] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             const [taskRes, bidsRes] = await Promise.all([
//                 API.get(`/tasks/${id}`),
//                 // 🟢 FIX 1: '/bids/' ku bathila '/bids/task/' nu maathiyachu
//                 API.get(`/bids/task/${id}`), 
//             ]);
//             setTask(taskRes.data);
//             setBids(bidsRes.data);
//         } catch (error) {
//             console.error("Task Fetch Error:", error); // Debugging
//             toast.error('Failed to load task details');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleAcceptBid = async (bidId) => {
//         if (!confirm('Accept this bid? All other bids will be rejected.')) return;
//         try {
//             // 🟢 FIX 2: /accept/bidId ku bathila /bidId/accept nu maathiyachu
//             await API.put(`/bids/${bidId}/accept`);
//             toast.success('Bid accepted! Task assigned.');
//             fetchData(); // Refresh data after accepting
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to accept bid');
//         }
//     };

//     useEffect(() => {
//         if (id) {
//             fetchData();
//         }
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-[50vh]">
//                 <div className="text-center py-20 text-blue-600 font-semibold text-lg animate-pulse">Loading Task Details...</div>
//             </div>
//         );
//     }

//     if (!task) return <div className="text-center py-20 text-gray-500">Task not found!</div>;

//     return (
//         <div className="max-w-4xl mx-auto">
//             {/* Task Info */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
//                 <div className="flex justify-between items-start mb-4">
//                     <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
//                     <div className="flex gap-2">
//                         <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${
//                             task.approvalStatus === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
//                         }`}>
//                             {task.approvalStatus === 'pending_admin_approval' ? 'Pending' : task.approvalStatus}
//                         </span>
//                         <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold uppercase">
//                             {task.taskStatus.replace(/_/g, ' ')}
//                         </span>
//                     </div>
//                 </div>

//                 <p className="text-gray-600 mb-6 whitespace-pre-wrap">{task.description}</p>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
//                     <div>
//                         <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Category</p>
//                         <p className="font-semibold text-gray-800">{task.category}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Budget</p>
//                         <p className="font-semibold text-green-600">
//                             ₹{task.budgetMin} - ₹{task.budgetMax}
//                         </p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
//                         <p className="font-semibold text-gray-800">{task.location}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Deadline</p>
//                         <p className="font-semibold text-red-500">
//                             {new Date(task.deadline).toLocaleDateString()}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Bids Section */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
//                     Bids Received ({bids.length})
//                 </h2>

//                 {bids.length === 0 ? (
//                     <div className="text-center py-12">
//                         <FiClock className="text-gray-300 text-5xl mx-auto mb-4" />
//                         <p className="text-gray-500 font-medium">No bids yet. Waiting for taskers to bid.</p>
//                     </div>
//                 ) : (
//                     <div className="space-y-4 mt-4">
//                         {bids.map((bid) => (
//                             <div
//                                 key={bid._id}
//                                 className={`border rounded-xl p-5 transition-all ${
//                                     bid.bidStatus === 'accepted'
//                                         ? 'border-green-300 bg-green-50 shadow-md scale-[1.01]'
//                                         : bid.bidStatus === 'rejected'
//                                         ? 'border-red-200 bg-red-50 opacity-60'
//                                         : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
//                                 }`}
//                             >
//                                 <div className="flex justify-between items-start">
//                                     <div className="flex items-center gap-4 mb-3">
//                                         <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
//                                             {bid.taskerId?.name?.charAt(0).toUpperCase() || 'U'}
//                                         </div>
//                                         <div>
//                                             <p className="font-bold text-gray-800 text-lg">
//                                                 {bid.taskerId?.name || 'Unknown Tasker'}
//                                             </p>
//                                             <p className="text-sm text-gray-500">
//                                                 {bid.taskerId?.email}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
//                                         bid.bidStatus === 'accepted' ? 'bg-green-200 text-green-800' :
//                                         bid.bidStatus === 'rejected' ? 'bg-red-200 text-red-800' :
//                                         'bg-yellow-100 text-yellow-700'
//                                     }`}>
//                                         {bid.bidStatus}
//                                     </span>
//                                 </div>

//                                 <div className="bg-white p-4 rounded-lg border border-gray-100 my-4 text-gray-700 italic text-sm">
//                                     "{bid.proposalMessage}"
//                                 </div>

//                                 <div className="flex items-center justify-between mt-2">
//                                     <div className="flex gap-6">
//                                         <div className="flex items-center gap-1 text-green-700 font-bold text-lg">
//                                             <FiDollarSign />
//                                             ₹{bid.bidAmount}
//                                         </div>
//                                         <div className="flex items-center gap-1 text-gray-600 font-medium">
//                                             <FiClock className="text-blue-500" />
//                                             {bid.deliveryDays} Days
//                                         </div>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     {task.taskStatus === 'open_for_bidding' && bid.bidStatus === 'pending' && (
//                                         <button
//                                             onClick={() => handleAcceptBid(bid._id)}
//                                             className="bg-green-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-sm"
//                                         >
//                                             <FiCheckCircle />
//                                             Accept Bid
//                                         </button>
//                                     )}

//                                     {bid.bidStatus === 'accepted' && (
//                                         <div className="flex items-center gap-2 text-green-700 font-bold bg-green-100 px-4 py-2 rounded-lg">
//                                             <FiCheckCircle size={20} />
//                                             Hired
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }




'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import {
    FiUser,
    FiClock,
    FiDollarSign,
    FiCheckCircle,
    FiXCircle,
    FiImage
} from 'react-icons/fi';

export default function TaskDetailPage() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [taskRes, bidsRes] = await Promise.all([
                API.get(`/tasks/${id}`),
                API.get(`/bids/task/${id}`),
            ]);
            setTask(taskRes.data);
            setBids(bidsRes.data);
        } catch (error) {
            console.error("Task Fetch Error:", error);
            toast.error('Failed to load task details');
        } finally {
            setLoading(false);
        }
    };

    const handleAcceptBid = async (bidId) => {
        if (!confirm('Accept this bid? All other bids will be rejected.')) return;
        try {
            await API.put(`/bids/${bidId}/accept`);
            toast.success('Bid accepted! Task assigned.');
            fetchData();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to accept bid');
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="text-center py-20 text-blue-600 font-semibold text-lg animate-pulse">Loading Task Details...</div>
            </div>
        );
    }

    if (!task) return <div className="text-center py-20 text-gray-500">Task not found!</div>;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Task Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
                    <div className="flex gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${task.approvalStatus === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                            {task.approvalStatus === 'pending_admin_approval' ? 'Pending' : task.approvalStatus}
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold uppercase">
                            {task.taskStatus.replace(/_/g, ' ')}
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 whitespace-pre-wrap">{task.description}</p>

                {/* 🔥 UPDATED: Added Images Section Here */}
                {task.attachments && task.attachments.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <FiImage /> Attached Images ({task.attachments.length})
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {task.attachments.map((imgUrl, index) => (
                                <a 
                                    key={index} 
                                    href={imgUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative group h-32 rounded-xl overflow-hidden border border-gray-200 block"
                                >
                                    <img
                                        src={imgUrl}
                                        alt={`Attachment ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="bg-white/90 text-xs font-bold px-2 py-1 rounded text-gray-800">View</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                {/* 🔥 UPDATED: Images Section Ends Here */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Category</p>
                        <p className="font-semibold text-gray-800">{task.category}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Budget</p>
                        <p className="font-semibold text-green-600">
                            ₹{task.budgetMin} - ₹{task.budgetMax}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                        <p className="font-semibold text-gray-800">{task.location}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Deadline</p>
                        <p className="font-semibold text-red-500">
                            {new Date(task.deadline).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bids Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
                    Bids Received ({bids.length})
                </h2>

                {bids.length === 0 ? (
                    <div className="text-center py-12">
                        <FiClock className="text-gray-300 text-5xl mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">No bids yet. Waiting for taskers to bid.</p>
                    </div>
                ) : (
                    <div className="space-y-4 mt-4">
                        {bids.map((bid) => (
                            <div
                                key={bid._id}
                                className={`border rounded-xl p-5 transition-all ${bid.bidStatus === 'accepted'
                                        ? 'border-green-300 bg-green-50 shadow-md scale-[1.01]'
                                        : bid.bidStatus === 'rejected'
                                            ? 'border-red-200 bg-red-50 opacity-60'
                                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                            {bid.taskerId?.name?.charAt(0).toUpperCase() || 'U'}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-lg">
                                                {bid.taskerId?.name || 'Unknown Tasker'}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {bid.taskerId?.email}
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${bid.bidStatus === 'accepted' ? 'bg-green-200 text-green-800' :
                                            bid.bidStatus === 'rejected' ? 'bg-red-200 text-red-800' :
                                                'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {bid.bidStatus}
                                    </span>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-100 my-4 text-gray-700 italic text-sm">
                                    "{bid.proposalMessage}"
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-1 text-green-700 font-bold text-lg">
                                            <FiDollarSign />
                                            ₹{bid.bidAmount}
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600 font-medium">
                                            <FiClock className="text-blue-500" />
                                            {bid.deliveryDays} Days
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    {task.taskStatus === 'open_for_bidding' && bid.bidStatus === 'pending' && (
                                        <button
                                            onClick={() => handleAcceptBid(bid._id)}
                                            className="bg-green-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-sm"
                                        >
                                            <FiCheckCircle />
                                            Accept Bid
                                        </button>
                                    )}

                                    {bid.bidStatus === 'accepted' && (
                                        <div className="flex items-center gap-2 text-green-700 font-bold bg-green-100 px-4 py-2 rounded-lg">
                                            <FiCheckCircle size={20} />
                                            Hired
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

