// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { FiUser, FiMail, FiPhone, FiShield } from 'react-icons/fi';

// export default function UserProfilePage() {
//     const { user } = useAuth();

//     return (
//         <div className="max-w-2xl mx-auto">
//             <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

//             <div className="card">
//                 {/* Avatar */}
//                 <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
//                         {user?.name?.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                         <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>
//                         <span className={`text-sm px-3 py-1 rounded-full font-medium ${
//                             user?.verificationStatus === 'verified'
//                                 ? 'badge-verified'
//                                 : 'badge-pending'
//                         }`}>
//                             {user?.verificationStatus}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Details */}
//                 <div className="space-y-4">
//                     <div className="flex items-center gap-3 text-gray-600">
//                         <FiUser className="text-blue-500" />
//                         <span className="font-medium w-24">Name:</span>
//                         <span>{user?.name}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                         <FiMail className="text-blue-500" />
//                         <span className="font-medium w-24">Email:</span>
//                         <span>{user?.email}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                         <FiPhone className="text-blue-500" />
//                         <span className="font-medium w-24">Phone:</span>
//                         <span>{user?.phone || 'Not provided'}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                         <FiShield className="text-blue-500" />
//                         <span className="font-medium w-24">Role:</span>
//                         <span className="capitalize">{user?.role}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import { 
    FiUser, 
    FiMail, 
    FiPhone, 
    FiShield, 
    FiCamera, 
    FiLoader,
    FiStar
} from 'react-icons/fi';

export default function UserProfilePage() {
    const { user, updateUser } = useAuth();
    const [uploading, setUploading] = useState(false);

    // Profile Image Upload Function
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('profileImage', file);

        setUploading(true);
        try {
            const { data } = await API.put('/auth/profile', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            
            // Context-la irukka user data-va update pandrom (Update Navbar/Sidebar instantly)
            updateUser({ profileImage: data.profileImage || data.user?.profileImage });
            toast.success('Profile photo updated!');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to upload photo.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                    My Profile
                </h1>
                <p className="text-slate-500 text-lg">
                    Manage your personal information and account settings.
                </p>
            </div>

            {/* Main Profile Card */}
            <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 overflow-hidden">
                
                {/* 1. Cover Banner */}
                <div className="h-36 sm:h-48 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
                </div>

                {/* 2. Content Body */}
                <div className="px-6 sm:px-10 pb-10 relative">
                    
                    {/* Fixed Alignment Avatar (Absolute positioning) */}
                    <div className="absolute -top-16 sm:-top-20 left-6 sm:left-10">
                        <div className="relative group">
                            {/* Avatar Container */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] bg-white p-1.5 shadow-xl">
                                <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-extrabold text-5xl sm:text-6xl border border-blue-200/50 overflow-hidden relative">
                                    
                                    {uploading ? (
                                        <FiLoader className="animate-spin text-blue-500 text-4xl" />
                                    ) : user?.profileImage ? (
                                        <img 
                                            src={user.profileImage} 
                                            alt={user.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        user?.name?.charAt(0).toUpperCase() || 'U'
                                    )}

                                </div>
                            </div>

                            {/* Camera Upload Button */}
                            <label className="absolute -bottom-2 -right-2 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg border-[3px] border-white cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                                <FiCamera size={20} />
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={handleImageUpload}
                                    disabled={uploading}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Spacing to push content down below the floating avatar */}
                    <div className="pt-20 sm:pt-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                {user?.name || 'Loading...'}
                            </h2>
                            <div className="flex items-center gap-2 mt-1.5 text-slate-500 font-medium">
                                <FiStar className="text-blue-500" /> Platform User
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-sm ${
                            user?.verificationStatus === 'verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                            user?.verificationStatus === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                            'bg-rose-50 text-rose-600 border-rose-200'
                        }`}>
                            <span className={`w-2 h-2 rounded-full ${
                                user?.verificationStatus === 'verified' ? 'bg-emerald-500' :
                                user?.verificationStatus === 'pending' ? 'bg-amber-500 animate-pulse' :
                                'bg-rose-500'
                            }`}></span>
                            {user?.verificationStatus || 'Unknown'}
                        </div>
                    </div>

                    {/* Personal Information Grid */}
                    <div className="bg-slate-50 rounded-[28px] p-3 sm:p-5 border border-slate-100">
                        <h3 className="px-3 pt-2 pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                            Account Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            
                            {/* Name */}
                            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                    <FiUser />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Full Name</p>
                                    <p className="font-semibold text-slate-900 truncate">{user?.name}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-xl shrink-0">
                                    <FiMail />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Address</p>
                                    <p className="font-semibold text-slate-900 truncate">{user?.email}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                                    <FiPhone />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone Number</p>
                                    <p className="font-semibold text-slate-900 truncate">{user?.phone || 'Not provided'}</p>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
                                    <FiShield />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Account Role</p>
                                    <p className="font-semibold text-slate-900 capitalize truncate">{user?.role}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}