'use client';

import { useEffect, useState } from 'react';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import { FiUser, FiClock, FiDollarSign, FiMessageSquare, FiActivity } from 'react-icons/fi';

export default function AdminBidsPage() {
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBids = async () => {
        try {
            const { data } = await API.get('/admin/bids');
            setBids(data);
        } catch (error) {
            console.error("Fetch Bids Error:", error);
            toast.error('Failed to fetch bids');
        } finally {
            setLoading(false);
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
                        Platform Bids Overview
                    </h1>
                    <p className="text-slate-500 text-lg">Monitor all bidding and financial activity across the marketplace.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
                    Total Bids <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{bids.length}</span>
                </div>
            </div>

            {/* Content Area */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-64 bg-slate-100 rounded-[28px] animate-pulse"></div>
                    ))}
                </div>
            ) : bids.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center text-3xl mb-5">
                        <FiActivity />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No Bids Found</h3>
                    <p className="text-slate-500 font-medium">There is currently no bidding activity on the platform.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {bids.map((bid) => (
                        <div
                            key={bid._id}
                            className="group flex flex-col bg-white rounded-[28px] p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Top Header - Task & Status */}
                            <div className="flex justify-between items-start mb-5 pb-5 border-b border-slate-100">
                                <div className="pr-4">
                                    <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1">Target Task</div>
                                    <h3 className="font-bold text-lg text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                        {bid.taskId?.title || 'Deleted Task'}
                                    </h3>
                                </div>
                                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap ${bid.bidStatus === 'accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                        bid.bidStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
                                            bid.bidStatus === 'withdrawn' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                                                'bg-amber-50 text-amber-600 border-amber-200' // pending
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${bid.bidStatus === 'accepted' ? 'bg-emerald-500' :
                                            bid.bidStatus === 'rejected' ? 'bg-rose-500' :
                                                bid.bidStatus === 'withdrawn' ? 'bg-slate-500' :
                                                    'bg-amber-500'
                                        }`}></span>
                                    {bid.bidStatus}
                                </div>
                            </div>

                            {/* Tasker Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold text-sm shadow-inner">
                                    {bid.taskerId?.name?.charAt(0).toUpperCase() || '?'}
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">Placed By</p>
                                    <p className="text-sm font-semibold text-slate-800">
                                        {bid.taskerId?.name || 'Unknown User'}
                                    </p>
                                </div>
                            </div>

                            {/* Financial & Time Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                                        <FiDollarSign className="text-blue-500 text-base" /> Amount
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">₹{bid.bidAmount}</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                                        <FiClock className="text-purple-500 text-base" /> Delivery
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">{bid.deliveryDays} <span className="text-sm font-medium text-slate-500">Days</span></p>
                                </div>
                            </div>

                            {/* Proposal Message Area */}
                            <div className="mt-auto">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                                    <FiMessageSquare /> Proposal Message
                                </div>
                                <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4">
                                    <p className="text-sm text-slate-600 italic line-clamp-3 leading-relaxed">
                                        "{bid.proposalMessage}"
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}