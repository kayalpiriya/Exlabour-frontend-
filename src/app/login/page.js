// 'use client';

// import { useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import API from '@/utils/api';
// import { AuthContext } from '@/context/AuthContext';
// import toast from 'react-hot-toast';
// import { FiMail, FiLock, FiBriefcase } from 'react-icons/fi';

// export default function LoginPage() {

//     const router = useRouter();
//     const { login } = useContext(AuthContext);

//     const [loading, setLoading] = useState(false);

//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();
//         setLoading(true);

//         try {

//             console.log("Sending:", form); // DEBUG

//             const { data } = await API.post('/auth/login', form);

//             login(data);

//             toast.success(`Welcome back, ${data.name}!`);

//             router.push(`/dashboard/${data.role}`);

//         } catch (error) {

//             console.log(error.response?.data);

//             toast.error(
//                 error.response?.data?.message || 'Login failed'
//             );

//         } finally {
//             setLoading(false);
//         }

//     };

//     return (

//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-12">

//             <div className="w-full max-w-md">

//                 {/* Logo */}
//                 <div className="text-center mb-8">

//                     <div className="inline-flex items-center gap-2 text-3xl font-bold text-blue-600 mb-2">
//                         <FiBriefcase />
//                         ExLabour
//                     </div>

//                     <h2 className="text-2xl font-bold text-gray-800">
//                         Welcome back
//                     </h2>

//                     <p className="text-gray-500 mt-1">
//                         Login to your account
//                     </p>

//                 </div>

//                 {/* Card */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8">

//                     <form onSubmit={handleSubmit} className="space-y-5">

//                         {/* EMAIL */}
//                         <div>

//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Email Address
//                             </label>

//                             <div className="relative">

//                                 <FiMail className="absolute left-3 top-3 text-gray-400" />

//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={form.email}
//                                     placeholder="john@example.com"
//                                     required
//                                     className="input-field pl-10"
//                                     onChange={handleChange}
//                                 />

//                             </div>

//                         </div>

//                         {/* PASSWORD */}
//                         <div>

//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Password
//                             </label>

//                             <div className="relative">

//                                 <FiLock className="absolute left-3 top-3 text-gray-400" />

//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={form.password}
//                                     placeholder="••••••••"
//                                     required
//                                     className="input-field pl-10"
//                                     onChange={handleChange}
//                                 />

//                             </div>

//                         </div>

//                         {/* BUTTON */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-lg"
//                         >
//                             {loading ? 'Logging in...' : 'Login'}
//                         </button>

//                     </form>

//                     <p className="text-center text-gray-500 mt-6">
//                         Don't have an account?{' '}
//                         <Link
//                             href="/register"
//                             className="text-blue-600 font-semibold hover:underline"
//                         >
//                             Register here
//                         </Link>
//                     </p>

//                 </div>

//             </div>

//         </div>

//     );

// }



// 'use client';

// import { useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import API from '@/utils/api';
// import { AuthContext } from '@/context/AuthContext';
// import toast from 'react-hot-toast';
// import { FiMail, FiLock, FiBriefcase } from 'react-icons/fi';

// export default function LoginPage() {

//     const router = useRouter();
//     const { login } = useContext(AuthContext);

//     const [loading, setLoading] = useState(false);

//     const [form, setForm] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     // const handleSubmit = async (e) => {

//     //     e.preventDefault();
//     //     setLoading(true);

//     //     try {

//     //         console.log("Sending:", form); // DEBUG

//     //         const { data } = await API.post('/auth/login', form);

//     //         login(data);

//     //         toast.success(`Welcome back, ${data.name}!`);

//     //         router.push(`/dashboard/${data.role}`);

//     //     } catch (error) {

//     //         console.log(error.response?.data);

//     //         toast.error(
//     //             error.response?.data?.message || 'Login failed'
//     //         );

//     //     } finally {
//     //         setLoading(false);
//     //     }

//     // };


//         const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             console.log("Logging in with:", form); // DEBUG

//             // 1. Just call the login function from context with email and password!
//             const data = await login(form.email, form.password);

//             toast.success(`Welcome back!`);

//             // 2. Navigate based on the user's role
//             // Note: Depending on your backend, role might be inside data.user.role OR data.role
//             const userRole = data.user?.role || data.role; 
//             router.push(`/dashboard/${userRole}`);

