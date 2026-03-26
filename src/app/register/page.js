// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';
// import toast from 'react-hot-toast';

// export default function RegisterPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//         phone: '',
//     });
//     const [loading, setLoading] = useState(false);
//     const { register } = useAuth();
//     const router = useRouter();

//     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = await register(formData);
//             toast.success('Registration successful!');
//             router.push(`/dashboard/${userData.role}`);
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
//             <form onSubmit={handleSubmit} className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-5">
//                 <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Create Account</h1>

//                 <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
//                 <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} type="email" required className="w-full px-4 py-2 border rounded-lg" />
//                 <input name="password" placeholder="Password" value={formData.password} onChange={handleChange} type="password" required className="w-full px-4 py-2 border rounded-lg" />
//                 <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
//                 <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
//                     <option value="user">Post Tasks (User)</option>
//                     <option value="tasker">Find Work (Tasker)</option>
//                                         <option value="admin">Find Work (Admin)</option>

//                 </select>

//                 <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
//                     {loading ? 'Loading...' : 'Register'}
//                 </button>
//             </form>
//         </div>
//     );
// }


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';
// import toast from 'react-hot-toast';

// export default function RegisterPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//         phone: '',
//     });
//     const [loading, setLoading] = useState(false);
//     const { register } = useAuth();
//     const router = useRouter();

//     const handleChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const userData = await register(formData);
//             toast.success('Registration successful!');
//             router.push(`/dashboard/${userData.role}`);
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
//             {/* Background Effects */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.14),transparent_30%)]" />
//             <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
//             <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

//             <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Content */}
//                 <div className="hidden lg:block text-white px-6">
//                     <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 backdrop-blur-xl px-4 py-2 text-sm font-medium mb-6">
//                         ✨ Join ExLabour Today
//                     </div>

//                     <h1 className="text-5xl font-extrabold leading-tight mb-6">
//                         Build your future
//                         <br />
//                         <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
//                             with smart work
//                         </span>
//                     </h1>

//                     <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
//                         Create your ExLabour account and start posting tasks, receiving bids,
//                         or finding work opportunities with verified professionals.
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
//                         {[
//                             'Secure account setup',
//                             'Role-based dashboard access',
//                             'Verified platform workflows',
//                             'Simple task & bid management',
//                         ].map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4 text-sm text-slate-100"
//                             >
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Register Card */}
//                 <div className="w-full">
//                     <form
//                         onSubmit={handleSubmit}
//                         className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10 space-y-5"
//                     >
//                         <div className="text-center mb-2">
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//                                 Create Account
//                             </h1>
//                             <p className="text-slate-300 mt-2 text-sm md:text-base">
//                                 Start your journey with ExLabour
//                             </p>
//                         </div>

//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     name="name"
//                                     placeholder="Enter your full name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     required
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     name="email"
//                                     placeholder="Enter your email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     type="email"
//                                     required
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Password
//                                 </label>
//                                 <input
//                                     name="password"
//                                     placeholder="Create a password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     type="password"
//                                     required
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     name="phone"
//                                     placeholder="Enter your phone number"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Select Role
//                                 </label>
//                                 <select
//                                     name="role"
//                                     value={formData.role}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 >
//                                     <option value="user" className="text-black">Post Tasks (User)</option>
//                                     <option value="tasker" className="text-black">Find Work (Tasker)</option>
//                                     <option value="admin" className="text-black">Find Work (Admin)</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.01] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60"
//                         >
//                             {loading ? 'Loading...' : 'Register'}
//                         </button>

//                         <p className="text-center text-sm text-slate-300 pt-2">
//                             Already have an account?{' '}
//                             <span
//                                 onClick={() => router.push('/login')}
//                                 className="text-cyan-300 hover:text-cyan-200 cursor-pointer font-semibold transition"
//                             >
//                                 Login
//                             </span>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';
// import toast from 'react-hot-toast';

// export default function RegisterPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//         phone: '',
//     });
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);
//     const { register } = useAuth();
//     const router = useRouter();

//     const handleChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const validateForm = () => {
//         let newErrors = {};
//         if (!formData.name.trim()) newErrors.name = 'Full Name is required';
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters';
//         }
//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone Number is required';
//         } else if (formData.phone.length < 10) {
//             newErrors.phone = 'Phone number must be at least 10 digits';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!validateForm()) {
//             toast.error("Please fix the errors in the form");
//             return;
//         }

//         setLoading(true);
//         try {
//             const userData = await register(formData);
//             toast.success('Registration successful!');
            
//             // Redirect immediately - DO NOT set loading false here, as page is unmounting
//             router.push(`/dashboard/${userData.role}`);
//         } catch (error) {
//             // Only stop loading if there was an error and we are staying on this page
//             setLoading(false);
//             toast.error(error.response?.data?.message || 'Registration failed');
//         } 
//         // REMOVED 'finally' block to prevent state update on unmount
//     };

//     return (
//         <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
//             {/* Background Effects */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.14),transparent_30%)]" />
//             <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
//             <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

