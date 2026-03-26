// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiSearch, FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';

// const CATEGORIES = [
//     'All', 'Cleaning', 'Delivery', 'Design', 'IT Support',
//     'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
// ];

// export default function BrowseTasksPage() {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState('All');
//     const [bidForm, setBidForm] = useState({});
//     const [biddingTaskId, setBiddingTaskId] = useState(null);
//     const [submitting, setSubmitting] = useState(false);

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

//     const handleBid = async (taskId) => {
//         setSubmitting(true);
//         try {
//             await API.post(`/bids/${taskId}`, bidForm);
//             toast.success('Bid placed successfully!');
//             setBiddingTaskId(null);
//             setBidForm({});
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to place bid');
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const filteredTasks = tasks.filter((task) => {
//         const matchSearch =
//             task.title.toLowerCase().includes(search.toLowerCase()) ||
//             task.location.toLowerCase().includes(search.toLowerCase());
//         const matchCategory =
//             category === 'All' || task.category === category;
//         return matchSearch && matchCategory;
//     });

//     return (
//         <div>
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Browse Tasks</h1>
//                 <p className="text-gray-500">Find tasks that match your skills</p>
//             </div>

//             {/* Filters */}
//             <div className="card mb-6">
//                 <div className="flex flex-col md:flex-row gap-4">
//                     <div className="relative flex-1">
//                         <FiSearch className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                             type="text"
//                             placeholder="Search by title or location..."
//                             className="input-field pl-10"
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                     </div>
//                     <select
//                         className="input-field md:w-48"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         {CATEGORIES.map((cat) => (
//                             <option key={cat} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Tasks */}
//             {loading ? (
//                 <div className="text-center py-20 text-gray-400">Loading tasks...</div>
//             ) : filteredTasks.length === 0 ? (
//                 <div className="card text-center py-16">
//                     <FiSearch className="text-gray-300 text-6xl mx-auto mb-4" />
//                     <p className="text-gray-400 font-medium">No tasks found</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-4">
//                     {filteredTasks.map((task) => (
//                         <div key={task._id} className="card hover:shadow-md transition">
//                             <div className="flex justify-between items-start mb-3">
//                                 <div>
//                                     <h3 className="font-semibold text-gray-800 text-lg mb-1">
//                                         {task.title}
//                                     </h3>
//                                     <p className="text-gray-500 text-sm line-clamp-2">
//                                         {task.description}
//                                     </p>
//                                 </div>
//                                 <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-4">
//                                     Open for Bids
//                                 </span>
//                             </div>

//                             <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
//                                 <span className="flex items-center gap-1">
//                                     📂 {task.category}
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                     <FiMapPin /> {task.location}
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                     <FiDollarSign /> ₹{task.budgetMin} - ₹{task.budgetMax}
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                     <FiClock /> {new Date(task.deadline).toLocaleDateString()}
//                                 </span>
//                             </div>

//                             {/* Bid Form Toggle */}
//                             {biddingTaskId === task._id ? (
//                                 <div className="bg-blue-50 rounded-xl p-4 mt-2 border border-blue-100">
//                                     <h4 className="font-semibold text-gray-700 mb-3">
//                                         Place Your Bid
//                                     </h4>
//                                     <div className="grid grid-cols-2 gap-3 mb-3">
//                                         <input
//                                             type="number"
//                                             placeholder="Bid Amount (₹)"
//                                             className="input-field"
//                                             onChange={(e) =>
//                                                 setBidForm({
//                                                     ...bidForm,
//                                                     bidAmount: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                         <input
//                                             type="number"
//                                             placeholder="Delivery Days"
//                                             className="input-field"
//                                             onChange={(e) =>
//                                                 setBidForm({
//                                                     ...bidForm,
//                                                     deliveryDays: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </div>
//                                     <textarea
//                                         placeholder="Write your proposal message..."
//                                         rows={3}
//                                         className="input-field mb-3 resize-none"
//                                         onChange={(e) =>
//                                             setBidForm({
//                                                 ...bidForm,
//                                                 proposalMessage: e.target.value,
//                                             })
//                                         }
//                                     />
//                                     <div className="flex gap-2">
//                                         <button
//                                             onClick={() => handleBid(task._id)}
//                                             disabled={submitting}
//                                             className="btn-primary disabled:opacity-50"
//                                         >
//                                             {submitting ? 'Submitting...' : 'Submit Bid'}
//                                         </button>
//                                         <button
//                                             onClick={() => setBiddingTaskId(null)}
//                                             className="btn-secondary"
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <button
//                                     onClick={() => setBiddingTaskId(task._id)}
//                                     className="btn-primary text-sm"
//                                 >
//                                     Place Bid
//                                 </button>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { 
//     FiSearch, 
//     FiMapPin, 
//     FiDollarSign, 
//     FiClock, 
//     FiFolder,
//     FiBriefcase,
//     FiSend,
//     FiX
// } from 'react-icons/fi';

// const CATEGORIES = [
//     'All', 'Cleaning', 'Delivery', 'Design', 'IT Support',
//     'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
// ];

// export default function BrowseTasksPage() {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState('All');
//     const [bidForm, setBidForm] = useState({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
//     const [biddingTaskId, setBiddingTaskId] = useState(null);
//     const [submitting, setSubmitting] = useState(false);

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

//     const handleBid = async (taskId) => {
//         if (!bidForm.bidAmount || !bidForm.deliveryDays || !bidForm.proposalMessage) {
//             toast.error("Please fill all bid details");
//             return;
//         }

//         setSubmitting(true);
//         try {
//             await API.post(`/bids/${taskId}`, bidForm);
//             toast.success('Bid placed successfully!');
//             setBiddingTaskId(null);
//             setBidForm({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
//             fetchTasks(); // Refresh to update status if needed
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to place bid');
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // 🟢 FIXED FILTER LOGIC: Added ?. to prevent crashes if location is missing
//     // const filteredTasks = tasks.filter((task) => {
//     //     const searchLower = search.toLowerCase();
//     //     const matchSearch =
//     //         task.title?.toLowerCase().includes(searchLower) ||
//     //         task.location?.toLowerCase().includes(searchLower);
        
//     //     const matchCategory = category === 'All' || task.category === category;
        
//     //     return matchSearch && matchCategory;
//     // });



//         // 🟢 SUPER SAFE FILTER LOGIC
//     const filteredTasks = tasks.filter((task) => {
//         if (!task) return false;

//         // 1. Search Check (If search is empty, automatically return true)
//         const searchLower = search.toLowerCase();
//         const matchSearch = search.trim() === '' || 
//             (task.title && task.title.toLowerCase().includes(searchLower)) ||
//             (task.location && task.location.toLowerCase().includes(searchLower));
        
//         // 2. Category Check
//         const matchCategory = category === 'All' || task.category === category;
        
//         return matchSearch && matchCategory;
//     });

//     // 🟢 DEBUG LOG: Backend enna anupputhu nu console-la paaka
//     useEffect(() => {
//         console.log("TASKS FROM BACKEND:", tasks);
//         console.log("FILTERED TASKS:", filteredTasks);
//     }, [tasks, search, category]);

//     return (
//         <div className="max-w-7xl mx-auto space-y-8">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//                 <div>
//                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
//                         Available Opportunities
//                     </h1>
//                     <p className="text-slate-500 text-lg">Browse approved tasks and submit winning bids.</p>
//                 </div>
//                 <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
//                     Open Tasks <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{filteredTasks.length}</span>
//                 </div>
//             </div>

//             {/* Modern Search & Filter Bar */}
//             <div className="bg-white p-3 rounded-[28px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col md:flex-row gap-3">
//                 <div className="relative flex-1">
//                     <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
//                     <input
//                         type="text"
//                         placeholder="Search by title or location..."
//                         className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//                 <div className="relative md:w-64">
//                     <select
//                         className="w-full pl-4 pr-10 py-3.5 rounded-2xl bg-slate-50 border-none text-slate-700 font-medium appearance-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none cursor-pointer"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         {CATEGORIES.map((cat) => (
//                             <option key={cat} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                     {/* Custom Select Arrow */}
//                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
//                         <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//             {/* Tasks Feed */}
//             {loading ? (
//                 <div className="grid gap-5">
//                     {[1, 2, 3].map((i) => (
//                         <div key={i} className="h-48 bg-white border border-slate-100 rounded-[32px] animate-pulse"></div>
//                     ))}
//                 </div>
//             ) : filteredTasks.length === 0 ? (
//                 <div className="text-center py-24 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
//                     <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center text-4xl mb-5">
//                         <FiBriefcase />
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-800 mb-2">No tasks found</h3>
//                     <p className="text-slate-500 font-medium max-w-md">Tasks will appear here once users post them and Admins approve them.</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-6">
//                     {filteredTasks.map((task) => (
//                         <div key={task._id} className="group bg-white rounded-[32px] p-6 lg:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
                            
//                             {/* Task Header */}
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
//                                 <div className="flex-1">
//                                     <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
//                                         {task.title}
//                                     </h3>
//                                     <p className="text-slate-500 text-sm leading-relaxed max-w-3xl line-clamp-2">
//                                         {task.description}
//                                     </p>
//                                 </div>
//                                 <div className="shrink-0 flex justify-start">
//                                     <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-emerald-200">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                                         Open for Bids
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Task Metadata */}
//                             <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-600 mb-6">
//                                 <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
//                                     <FiFolder className="text-amber-500 text-sm" /> {task.category}
//                                 </div>
//                                 <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
//                                     <FiMapPin className="text-rose-500 text-sm" /> {task.location}
//                                 </div>
//                                 <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
//                                     <FiDollarSign className="text-emerald-500 text-sm" /> ₹{task.budgetMin} - ₹{task.budgetMax}
//                                 </div>
//                                 <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
//                                     <FiClock className="text-violet-500 text-sm" /> {new Date(task.deadline).toLocaleDateString()}
//                                 </div>
//                             </div>

//                             {/* Bidding Section */}
//                             {biddingTaskId === task._id ? (
//                                 <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
//                                     <div className="bg-gradient-to-br from-blue-50/50 to-slate-50 rounded-[24px] p-6 border border-blue-100/50">
//                                         <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
//                                             <FiSend className="text-blue-600" /> Submit Your Proposal
//                                         </h4>
                                        
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                                             <div>
//                                                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Bid Amount (₹)</label>
//                                                 <input
//                                                     type="number"
//                                                     placeholder="e.g. 1500"
//                                                     value={bidForm.bidAmount}
//                                                     className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
//                                                     onChange={(e) => setBidForm({ ...bidForm, bidAmount: e.target.value })}
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Delivery Time</label>
//                                                 <input
//                                                     type="number"
//                                                     placeholder="e.g. 3 (Days)"
//                                                     value={bidForm.deliveryDays}
//                                                     className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
//                                                     onChange={(e) => setBidForm({ ...bidForm, deliveryDays: e.target.value })}
//                                                 />
//                                             </div>
//                                         </div>
                                        
//                                         <div className="mb-5">
//                                             <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Cover Letter</label>
//                                             <textarea
//                                                 placeholder="Why are you the best fit for this task?"
//                                                 rows={3}
//                                                 value={bidForm.proposalMessage}
//                                                 className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none"
//                                                 onChange={(e) => setBidForm({ ...bidForm, proposalMessage: e.target.value })}
//                                             />
//                                         </div>
                                        
//                                         <div className="flex flex-col sm:flex-row gap-3">
//                                             <button
//                                                 onClick={() => handleBid(task._id)}
//                                                 disabled={submitting}
//                                                 className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3 rounded-xl shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_12px_25px_rgba(59,130,246,0.35)] hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
//                                             >
//                                                 {submitting ? 'Submitting...' : 'Confirm Bid'}
//                                             </button>
//                                             <button
//                                                 onClick={() => setBiddingTaskId(null)}
//                                                 className="px-6 py-3 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
//                                             >
//                                                 <FiX /> Cancel
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <button
//                                     onClick={() => {
//                                         setBiddingTaskId(task._id);
//                                         setBidForm({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
//                                     }}
//                                     className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-blue-600 hover:shadow-blue-500/25 transition-all duration-300"
//                                 >
//                                     <FiSend /> Place Bid
//                                 </button>
//                             )}

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
    FiSearch, 
    FiMapPin, 
    FiDollarSign, 
    FiClock, 
    FiFolder,
    FiBriefcase,
    FiSend,
    FiX,
    FiImage // 🔥 Added Image Icon
} from 'react-icons/fi';