//         } catch (error) {
//             console.log(error.response?.data);
//             toast.error(
//                 error.response?.data?.message || 'Login failed'
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (

//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-12">

//             <div className="w-full max-w-md">

//                 {/* Logo */}
//                 <div className="text-center mb-8">

//                     <div className="inline-flex items-center gap-2 text-3xl font-bold text-blue-600 mb-2">
//                         <FiBriefcase />
//                         ExLabour
//                     </div>

//                     <h2 className="text-2xl font-bold text-gray-800">
//                         Welcome back
//                     </h2>

//                     <p className="text-gray-500 mt-1">
//                         Login to your account
//                     </p>

//                 </div>

//                 {/* Card */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8">

//                     <form onSubmit={handleSubmit} className="space-y-5">

//                         {/* EMAIL */}
//                         <div>

//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Email Address
//                             </label>

//                             <div className="relative">

//                                 <FiMail className="absolute left-3 top-3 text-gray-400" />

//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={form.email}
//                                     placeholder="john@example.com"
//                                     required
//                                     className="input-field pl-10"
//                                     onChange={handleChange}
//                                 />

//                             </div>

//                         </div>

//                         {/* PASSWORD */}
//                         <div>

//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Password
//                             </label>

//                             <div className="relative">

//                                 <FiLock className="absolute left-3 top-3 text-gray-400" />

//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={form.password}
//                                     placeholder="••••••••"
//                                     required
//                                     className="input-field pl-10"
//                                     onChange={handleChange}
//                                 />

//                             </div>

//                         </div>

//                         {/* BUTTON */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-lg"
//                         >
//                             {loading ? 'Logging in...' : 'Login'}
//                         </button>

//                     </form>

//                     <p className="text-center text-gray-500 mt-6">
//                         Don't have an account?{' '}
//                         <Link
//                             href="/register"
//                             className="text-blue-600 font-semibold hover:underline"
//                         >
//                             Register here
//                         </Link>
//                     </p>

//                 </div>

//             </div>

//         </div>

//     );

// }



// 'use client';

// import { useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { AuthContext } from '@/context/AuthContext';
// import toast from 'react-hot-toast';
// import { FiMail, FiLock, FiBriefcase, FiArrowRight } from 'react-icons/fi';

// export default function LoginPage() {
//     const router = useRouter();
//     const { login } = useContext(AuthContext);

//     const [loading, setLoading] = useState(false);

//     const [form, setForm] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             console.log("Logging in with:", form); // DEBUG

//             // 1. Just call the login function from context with email and password!
//             const data = await login(form.email, form.password);

//             toast.success(`Welcome back!`);

//             // 2. Navigate based on the user's role
//             const userRole = data.user?.role || data.role; 
//             router.push(`/dashboard/${userRole}`);

//         } catch (error) {
//             console.log(error.response?.data);
//             toast.error(
//                 error.response?.data?.message || 'Login failed'
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
//             {/* Background Light Effects */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.16),transparent_25%)]" />
//             <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
//             <div className="absolute bottom-[-80px] left-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

//             <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                
//                 {/* Left Content (Marketing side) */}
//                 <div className="hidden lg:block text-white px-6">
//                     <Link href="/" className="inline-flex items-center gap-2 text-3xl font-extrabold text-white mb-10 hover:text-cyan-300 transition">
//                         <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
//                             <FiBriefcase size={24} className="text-white" />
//                         </div>
//                         ExLabour
//                     </Link>

//                     <h1 className="text-5xl font-extrabold leading-tight mb-6">
//                         Welcome back to
//                         <br />
//                         <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
//                             your workspace
//                         </span>
//                     </h1>

//                     <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
//                         Log in to manage your tasks, track your bids, and connect with top-tier professionals seamlessly.
//                     </p>

//                     <div className="flex items-center gap-4 text-sm text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 max-w-md">
//                         <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                         Platform is running smoothly. Over 500+ tasks posted this week.
//                     </div>
//                 </div>

//                 {/* Right Content (Login Card) */}
//                 <div className="w-full">
//                     <form 
//                         onSubmit={handleSubmit} 
//                         className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10"
//                     >
//                         <div className="text-center mb-8">
//                             {/* Mobile Logo */}
//                             <div className="lg:hidden flex items-center justify-center gap-2 text-2xl font-extrabold text-white mb-6">
//                                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
//                                     <FiBriefcase size={20} className="text-white" />
//                                 </div>
//                                 ExLabour
//                             </div>

//                             <h2 className="text-3xl font-extrabold text-white tracking-tight">
//                                 Sign In
//                             </h2>
//                             <p className="text-slate-300 mt-2 text-sm">
//                                 Enter your credentials to access your account
//                             </p>
//                         </div>

//                         <div className="space-y-5">
//                             {/* EMAIL */}
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Email Address
//                                 </label>
//                                 <div className="relative">
//                                     <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={form.email}
//                                         placeholder="john@example.com"
//                                         required
//                                         className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition focus:bg-white/10"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>

//                             {/* PASSWORD */}
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Password
//                                 </label>
//                                 <div className="relative">
//                                     <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={form.password}
//                                         placeholder="••••••••"
//                                         required
//                                         className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 transition focus:bg-white/10"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>

//                             {/* BUTTON */}
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-full mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 group"
//                             >
//                                 {loading ? 'Authenticating...' : 'Login Securely'}
//                                 {!loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
//                             </button>
//                         </div>

//                         {/* Footer Link */}
//                         <div className="mt-8 text-center text-sm text-slate-300 border-t border-white/10 pt-6">
//                             Don't have an account?{' '}
//                             <Link
//                                 href="/register"
//                                 className="text-cyan-300 hover:text-cyan-200 font-semibold transition hover:underline"
//                             >
//                                 Create one now
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




// 'use client';

// import { useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { AuthContext } from '@/context/AuthContext';
// import toast from 'react-hot-toast';
// import { FiMail, FiLock, FiBriefcase, FiArrowRight } from 'react-icons/fi';

// export default function LoginPage() {
//     const router = useRouter();
//     const { login } = useContext(AuthContext);
//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState({});

//     const [form, setForm] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//         if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!form.email.trim()) newErrors.email = 'Email address is required';
//         else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
//         if (!form.password) newErrors.password = 'Password is required';
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!validateForm()) {
//             toast.error("Please fix the errors below");
//             return;
//         }

//         setLoading(true);

//         try {
//             const data = await login(form.email, form.password);
//             toast.success(`Welcome back!`);
            
//             // Redirect immediately
//             const userRole = data.user?.role || data.role; 
//             router.push(`/dashboard/${userRole}`);
            
//             // Do NOT call setLoading(false) here, the component is unmounting
//         } catch (error) {
//             console.log(error.response?.data);
//             toast.error(error.response?.data?.message || 'Login failed');
//             // Only stop loading if we failed and are staying on the login page
//             setLoading(false);
//         }
//         // REMOVED 'finally' block
//     };

//     return (
//         <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
//             {/* Background Light Effects */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.16),transparent_25%)]" />
//             <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
//             <div className="absolute bottom-[-80px] left-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

//             <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                
//                 {/* Left Content (Marketing side) */}
//                 <div className="hidden lg:block text-white px-6">
//                     <Link href="/" className="inline-flex items-center gap-2 text-3xl font-extrabold text-white mb-10 hover:text-cyan-300 transition">
//                         <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
//                             <FiBriefcase size={24} className="text-white" />
//                         </div>
//                         ExLabour
//                     </Link>

//                     <h1 className="text-5xl font-extrabold leading-tight mb-6">
//                         Welcome back to
//                         <br />
//                         <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
//                             your workspace
//                         </span>
//                     </h1>

//                     <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
//                         Log in to manage your tasks, track your bids, and connect with top-tier professionals seamlessly.
//                     </p>

//                     <div className="flex items-center gap-4 text-sm text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 max-w-md">
//                         <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                         Platform is running smoothly. Over 500+ tasks posted this week.
//                     </div>
//                 </div>

//                 {/* Right Content (Login Card) */}
//                 <div className="w-full">
//                     <form 
//                         onSubmit={handleSubmit} 
//                         noValidate
//                         className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10"
//                     >
//                         <div className="text-center mb-8">
//                             <div className="lg:hidden flex items-center justify-center gap-2 text-2xl font-extrabold text-white mb-6">
//                                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
//                                     <FiBriefcase size={20} className="text-white" />
//                                 </div>
//                                 ExLabour
//                             </div>

//                             <h2 className="text-3xl font-extrabold text-white tracking-tight">
//                                 Sign In
//                             </h2>
//                             <p className="text-slate-300 mt-2 text-sm">
//                                 Enter your credentials to access your account
//                             </p>
//                         </div>

//                         <div className="space-y-5">
//                             {/* EMAIL */}
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Email Address
//                                 </label>
//                                 <div className="relative">
//                                     <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={form.email}
//                                         placeholder="john@example.com"
//                                         className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition focus:bg-white/10 ${
//                                             errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                         }`}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
//                             </div>

//                             {/* PASSWORD */}
//                             <div>
//                                 <label className="block text-sm text-slate-200 mb-2 font-medium">
//                                     Password
//                                 </label>
//                                 <div className="relative">
//                                     <FiLock className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${errors.password ? 'text-red-400' : 'text-slate-400'}`} />
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={form.password}
//                                         placeholder="••••••••"
//                                         className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition focus:bg-white/10 ${
//                                             errors.password ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
//                                         }`}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-full mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 group"
//                             >
//                                 {loading ? 'Authenticating...' : 'Login Securely'}
//                                 {!loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
//                             </button>
//                         </div>

//                         <div className="mt-8 text-center text-sm text-slate-300 border-t border-white/10 pt-6">
//                             Don't have an account?{' '}
//                             <Link
//                                 href="/register"
//                                 className="text-cyan-300 hover:text-cyan-200 font-semibold transition hover:underline"
//                             >
//                                 Create one now
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import { FiMail, FiLock, FiBriefcase, FiArrowRight } from 'react-icons/fi';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.email.trim()) newErrors.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
        if (!form.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please fix the errors below");
            return;
        }

        setLoading(true);

        try {
            const data = await login(form.email, form.password);
            toast.success(`Welcome back!`);
            
            // Redirect immediately
            const userRole = data.user?.role || data.role; 
            router.push(`/dashboard/${userRole}`);
            
        } catch (error) {
            console.log(error.response?.data);
            toast.error(error.response?.data?.message || 'Login failed');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_25%,#172554_55%,#312e81_100%)] flex items-center justify-center px-4 py-10">
            {/* Background Light Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.16),transparent_25%)]" />
            <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-[-80px] left-[-60px] w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

            <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                
                {/* Left Content (Marketing side) */}
                <div className="hidden lg:block text-white px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-3xl font-extrabold text-white mb-10 hover:text-cyan-300 transition">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                            <FiBriefcase size={24} className="text-white" />
                        </div>
                        ExLabour
                    </Link>

                    <h1 className="text-5xl font-extrabold leading-tight mb-6">
                        Welcome back to
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                            your workspace
                        </span>
                    </h1>

                    <p className="text-slate-200 text-lg leading-relaxed max-w-xl mb-8">
                        Log in to manage your tasks, track your bids, and connect with top-tier professionals seamlessly.
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 max-w-md">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Platform is running smoothly. Over 500+ tasks posted this week.
                    </div>
                </div>

                {/* Right Content (Login Card) */}
                <div className="w-full">
                    <form 
                        onSubmit={handleSubmit} 
                        noValidate
                        autoComplete="off" // 1. Disable autofill for form
                        className="w-full max-w-md mx-auto rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10"
                    >
                        <div className="text-center mb-8">
                            <div className="lg:hidden flex items-center justify-center gap-2 text-2xl font-extrabold text-white mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                                    <FiBriefcase size={20} className="text-white" />
                                </div>
                                ExLabour
                            </div>

                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                Sign In
                            </h2>
                            <p className="text-slate-300 mt-2 text-sm">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* EMAIL */}
                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        placeholder="john@example.com"
                                        autoComplete="off" // 2. Disable email history
                                        className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition focus:bg-white/10 ${
                                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                        }`}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className="block text-sm text-slate-200 mb-2 font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <FiLock className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${errors.password ? 'text-red-400' : 'text-slate-400'}`} />
                                    <input
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        placeholder="••••••••"
                                        autoComplete="new-password" // 3. Prevent auto-fill on load
                                        className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border bg-white/5 text-white placeholder:text-slate-400 outline-none focus:ring-2 transition focus:bg-white/10 ${
                                            errors.password ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-300'
                                        }`}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_35px_rgba(59,130,246,0.35)] hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(99,102,241,0.35)] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 group"
                            >
                                {loading ? 'Authenticating...' : 'Login Securely'}
                                {!loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>

                        <div className="mt-8 text-center text-sm text-slate-300 border-t border-white/10 pt-6">
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="text-cyan-300 hover:text-cyan-200 font-semibold transition hover:underline"
                            >
                                Create one now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}