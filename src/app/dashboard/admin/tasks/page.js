'use client';

import { useEffect, useState } from 'react';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import {
    FiCheck,
    FiX,
    FiFilter,
    FiUser,
    FiFolder,
    FiMapPin,
    FiDollarSign,
    FiCalendar,
    FiFileText,
    FiImage
} from 'react-icons/fi';

export default function AdminTasksPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const fetchTasks = async () => {
        try {
            const { data } = await API.get('/admin/tasks');
            setTasks(data);
        } catch (error) {
            toast.error('Failed to fetch tasks');
        } finally {
            setLoading(false);
        }
    };

    const updateTask = async (taskId, decision) => {
        try {
            await API.put(`/admin/approve-task/${taskId}`, {
                decision,
                remarks: `Admin ${decision} this task`,
            });
            toast.success(`Task ${decision}`);
            fetchTasks();
        } catch (error) {
            toast.error('Failed to update task');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter((t) => {
        if (filter === 'all') return true;
        return t.approvalStatus === filter;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                        Task Approval Queue
                    </h1>
                    <p className="text-slate-500 text-lg">Review and approve user-submitted tasks for the marketplace.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
                    Total Tasks <span className="bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-lg">{tasks.length}</span>
                </div>
            </div>

            {/* Modern Filter Pills */}
            <div className="bg-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-slate-100 flex flex-wrap gap-2 items-center">
                <div className="px-3 text-slate-400">
                    <FiFilter size={18} />
                </div>
                <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
                {['all', 'pending_admin_approval', 'approved', 'rejected'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${filter === f
                                ? 'bg-slate-900 text-white shadow-md scale-105'
                                : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                    >
                        {f === 'pending_admin_approval' ? 'Pending' : f}
                    </button>
                ))}
            </div>

            {/* Task List */}
            {loading ? (
                <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 bg-slate-100 rounded-[24px] animate-pulse"></div>
                    ))}
                </div>
            ) : filteredTasks.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm">
                    <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        <FiFileText />
                    </div>
                    <p className="text-slate-500 text-lg font-medium">No tasks found for this status.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {filteredTasks.map((task) => (
                        <div
                            key={task._id}
                            className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">

                                {/* Left Content */}
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">
                                            {task.title}
                                        </h3>

                                        {/* Status Badge */}
                                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${task.approvalStatus === 'approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                                task.approvalStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
                                                    'bg-amber-50 text-amber-600 border-amber-200'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${task.approvalStatus === 'approved' ? 'bg-emerald-500' :
                                                    task.approvalStatus === 'rejected' ? 'bg-rose-500' :
                                                        'bg-amber-500'
                                                }`}></span>
                                            {task.approvalStatus === 'pending_admin_approval' ? 'Pending' : task.approvalStatus}
                                        </div>
                                    </div>

                                    <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">
                                        {task.description}
                                    </p>

                                    {task.attachments && task.attachments.length > 0 && (
                                        <div className="mb-5">
                                            <p className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                                                <FiImage /> Attachments ({task.attachments.length})
                                            </p>
                                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                                {task.attachments.map((img, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={img}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="h-20 w-20 shrink-0 rounded-xl border border-slate-200 overflow-hidden relative group cursor-zoom-in"
                                                    >
                                                        <img
                                                            src={img}
                                                            alt="Task attachment"
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {/*  Images Section Ends */}

                                    {/* Task Metadata */}
                                    <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                                        <div className="flex items-center gap-1.5">
                                            <FiUser className="text-blue-500" />
                                            {task.userId?.name || 'Unknown User'}
                                        </div>
                                        <div className="h-4 w-px bg-slate-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <FiFolder className="text-amber-500" />
                                            {task.category}
                                        </div>
                                        <div className="h-4 w-px bg-slate-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <FiMapPin className="text-rose-500" />
                                            {task.location}
                                        </div>
                                        <div className="h-4 w-px bg-slate-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <FiDollarSign className="text-emerald-500" />
                                            ₹{task.budgetMin} - ₹{task.budgetMax}
                                        </div>
                                        <div className="h-4 w-px bg-slate-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <FiCalendar className="text-violet-500" />
                                            {new Date(task.deadline).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Actions (Approval/Rejection) */}
                                {task.approvalStatus === 'pending_admin_approval' && (
                                    <div className="flex lg:flex-col gap-3 w-full lg:w-40 mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6 shrink-0">
                                        <button
                                            onClick={() => updateTask(task._id, 'approved')}
                                            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-3 rounded-xl text-sm font-bold shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <FiCheck size={18} /> Approve
                                        </button>
                                        <button
                                            onClick={() => updateTask(task._id, 'rejected')}
                                            className="flex-1 flex items-center justify-center gap-2 bg-white text-rose-600 border border-rose-200 hover:bg-rose-50 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                                        >
                                            <FiX size={18} /> Reject
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}