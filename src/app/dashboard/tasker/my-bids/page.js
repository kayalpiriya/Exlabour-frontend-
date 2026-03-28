// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiDollarSign, FiClock, FiXCircle } from 'react-icons/fi';

// export default function MyBidsPage() {
//     const [bids, setBids] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchBids = async () => {
//         try {
//             const { data } = await API.get('/bids/my-bids');
//             setBids(data);
//         } catch (error) {
//             toast.error('Failed to fetch bids');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleWithdraw = async (bidId) => {
//         if (!confirm('Withdraw this bid?')) return;
//         try {
//             await API.put(`/bids/withdraw/${bidId}`);
//             toast.success('Bid withdrawn');
//             fetchBids();
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to withdraw bid');
//         }
//     };

//     useEffect(() => {
//         fetchBids();
//     }, []);

//     return (
//         <div>
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">My Bids</h1>
//                 <p className="text-gray-500">Track all your submitted bids</p>
//             </div>

//             {loading ? (
//                 <div className="text-center py-20 text-gray-400">Loading...</div>
//             ) : bids.length === 0 ? (
//                 <div className="card text-center py-16">
//                     <FiDollarSign className="text-gray-300 text-6xl mx-auto mb-4" />
//                     <p className="text-gray-400 font-medium">No bids placed yet</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-4">
//                     {bids.map((bid) => (
//                         <div key={bid._id} className="card hover:shadow-md transition">
//                             <div className="flex justify-between items-start mb-3">
//                                 <div>
//                                     <h3 className="font-semibold text-gray-800 text-lg">
//                                         {bid.taskId?.title || 'Task'}
//                                     </h3>
//                                     <p className="text-gray-500 text-sm">
//                                         {bid.taskId?.category} • {bid.taskId?.location}
//                                     </p>
//                                 </div>
//                                 <span className={`text-xs px-3 py-1 rounded-full font-medium ${
//                                     bid.bidStatus === 'accepted'
//                                         ? 'badge-verified'
//                                         : bid.bidStatus === 'rejected'
//                                         ? 'badge-rejected'
//                                         : bid.bidStatus === 'withdrawn'
//                                         ? 'badge-blocked'
//                                         : 'badge-pending'
//                                 }`}>
//                                     {bid.bidStatus}
//                                 </span>
//                             </div>

//                             <p className="text-gray-600 text-sm mb-4 bg-gray-50 p-3 rounded-lg">
//                                 {bid.proposalMessage}
//                             </p>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex gap-6">
//                                     <div className="flex items-center gap-1 text-green-600 font-bold">
//                                         <FiDollarSign />
//                                         ₹{bid.bidAmount}
//                                     </div>
//                                     <div className="flex items-center gap-1 text-gray-500 text-sm">
//                                         <FiClock />
//                                         {bid.deliveryDays} days delivery
//                                     </div>
//                                 </div>

//                                 {bid.bidStatus === 'pending' && (
//                                     <button
//                                         onClick={() => handleWithdraw(bid._id)}
//                                         className="btn-danger flex items-center gap-1 text-sm"
//                                     >
//                                         <FiXCircle />
//                                         Withdraw
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
import API from '@/utils/api';
import toast from 'react-hot-toast';
import { 
    FiDollarSign, 
    FiClock, 
    FiXCircle, 
    FiFolder, 
    FiMapPin, 
    FiMessageSquare,
    FiActivity
} from 'react-icons/fi';

export default function MyBidsPage() {
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBids = async () => {
        try {
            const { data } = await API.get('/bids/my-bids');
            setBids(data);
        } catch (error) {
            toast.error('Failed to fetch bids');
        } finally {
            setLoading(false);
        }
    };

    const handleWithdraw = async (bidId) => {
        if (!window.confirm('Are you sure you want to withdraw this bid?')) return;
        try {
            await API.put(`/bids/${bidId}/withdraw`);
            toast.success('Bid withdrawn successfully');
            fetchBids();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to withdraw bid');
        }
    };

    useEffect(() => {
        fetchBids();
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                        My Submitted Bids
                    </h1>
                    <p className="text-slate-500 text-lg">Track your proposals, active assignments, and history.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
                    Total Bids <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{bids.length}</span>
                </div>
            </div>

            {/* Content Area */}
            {loading ? (
                <div className="grid gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-48 bg-white rounded-[32px] border border-slate-100 animate-pulse"></div>
                    ))}
                </div>
            ) : bids.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center text-4xl mb-5">
                        <FiActivity />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No bids placed yet</h3>
                    <p className="text-slate-500 font-medium max-w-md">Browse available tasks and start submitting your proposals to win jobs.</p>
                </div>
            ) : (
                <div className="grid gap-6 lg:grid-cols-2">
                    {bids.map((bid) => (
                        <div 
                            key={bid._id} 
                            className="group flex flex-col bg-white rounded-[32px] p-6 lg:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Top Header - Task Title & Status */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="pr-4">
                                    <h3 className="font-extrabold text-slate-900 text-xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                                        {bid.taskId?.title || 'Unknown Task'}
                                    </h3>
                                    
                                    {/* Task Category & Location Pills */}
                                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                                            <FiFolder className="text-amber-500" /> {bid.taskId?.category || 'N/A'}
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                                            <FiMapPin className="text-rose-500" /> {bid.taskId?.location || 'N/A'}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Status Badge */}
                                <div className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                                    bid.bidStatus === 'accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                    bid.bidStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
                                    bid.bidStatus === 'withdrawn' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                                    'bg-amber-50 text-amber-600 border-amber-200'
                                }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                        bid.bidStatus === 'accepted' ? 'bg-emerald-500' :
                                        bid.bidStatus === 'rejected' ? 'bg-rose-500' :
                                        bid.bidStatus === 'withdrawn' ? 'bg-slate-500' :
                                        'bg-amber-500 animate-pulse'
                                    }`}></span>
                                    {bid.bidStatus}
                                </div>
                            </div>

                            {/* Financial & Time Stats Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                                        <FiDollarSign className="text-emerald-500 text-base" /> My Bid
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">₹{bid.bidAmount}</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                                        <FiClock className="text-blue-500 text-base" /> Delivery
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">{bid.deliveryDays} <span className="text-sm font-medium text-slate-500">Days</span></p>
                                </div>
                            </div>

                            {/* Proposal Message Area */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                                    <FiMessageSquare /> My Proposal
                                </div>
                                <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4">
                                    <p className="text-sm text-slate-700 italic leading-relaxed line-clamp-3">
                                        "{bid.proposalMessage}"
                                    </p>
                                </div>
                            </div>

                            {/* Action Area (Bottom) */}
                            <div className="mt-auto border-t border-slate-100 pt-5 flex justify-end">
                                {bid.bidStatus === 'pending' ? (
                                    <button
                                        onClick={() => handleWithdraw(bid._id)}
                                        className="flex items-center gap-2 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
                                    >
                                        <FiXCircle size={18} />
                                        Withdraw Bid
                                    </button>
                                ) : (
                                    <p className="text-xs font-medium text-slate-400">
                                        This bid is {bid.bidStatus}. No further actions available.
                                    </p>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}