const CATEGORIES = [
    'All', 'Cleaning', 'Delivery', 'Design', 'IT Support',
    'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
];

export default function BrowseTasksPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [bidForm, setBidForm] = useState({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
    const [biddingTaskId, setBiddingTaskId] = useState(null);
    const [submitting, setSubmitting] = useState(false);

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

    const handleBid = async (taskId) => {
        if (!bidForm.bidAmount || !bidForm.deliveryDays || !bidForm.proposalMessage) {
            toast.error("Please fill all bid details");
            return;
        }

        setSubmitting(true);
        try {
            await API.post(`/bids/${taskId}`, bidForm);
            toast.success('Bid placed successfully!');
            setBiddingTaskId(null);
            setBidForm({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
            fetchTasks(); 
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to place bid');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // 🟢 SAFE FILTER LOGIC
    const filteredTasks = tasks.filter((task) => {
        if (!task) return false;

        const searchLower = search.toLowerCase();
        const matchSearch = search.trim() === '' || 
            (task.title && task.title.toLowerCase().includes(searchLower)) ||
            (task.location && task.location.toLowerCase().includes(searchLower));
        
        const matchCategory = category === 'All' || task.category === category;
        
        return matchSearch && matchCategory;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                        Available Opportunities
                    </h1>
                    <p className="text-slate-500 text-lg">Browse approved tasks and submit winning bids.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
                    Open Tasks <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{filteredTasks.length}</span>
                </div>
            </div>

            {/* Modern Search & Filter Bar */}
            <div className="bg-white p-3 rounded-[28px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search by title or location..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="relative md:w-64">
                    <select
                        className="w-full pl-4 pr-10 py-3.5 rounded-2xl bg-slate-50 border-none text-slate-700 font-medium appearance-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none cursor-pointer"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tasks Feed */}
            {loading ? (
                <div className="grid gap-5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-48 bg-white border border-slate-100 rounded-[32px] animate-pulse"></div>
                    ))}
                </div>
            ) : filteredTasks.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center text-4xl mb-5">
                        <FiBriefcase />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No tasks found</h3>
                    <p className="text-slate-500 font-medium max-w-md">Tasks will appear here once users post them and Admins approve them.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {filteredTasks.map((task) => (
                        <div key={task._id} className="group bg-white rounded-[32px] p-6 lg:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
                            
                            {/* Task Header */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                <div className="flex-1">
                                    <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                        {task.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-3xl line-clamp-3 mb-4">
                                        {task.description}
                                    </p>

                                    {/* 🔥 UPDATED: Images Section (Scrollable Strip) */}
                                    {task.attachments && task.attachments.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <FiImage className="text-slate-400" />
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Attachments ({task.attachments.length})
                                                </span>
                                            </div>
                                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                                {task.attachments.map((img, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={img}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="h-16 w-20 shrink-0 rounded-xl border border-slate-200 overflow-hidden relative group cursor-zoom-in"
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
                                    {/* 🔥 Images Section Ends */}

                                </div>
                                <div className="shrink-0 flex justify-start">
                                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-emerald-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Open for Bids
                                    </span>
                                </div>
                            </div>

                            {/* Task Metadata */}
                            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-600 mb-6">
                                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                                    <FiFolder className="text-amber-500 text-sm" /> {task.category}
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                                    <FiMapPin className="text-rose-500 text-sm" /> {task.location}
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                                    <FiDollarSign className="text-emerald-500 text-sm" /> ₹{task.budgetMin} - ₹{task.budgetMax}
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                                    <FiClock className="text-violet-500 text-sm" /> {new Date(task.deadline).toLocaleDateString()}
                                </div>
                            </div>

                            {/* Bidding Section */}
                            {biddingTaskId === task._id ? (
                                <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="bg-gradient-to-br from-blue-50/50 to-slate-50 rounded-[24px] p-6 border border-blue-100/50">
                                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <FiSend className="text-blue-600" /> Submit Your Proposal
                                        </h4>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Bid Amount (₹)</label>
                                                <input
                                                    type="number"
                                                    placeholder="e.g. 1500"
                                                    value={bidForm.bidAmount}
                                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                                                    onChange={(e) => setBidForm({ ...bidForm, bidAmount: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Delivery Time</label>
                                                <input
                                                    type="number"
                                                    placeholder="e.g. 3 (Days)"
                                                    value={bidForm.deliveryDays}
                                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                                                    onChange={(e) => setBidForm({ ...bidForm, deliveryDays: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="mb-5">
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Cover Letter</label>
                                            <textarea
                                                placeholder="Why are you the best fit for this task?"
                                                rows={3}
                                                value={bidForm.proposalMessage}
                                                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none"
                                                onChange={(e) => setBidForm({ ...bidForm, proposalMessage: e.target.value })}
                                            />
                                        </div>
                                        
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={() => handleBid(task._id)}
                                                disabled={submitting}
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3 rounded-xl shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_12px_25px_rgba(59,130,246,0.35)] hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {submitting ? 'Submitting...' : 'Confirm Bid'}
                                            </button>
                                            <button
                                                onClick={() => setBiddingTaskId(null)}
                                                className="px-6 py-3 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <FiX /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        setBiddingTaskId(task._id);
                                        setBidForm({ bidAmount: '', deliveryDays: '', proposalMessage: '' });
                                    }}
                                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-blue-600 hover:shadow-blue-500/25 transition-all duration-300"
                                >
                                    <FiSend /> Place Bid
                                </button>
                            )}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}