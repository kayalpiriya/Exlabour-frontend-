// 'use client';

// import { useEffect, useState } from 'react';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiUser, FiCheck, FiX, FiSlash } from 'react-icons/fi';

// export default function AdminUsersPage() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [filter, setFilter] = useState('all');

//     const fetchUsers = async () => {
//         try {
//             const { data } = await API.get('/admin/users');
//             setUsers(data);
//         } catch (error) {
//             toast.error('Failed to fetch users');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const updateStatus = async (userId, decision) => {
//         try {
//             await API.put(`/admin/verify-user/${userId}`, {
//                 decision,
//                 remarks: `Admin changed status to ${decision}`,
//             });
//             toast.success(`User ${decision} successfully`);
//             fetchUsers();
//         } catch (error) {
//             toast.error('Failed to update status');
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const filteredUsers = users.filter((u) => {
//         if (filter === 'all') return true;
//         return u.verificationStatus === filter || u.role === filter;
//     });

//     return (
//         <div>
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
//                 <p className="text-gray-500">Verify, reject, or block users and taskers</p>
//             </div>

//             {/* Filter */}
//             <div className="card mb-6">
//                 <div className="flex flex-wrap gap-2">
//                     {['all', 'user', 'tasker', 'pending', 'verified', 'rejected', 'blocked'].map(
//                         (f) => (
//                             <button
//                                 key={f}
//                                 onClick={() => setFilter(f)}
//                                 className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize ${
//                                     filter === f
//                                         ? 'bg-blue-600 text-white'
//                                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                                 }`}
//                             >
//                                 {f}
//                             </button>
//                         )
//                     )}
//                 </div>
//             </div>

//             {loading ? (
//                 <div className="text-center py-20 text-gray-400">Loading users...</div>
//             ) : (
//                 <div className="grid gap-4">
//                     {filteredUsers.map((user) => (
//                         <div key={user._id} className="card hover:shadow-md transition">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                                         {user.name?.charAt(0).toUpperCase()}
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center gap-2">
//                                             <p className="font-semibold text-gray-800">
//                                                 {user.name}
//                                             </p>
//                                             <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full capitalize">
//                                                 {user.role}
//                                             </span>
//                                         </div>
//                                         <p className="text-gray-500 text-sm">{user.email}</p>
//                                         <p className="text-gray-400 text-xs">
//                                             {user.phone || 'No phone'}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <span className={`text-xs px-3 py-1 rounded-full font-medium ${
//                                         user.verificationStatus === 'verified'
//                                             ? 'badge-verified'
//                                             : user.verificationStatus === 'rejected'
//                                             ? 'badge-rejected'
//                                             : user.verificationStatus === 'blocked'
//                                             ? 'badge-blocked'
//                                             : 'badge-pending'
//                                     }`}>
//                                         {user.verificationStatus}
//                                     </span>

//                                     <div className="flex gap-2">
//                                         {user.verificationStatus !== 'verified' && (
//                                             <button
//                                                 onClick={() => updateStatus(user._id, 'verified')}
//                                                 className="btn-success flex items-center gap-1 text-sm"
//                                             >
//                                                 <FiCheck /> Verify
//                                             </button>
//                                         )}
//                                         {user.verificationStatus !== 'rejected' && (
//                                             <button
//                                                 onClick={() => updateStatus(user._id, 'rejected')}
//                                                 className="btn-danger flex items-center gap-1 text-sm"
//                                             >
//                                                 <FiX /> Reject
//                                             </button>
//                                         )}
//                                         {user.verificationStatus !== 'blocked' && (
//                                             <button
//                                                 onClick={() => updateStatus(user._id, 'blocked')}
//                                                 className="bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition flex items-center gap-1 text-sm"
//                                             >
//                                                 <FiSlash /> Block
//                                             </button>
//                                         )}
//                                     </div>
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
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// // import { FiCheck, FiX, FiSlash, FiMail, FiPhone, FiFilter } from 'react-icons/fi';
// import { FiCheck, FiX, FiSlash, FiMail, FiPhone, FiFilter, FiUser } from 'react-icons/fi';

// export default function AdminUsersPage() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [filter, setFilter] = useState('all');

//     const fetchUsers = async () => {
//         try {
//             const { data } = await API.get('/admin/users');
//             setUsers(data);
//         } catch (error) {
//             toast.error('Failed to fetch users');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const updateStatus = async (userId, decision) => {
//         try {
//             await API.put(`/admin/verify-user/${userId}`, {
//                 decision,
//                 remarks: `Admin changed status to ${decision}`,
//             });
//             toast.success(`User ${decision} successfully`);
//             fetchUsers();
//         } catch (error) {
//             toast.error('Failed to update status');
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const filteredUsers = users.filter((u) => {
//         if (filter === 'all') return true;
//         return u.verificationStatus === filter || u.role === filter;
//     });

//     return (
//         <div className="max-w-7xl mx-auto space-y-8">
//             {/* Header */}
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//                 <div>
//                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
//                         User Directory
//                     </h1>
//                     <p className="text-slate-500 text-lg">Verify, review, or block accounts securely.</p>
//                 </div>
//                 <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
//                     Total Users <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{users.length}</span>
//                 </div>
//             </div>

//             {/* Modern Filter Pills */}
//             <div className="bg-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-slate-100 flex flex-wrap gap-2 items-center">
//                 <div className="px-3 text-slate-400">
//                     <FiFilter size={18} />
//                 </div>
//                 <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
//                 {['all', 'user', 'tasker', 'pending', 'verified', 'rejected', 'blocked'].map((f) => (
//                     <button
//                         key={f}
//                         onClick={() => setFilter(f)}
//                         className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
//                             filter === f
//                                 ? 'bg-slate-900 text-white shadow-md scale-105'
//                                 : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
//                         }`}
//                     >
//                         {f}
//                     </button>
//                 ))}
//             </div>

//             {/* Users List */}
//             {loading ? (
//                 <div className="flex flex-col gap-4">
//                     {[1, 2, 3].map((i) => (
//                         <div key={i} className="h-24 bg-slate-100 rounded-[24px] animate-pulse"></div>
//                     ))}
//                 </div>
//             ) : filteredUsers.length === 0 ? (
//                 <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm">
//                     <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
//                         <FiUser />
//                     </div>
//                     <p className="text-slate-500 text-lg font-medium">No users found for this filter.</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-4">
//                     {filteredUsers.map((user) => (
//                         <div 
//                             key={user._id} 
//                             className="group bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
//                         >
//                             {/* User Info */}
//                             <div className="flex items-center gap-5">
//                                 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
//                                     {user.name?.charAt(0).toUpperCase()}
//                                 </div>
//                                 <div>
//                                     <div className="flex items-center gap-3 mb-1">
//                                         <p className="font-bold text-slate-900 text-lg">
//                                             {user.name}
//                                         </p>
//                                         <span className="bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
//                                             {user.role}
//                                         </span>
//                                     </div>
//                                     <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
//                                         <span className="flex items-center gap-1.5">
//                                             <FiMail className="text-slate-400" /> {user.email}
//                                         </span>
//                                         <span className="flex items-center gap-1.5">
//                                             <FiPhone className="text-slate-400" /> {user.phone || 'No phone'}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Status & Actions */}
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                                 {/* Modern Status Badge */}
//                                 <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
//                                     user.verificationStatus === 'verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
//                                     user.verificationStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
//                                     user.verificationStatus === 'blocked' ? 'bg-slate-100 text-slate-600 border-slate-200' :
//                                     'bg-amber-50 text-amber-600 border-amber-200' // pending
//                                 }`}>
//                                     <span className={`w-1.5 h-1.5 rounded-full ${
//                                         user.verificationStatus === 'verified' ? 'bg-emerald-500' :
//                                         user.verificationStatus === 'rejected' ? 'bg-rose-500' :
//                                         user.verificationStatus === 'blocked' ? 'bg-slate-500' :
//                                         'bg-amber-500'
//                                     }`}></span>
//                                     {user.verificationStatus}
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="flex items-center gap-2">
//                                     {user.verificationStatus !== 'verified' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'verified')}
//                                             className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiCheck size={16} /> Verify
//                                         </button>
//                                     )}
//                                     {user.verificationStatus !== 'rejected' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'rejected')}
//                                             className="flex items-center gap-1.5 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiX size={16} /> Reject
//                                         </button>
//                                     )}
//                                     {user.verificationStatus !== 'blocked' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'blocked')}
//                                             className="flex items-center gap-1.5 bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiSlash size={16} /> Block
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
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiCheck, FiX, FiSlash, FiMail, FiPhone, FiFilter, FiUser } from 'react-icons/fi';

// export default function AdminUsersPage() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [filter, setFilter] = useState('all');

//     const fetchUsers = async () => {
//         try {
//             const { data } = await API.get('/admin/users');
//             setUsers(data);
//         } catch (error) {
//             toast.error('Failed to fetch users');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const updateStatus = async (userId, decision) => {
//         try {
//             await API.put(`/admin/verify-user/${userId}`, {
//                 decision,
//                 remarks: `Admin changed status to ${decision}`,
//             });
//             toast.success(`User ${decision} successfully`);
//             fetchUsers();
//         } catch (error) {
//             toast.error('Failed to update status');
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const filteredUsers = users.filter((u) => {
//         if (filter === 'all') return true;
//         return u.verificationStatus === filter || u.role === filter;
//     });

//     return (
//         <div className="max-w-7xl mx-auto space-y-8">
//             {/* Header */}
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//                 <div>
//                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
//                         User Directory
//                     </h1>
//                     <p className="text-slate-500 text-lg">Verify, review, or block accounts securely.</p>
//                 </div>
//                 <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
//                     Total Users <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{users.length}</span>
//                 </div>
//             </div>

//             {/* Modern Filter Pills */}
//             <div className="bg-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-slate-100 flex flex-wrap gap-2 items-center">
//                 <div className="px-3 text-slate-400">
//                     <FiFilter size={18} />
//                 </div>
//                 <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
//                 {['all', 'user', 'tasker', 'pending', 'verified', 'rejected', 'blocked'].map((f) => (
//                     <button
//                         key={f}
//                         onClick={() => setFilter(f)}
//                         className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
//                             filter === f
//                                 ? 'bg-slate-900 text-white shadow-md scale-105'
//                                 : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
//                         }`}
//                     >
//                         {f}
//                     </button>
//                 ))}
//             </div>

//             {/* Users List */}
//             {loading ? (
//                 <div className="flex flex-col gap-4">
//                     {[1, 2, 3].map((i) => (
//                         <div key={i} className="h-24 bg-slate-100 rounded-[24px] animate-pulse"></div>
//                     ))}
//                 </div>
//             ) : filteredUsers.length === 0 ? (
//                 <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm">
//                     <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
//                         <FiUser />
//                     </div>
//                     <p className="text-slate-500 text-lg font-medium">No users found for this filter.</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-4">
//                     {filteredUsers.map((user) => (
//                         <div 
//                             key={user._id} 
//                             className="group bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
//                         >
//                             {/* User Info */}
//                             <div className="flex items-center gap-5">
                                
//                                 {/* --- UPDATED PROFILE IMAGE SECTION --- */}
//                                 <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-50 border border-slate-100 flex-shrink-0">
//                                     {user.profileImage ? (
//                                         <img 
//                                             src={user.profileImage} 
//                                             alt={user.name} 
//                                             className="w-full h-full object-cover"
//                                         />
//                                     ) : (
//                                         <div className="w-full h-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl">
//                                             {user.name?.charAt(0).toUpperCase()}
//                                         </div>
//                                     )}
//                                 </div>
//                                 {/* ----------------------------------- */}

//                                 <div>
//                                     <div className="flex items-center gap-3 mb-1">
//                                         <p className="font-bold text-slate-900 text-lg">
//                                             {user.name}
//                                         </p>
//                                         <span className="bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
//                                             {user.role}
//                                         </span>
//                                     </div>
//                                     <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
//                                         <span className="flex items-center gap-1.5">
//                                             <FiMail className="text-slate-400" /> {user.email}
//                                         </span>
//                                         <span className="flex items-center gap-1.5">
//                                             <FiPhone className="text-slate-400" /> {user.phone || 'No phone'}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Status & Actions */}
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                                 {/* Modern Status Badge */}
//                                 <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
//                                     user.verificationStatus === 'verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
//                                     user.verificationStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
//                                     user.verificationStatus === 'blocked' ? 'bg-slate-100 text-slate-600 border-slate-200' :
//                                     'bg-amber-50 text-amber-600 border-amber-200' // pending
//                                 }`}>
//                                     <span className={`w-1.5 h-1.5 rounded-full ${
//                                         user.verificationStatus === 'verified' ? 'bg-emerald-500' :
//                                         user.verificationStatus === 'rejected' ? 'bg-rose-500' :
//                                         user.verificationStatus === 'blocked' ? 'bg-slate-500' :
//                                         'bg-amber-500'
//                                     }`}></span>
//                                     {user.verificationStatus}
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="flex items-center gap-2">
//                                     {user.verificationStatus !== 'verified' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'verified')}
//                                             className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiCheck size={16} /> Verify
//                                         </button>
//                                     )}
//                                     {user.verificationStatus !== 'rejected' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'rejected')}
//                                             className="flex items-center gap-1.5 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiX size={16} /> Reject
//                                         </button>
//                                     )}
//                                     {user.verificationStatus !== 'blocked' && (
//                                         <button
//                                             onClick={() => updateStatus(user._id, 'blocked')}
//                                             className="flex items-center gap-1.5 bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
//                                         >
//                                             <FiSlash size={16} /> Block
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


'use client';

import { useEffect, useState } from 'react';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import { 
    FiCheck, 
    FiX, 
    FiSlash, 
    FiMail, 
    FiPhone, 
    FiFilter, 
    FiUser, 
    FiTrash2 // <-- Added Trash Icon
} from 'react-icons/fi';

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const fetchUsers = async () => {
        try {
            const { data } = await API.get('/admin/users');
            setUsers(data);
        } catch (error) {
            toast.error('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (userId, decision) => {
        try {
            await API.put(`/admin/verify-user/${userId}`, {
                decision,
                remarks: `Admin changed status to ${decision}`,
            });
            toast.success(`User ${decision} successfully`);
            fetchUsers();
        } catch (error) {
            toast.error('Failed to update status');
        }
    };

    // --- NEW: Delete User Function ---
    const deleteUser = async (userId) => {
        if (!window.confirm("Are you sure you want to completely delete this user? This action cannot be undone.")) return;
        
        try {
            // Note: Adjust the endpoint url if your backend delete route is different (e.g., '/admin/delete-user/')
            await API.delete(`/admin/users/${userId}`);
            toast.success('User deleted successfully');
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to delete user');
        }
    };
    // ---------------------------------

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users.filter((u) => {
        if (filter === 'all') return true;
        return u.verificationStatus === filter || u.role === filter;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                        User Directory
                    </h1>
                    <p className="text-slate-500 text-lg">Verify, review, or block accounts securely.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-slate-600 font-medium">
                    Total Users <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg">{users.length}</span>
                </div>
            </div>

            {/* Modern Filter Pills */}
            <div className="bg-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-slate-100 flex flex-wrap gap-2 items-center">
                <div className="px-3 text-slate-400">
                    <FiFilter size={18} />
                </div>
                <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
                {['all', 'user', 'tasker', 'pending', 'verified', 'rejected', 'blocked'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                            filter === f
                                ? 'bg-slate-900 text-white shadow-md scale-105'
                                : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Users List */}
            {loading ? (
                <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-slate-100 rounded-[24px] animate-pulse"></div>
                    ))}
                </div>
            ) : filteredUsers.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm">
                    <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        <FiUser />
                    </div>
                    <p className="text-slate-500 text-lg font-medium">No users found for this filter.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {filteredUsers.map((user) => (
                        <div 
                            key={user._id} 
                            className="group bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                        >
                            {/* User Info */}
                            <div className="flex items-center gap-5">
                                
                                {/* Profile Image Section */}
                                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-50 border border-slate-100 flex-shrink-0">
                                    {user.profileImage ? (
                                        <img 
                                            src={user.profileImage} 
                                            alt={user.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl">
                                            {user.name?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <p className="font-bold text-slate-900 text-lg">
                                            {user.name}
                                        </p>
                                        <span className="bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                                            {user.role}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5">
                                            <FiMail className="text-slate-400" /> {user.email}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FiPhone className="text-slate-400" /> {user.phone || 'No phone'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Actions */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Modern Status Badge */}
                                <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                                    user.verificationStatus === 'verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                    user.verificationStatus === 'rejected' ? 'bg-rose-50 text-rose-600 border-rose-200' :
                                    user.verificationStatus === 'blocked' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                                    'bg-amber-50 text-amber-600 border-amber-200' // pending
                                }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                        user.verificationStatus === 'verified' ? 'bg-emerald-500' :
                                        user.verificationStatus === 'rejected' ? 'bg-rose-500' :
                                        user.verificationStatus === 'blocked' ? 'bg-slate-500' :
                                        'bg-amber-500'
                                    }`}></span>
                                    {user.verificationStatus}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {user.verificationStatus !== 'verified' && (
                                        <button
                                            onClick={() => updateStatus(user._id, 'verified')}
                                            className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
                                        >
                                            <FiCheck size={16} /> Verify
                                        </button>
                                    )}
                                    {user.verificationStatus !== 'rejected' && (
                                        <button
                                            onClick={() => updateStatus(user._id, 'rejected')}
                                            className="flex items-center gap-1.5 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
                                        >
                                            <FiX size={16} /> Reject
                                        </button>
                                    )}
                                    {user.verificationStatus !== 'blocked' && (
                                        <button
                                            onClick={() => updateStatus(user._id, 'blocked')}
                                            className="flex items-center gap-1.5 bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
                                        >
                                            <FiSlash size={16} /> Block
                                        </button>
                                    )}
                                    
                                    {/* --- NEW: Delete Button --- */}
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300"
                                    >
                                        <FiTrash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}