//             <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Content */}
//                 <div className="hidden lg:block text-white px-6">
//                     <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 backdrop-blur-xl px-4 py-2 text-sm font-medium mb-6">
//                         ✨ Join ExLabour Today
//                     </div>

//                     <h1 className="text-5xl font-extrabold leading-tight mb-6">
//                         Build your future
//                         <br />
//                         <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
//                             with smart work
//                         </span>
//                     </h1>

//                     <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
//                         Create your ExLabour account and start posting tasks, receiving bids,
//                         or finding work opportunities with verified professionals.
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
//                         {[
//                             'Secure account setup',
//                             'Role-based dashboard access',
//                             'Verified platform workflows',
//                             'Simple task & bid management',
//                         ].map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4 text-sm text-slate-100"
//                             >
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Register Card */}
//                 <div className="w-full">
//                     <form
//                         onSubmit={handleSubmit}
//                         noValidate
//                         className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10 space-y-5"
//                     >
//                         <div className="text-center mb-2">
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//                                 Create Account
//                             </h1>
//                             <p className="text-slate-300 mt-2 text-sm md:text-base">
//                                 Start your journey with ExLabour
//                             </p>
//                         </div>

//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     name="name"
//                                     placeholder="Enter your full name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
//                                         errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                     }`}
//                                 />
//                                 {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     name="email"
//                                     placeholder="Enter your email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     type="email"
//                                     className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
//                                         errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                     }`}
//                                 />
//                                 {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Password
//                                 </label>
//                                 <input
//                                     name="password"
//                                     placeholder="Create a password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     type="password"
//                                     className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
//                                         errors.password ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                     }`}
//                                 />
//                                 {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     name="phone"
//                                     placeholder="Enter your phone number"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
//                                         errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                     }`}
//                                 />
//                                 {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Select Role
//                                 </label>
//                                 <select
//                                     name="role"
//                                     value={formData.role}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition"
//                                 >
//                                     <option value="user" className="text-black">Post Tasks (User)</option>
//                                     <option value="tasker" className="text-black">Find Work (Tasker)</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.01] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60"
//                         >
//                             {loading ? 'Loading...' : 'Register'}
//                         </button>

//                         <p className="text-center text-sm text-slate-300 pt-2">
//                             Already have an account?{' '}
//                             <span
//                                 onClick={() => router.push('/login')}
//                                 className="text-cyan-300 hover:text-cyan-200 cursor-pointer font-semibold transition"
//                             >
//                                 Login
//                             </span>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }



'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import { FiChevronDown } from 'react-icons/fi';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user',
        phone: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const router = useRouter();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        } else if (formData.phone.length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            return;
        }

        setLoading(true);
        try {
            const userData = await register(formData);
            toast.success('Registration successful!');
            router.push(`/dashboard/${userData.role}`);
        } catch (error) {
            setLoading(false);
            toast.error(error.response?.data?.message || 'Registration failed');
        } 
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.14),transparent_30%)]" />
            <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

            <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="hidden lg:block text-white px-6">
                    <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 backdrop-blur-xl px-4 py-2 text-sm font-medium mb-6">
                        ✨ Join ExLabour Today
                    </div>

                    <h1 className="text-5xl font-extrabold leading-tight mb-6">
                        Build your future
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                            with smart work
                        </span>
                    </h1>

                    <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
                        Create your ExLabour account and start posting tasks, receiving bids,
                        or finding work opportunities with verified professionals.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                        {[
                            'Secure account setup',
                            'Role-based dashboard access',
                            'Verified platform workflows',
                            'Simple task & bid management',
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4 text-sm text-slate-100"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Register Card */}
                <div className="w-full">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10 space-y-5"
                    >
                        <div className="text-center mb-2">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                Create Account
                            </h1>
                            <p className="text-slate-300 mt-2 text-sm md:text-base">
                                Start your journey with ExLabour
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
                                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                    }`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
                                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                    }`}
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
                                        errors.password ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                    }`}
                                />
                                {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-2xl border bg-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition ${
                                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                    }`}
                                />
                                {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
                            </div>

                            {/* --- ATTRACTIVE SELECT DROPDOWN (Enhanced) --- */}
                            <div className="relative group">
                                <label className="block text-sm text-slate-200 mb-2 font-medium ml-1">
                                    Select Role
                                </label>
                                <div className="relative">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="relative w-full appearance-none px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all cursor-pointer font-medium hover:bg-white/10 hover:border-cyan-500/30 z-10"
                                    >
                                        <option value="user" className="bg-[#0f172a] text-slate-200 font-medium py-3">
                                            User (I want to post tasks)
                                        </option>
                                        <option value="tasker" className="bg-[#0f172a] text-slate-200 font-medium py-3">
                                            Tasker (I want to find work)
                                        </option>
                                    </select>
                                    
                                    {/* Icon Container */}
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-20 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                                        <FiChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.01] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60"
                        >
                            {loading ? 'Loading...' : 'Register'}
                        </button>

                        <p className="text-center text-sm text-slate-300 pt-2">
                            Already have an account?{' '}
                            <span
                                onClick={() => router.push('/login')}
                                className="text-cyan-300 hover:text-cyan-200 cursor-pointer font-semibold transition"
                            >
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}