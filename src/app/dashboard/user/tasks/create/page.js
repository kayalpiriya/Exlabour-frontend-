// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiUpload } from 'react-icons/fi';

// const CATEGORIES = [
//     'Cleaning', 'Delivery', 'Design', 'IT Support',
//     'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
// ];

// export default function CreateTaskPage() {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const [form, setForm] = useState({
//         title: '',
//         description: '',
//         category: '',
//         budgetMin: '',
//         budgetMax: '',
//         deadline: '',
//         location: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const formData = new FormData();
//             Object.keys(form).forEach((key) => formData.append(key, form[key]));
//             files.forEach((file) => formData.append('attachments', file));

//             await API.post('/tasks', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });

//             toast.success('Task posted! Waiting for admin approval.');
//             router.push('/dashboard/user/tasks');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Failed to create task');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="max-w-2xl mx-auto">
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Post a New Task</h1>
//                 <p className="text-gray-500">
//                     Fill in the details and get bids from verified taskers
//                 </p>
//             </div>

//             <div className="card">
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Title */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Task Title *
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="e.g. Fix my kitchen sink"
//                             required
//                             className="input-field"
//                             onChange={(e) =>
//                                 setForm({ ...form, title: e.target.value })
//                             }
//                         />
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Description *
//                         </label>
//                         <textarea
//                             placeholder="Describe your task in detail..."
//                             required
//                             rows={4}
//                             className="input-field resize-none"
//                             onChange={(e) =>
//                                 setForm({ ...form, description: e.target.value })
//                             }
//                         />
//                     </div>

//                     {/* Category */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Category *
//                         </label>
//                         <select
//                             required
//                             className="input-field"
//                             onChange={(e) =>
//                                 setForm({ ...form, category: e.target.value })
//                             }
//                         >
//                             <option value="">Select a category</option>
//                             {CATEGORIES.map((cat) => (
//                                 <option key={cat} value={cat}>{cat}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Budget */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Min Budget (₹) *
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="500"
//                                 required
//                                 className="input-field"
//                                 onChange={(e) =>
//                                     setForm({ ...form, budgetMin: e.target.value })
//                                 }
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Max Budget (₹) *
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="2000"
//                                 required
//                                 className="input-field"
//                                 onChange={(e) =>
//                                     setForm({ ...form, budgetMax: e.target.value })
//                                 }
//                             />
//                         </div>
//                     </div>

//                     {/* Deadline & Location */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Deadline *
//                             </label>
//                             <input
//                                 type="date"
//                                 required
//                                 className="input-field"
//                                 onChange={(e) =>
//                                     setForm({ ...form, deadline: e.target.value })
//                                 }
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Location *
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Chennai"
//                                 required
//                                 className="input-field"
//                                 onChange={(e) =>
//                                     setForm({ ...form, location: e.target.value })
//                                 }
//                             />
//                         </div>
//                     </div>

//                     {/* File Upload */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Attachments (Optional)
//                         </label>
//                         <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition block">
//                             <FiUpload className="text-gray-400 text-3xl mx-auto mb-2" />
//                             <p className="text-gray-500 text-sm">
//                                 Click to upload files (images, PDF, docs)
//                             </p>
//                             <input
//                                 type="file"
//                                 multiple
//                                 className="hidden"
//                                 onChange={(e) => setFiles([...e.target.files])}
//                             />
//                         </label>
//                         {files.length > 0 && (
//                             <p className="text-sm text-green-600 mt-2">
//                                 {files.length} file(s) selected
//                             </p>
//                         )}
//                     </div>

//                     {/* Submit */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-lg"
//                     >
//                         {loading ? 'Posting Task...' : 'Post Task'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { FiUpload } from 'react-icons/fi';

// const CATEGORIES = [
//     'Cleaning', 'Delivery', 'Design', 'IT Support',
//     'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
// ];

// export default function CreateTaskPage() {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const [form, setForm] = useState({
//         title: '',
//         description: '',
//         category: '',
//         budgetMin: '',
//         budgetMax: '',
//         deadline: '',
//         location: '',
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const formData = new FormData();

//             Object.keys(form).forEach((key) => {
//                 formData.append(key, form[key]);
//             });

//             files.forEach((file) => {
//                 formData.append('attachments', file);
//             });

//             await API.post('/tasks', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             toast.success('Task posted! Waiting for admin approval.');
//             router.push('/dashboard/user/tasks');
//         } catch (error) {
//             console.log('CREATE TASK ERROR:', error.response?.data || error.message);
//             toast.error(error.response?.data?.message || 'Failed to create task');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="max-w-2xl mx-auto">
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Post a New Task</h1>
//                 <p className="text-gray-500">
//                     Fill in the details and get bids from verified taskers
//                 </p>
//             </div>

//             <div className="card">
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Task Title *
//                         </label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={form.title}
//                             placeholder="e.g. Fix my kitchen sink"
//                             required
//                             className="input-field"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Description *
//                         </label>
//                         <textarea
//                             name="description"
//                             value={form.description}
//                             placeholder="Describe your task in detail..."
//                             required
//                             rows={4}
//                             className="input-field resize-none"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Category *
//                         </label>
//                         <select
//                             name="category"
//                             value={form.category}
//                             required
//                             className="input-field"
//                             onChange={handleChange}
//                         >
//                             <option value="">Select a category</option>
//                             {CATEGORIES.map((cat) => (
//                                 <option key={cat} value={cat}>{cat}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Min Budget (₹) *
//                             </label>
//                             <input
//                                 type="number"
//                                 name="budgetMin"
//                                 value={form.budgetMin}
//                                 placeholder="500"
//                                 required
//                                 className="input-field"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Max Budget (₹) *
//                             </label>
//                             <input
//                                 type="number"
//                                 name="budgetMax"
//                                 value={form.budgetMax}
//                                 placeholder="2000"
//                                 required
//                                 className="input-field"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Deadline *
//                             </label>
//                             <input
//                                 type="date"
//                                 name="deadline"
//                                 value={form.deadline}
//                                 required
//                                 className="input-field"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Location *
//                             </label>
//                             <input
//                                 type="text"
//                                 name="location"
//                                 value={form.location}
//                                 placeholder="Chennai"
//                                 required
//                                 className="input-field"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Attachments (Optional)
//                         </label>
//                         <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition block">
//                             <FiUpload className="text-gray-400 text-3xl mx-auto mb-2" />
//                             <p className="text-gray-500 text-sm">
//                                 Click to upload files (images, PDF, docs)
//                             </p>
//                             <input
//                                 type="file"
//                                 multiple
//                                 className="hidden"
//                                 onChange={(e) => setFiles(Array.from(e.target.files))}
//                             />
//                         </label>

//                         {files.length > 0 && (
//                             <p className="text-sm text-green-600 mt-2">
//                                 {files.length} file(s) selected
//                             </p>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-lg"
//                     >
//                         {loading ? 'Posting Task...' : 'Post Task'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import API from '@/utils/api';
// import toast from 'react-hot-toast';
// import { 
//     FiUploadCloud, 
//     FiFileText, 
//     FiCheckCircle, 
//     FiPlusCircle,
//     FiBriefcase
// } from 'react-icons/fi';

// const CATEGORIES = [
//     'Cleaning', 'Delivery', 'Design', 'IT Support',
//     'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
// ];

// export default function CreateTaskPage() {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const [form, setForm] = useState({
//         title: '',
//         description: '',
//         category: '',
//         budgetMin: '',
//         budgetMax: '',
//         deadline: '',
//         location: '',
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const formData = new FormData();

//             Object.keys(form).forEach((key) => {
//                 formData.append(key, form[key]);
//             });

//             files.forEach((file) => {
//                 formData.append('attachments', file);
//             });

//             await API.post('/tasks', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             toast.success('Task posted! Waiting for admin approval.');
//             router.push('/dashboard/user/tasks');
//         } catch (error) {
//             console.log('CREATE TASK ERROR:', error.response?.data || error.message);
//             toast.error(error.response?.data?.message || 'Failed to create task');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Shared input styling for consistency
//     const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all duration-200 placeholder-gray-400";
//     const labelClasses = "block text-sm font-bold text-gray-700 mb-1.5";

//     return (
//         <div className="max-w-3xl mx-auto pb-12 animate-fade-in">
//             {/* Header */}
//             <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center gap-4">
//                 <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
//                     <FiBriefcase className="text-blue-600 text-2xl" />
//                 </div>
//                 <div>
//                     <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Post a New Task</h1>
//                     <p className="text-gray-500 mt-1 font-medium">
//                         Fill in the details below to start receiving bids from verified taskers.
//                     </p>
//                 </div>
//             </div>

//             {/* Form Container */}
//             <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10">
//                 <form onSubmit={handleSubmit} className="space-y-6">
                    
//                     {/* Task Title */}
//                     <div>
//                         <label className={labelClasses}>Task Title <span className="text-red-500">*</span></label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={form.title}
//                             placeholder="e.g. Fix my kitchen sink plumbing"
//                             required
//                             className={inputClasses}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label className={labelClasses}>Description <span className="text-red-500">*</span></label>
//                         <textarea
//                             name="description"
//                             value={form.description}
//                             placeholder="Describe what needs to be done, requirements, and specific details..."
//                             required
//                             rows={5}
//                             className={`${inputClasses} resize-none`}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     {/* Category */}
//                     <div>
//                         <label className={labelClasses}>Category <span className="text-red-500">*</span></label>
//                         <div className="relative">
//                             <select
//                                 name="category"
//                                 value={form.category}
//                                 required
//                                 className={`${inputClasses} appearance-none cursor-pointer`}
//                                 onChange={handleChange}
//                             >
//                                 <option value="" disabled>Select a relevant category</option>
//                                 {CATEGORIES.map((cat) => (
//                                     <option key={cat} value={cat}>{cat}</option>
//                                 ))}
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
//                                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Budget & Location / Deadline Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
//                         {/* Budgets */}
//                         <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
//                             <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
//                                 💰 Budget Range
//                             </h3>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-600 mb-1">Min Budget (₹) <span className="text-red-500">*</span></label>
//                                 <div className="relative">
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-bold">₹</span>
//                                     <input
//                                         type="number"
//                                         name="budgetMin"
//                                         value={form.budgetMin}
//                                         placeholder="500"
//                                         required
//                                         min="1"
//                                         className={`${inputClasses} pl-8`}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-600 mb-1">Max Budget (₹) <span className="text-red-500">*</span></label>
//                                 <div className="relative">
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-bold">₹</span>
//                                     <input
//                                         type="number"
//                                         name="budgetMax"
//                                         value={form.budgetMax}
//                                         placeholder="2000"
//                                         required
//                                         min="1"
//                                         className={`${inputClasses} pl-8`}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Timing & Location */}
//                         <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
//                             <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
//                                 📍 Logistics
//                             </h3>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-600 mb-1">Deadline <span className="text-red-500">*</span></label>
//                                 <input
//                                     type="date"
//                                     name="deadline"
//                                     value={form.deadline}
//                                     required
//                                     className={inputClasses}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-600 mb-1">Location <span className="text-red-500">*</span></label>
//                                 <input
//                                     type="text"
//                                     name="location"
//                                     value={form.location}
//                                     placeholder="e.g. Chennai or Remote"
//                                     required
//                                     className={inputClasses}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>

//                     </div>

//                     {/* Attachments */}
//                     <div>
//                         <label className={labelClasses}>Attachments <span className="text-gray-400 font-normal">(Optional)</span></label>
//                         <label className="border-2 border-dashed border-gray-300 bg-gray-50/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 group">
//                             <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <FiUploadCloud className="text-blue-500 text-3xl" />
//                             </div>
//                             <p className="text-gray-700 font-semibold mb-1">
//                                 Click to upload files
//                             </p>
//                             <p className="text-gray-400 text-sm">
//                                 Support for Images, PDFs, and Documents
//                             </p>
//                             <input
//                                 type="file"
//                                 multiple
//                                 className="hidden"
//                                 onChange={(e) => setFiles(Array.from(e.target.files))}
//                             />
//                         </label>

//                         {/* Display selected files elegantly */}
//                         {files.length > 0 && (
//                             <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
//                                 <p className="text-sm font-bold text-emerald-800 mb-2 flex items-center gap-2">
//                                     <FiCheckCircle /> {files.length} file(s) selected successfully
//                                 </p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {files.map((f, i) => (
//                                         <span key={i} className="bg-white text-emerald-700 border border-emerald-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
//                                             <FiFileText className="text-emerald-500" /> 
//                                             <span className="truncate max-w-[150px]">{f.name}</span>
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-4 border-t border-gray-100">
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 text-lg group hover:-translate-y-0.5"
//                         >
//                             {loading ? (
//                                 <>
//                                     <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                     <span>Posting Task...</span>
//                                 </>
//                             ) : (
//                                 <>
//                                     <FiPlusCircle className="text-xl group-hover:rotate-90 transition-transform duration-300" />
//                                     <span>Post Task Now</span>
//                                 </>
//                             )}
//                         </button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     );
// }




'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/utils/api';
import toast from 'react-hot-toast';
import { 
    FiUploadCloud, 
    FiFileText, 
    FiCheckCircle, 
    FiPlusCircle,
    FiBriefcase
} from 'react-icons/fi';

const CATEGORIES = [
    'Cleaning', 'Delivery', 'Design', 'IT Support',
    'Writing', 'Home Repair', 'Plumbing', 'Electrical', 'Other',
];

export default function CreateTaskPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);
    
    // New State for validation errors
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        title: '',
        description: '',
        category: '',
        budgetMin: '',
        budgetMax: '',
        deadline: '',
        location: '',
    });

    // Function remains exactly as requested
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        const today = new Date().toISOString().split('T')[0];

        // Title Validation
        if (!form.title.trim()) newErrors.title = 'Task Title is required';

        // Description Validation
        if (!form.description.trim()) newErrors.description = 'Description is required';

        // Category Validation
        if (!form.category) newErrors.category = 'Please select a category';

        // Location Validation
        if (!form.location.trim()) newErrors.location = 'Location is required';

        // Budget Validation
        if (!form.budgetMin) {
            newErrors.budgetMin = 'Required';
        } else if (Number(form.budgetMin) <= 0) {
            newErrors.budgetMin = 'Must be > 0';
        }

        if (!form.budgetMax) {
            newErrors.budgetMax = 'Required';
        } else if (Number(form.budgetMax) <= 0) {
            newErrors.budgetMax = 'Must be > 0';
        } else if (Number(form.budgetMax) < Number(form.budgetMin)) {
            newErrors.budgetMax = 'Max < Min';
        }

        // Deadline Validation
        if (!form.deadline) {
            newErrors.deadline = 'Required';
        } else if (form.deadline < today) {
            newErrors.deadline = 'Cannot be past';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate before submitting
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();

            Object.keys(form).forEach((key) => {
                formData.append(key, form[key]);
            });

            files.forEach((file) => {
                formData.append('attachments', file);
            });

            await API.post('/tasks', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Task posted! Waiting for admin approval.');
            router.push('/dashboard/user/tasks');
        } catch (error) {
            console.log('CREATE TASK ERROR:', error.response?.data || error.message);
            toast.error(error.response?.data?.message || 'Failed to create task');
        } finally {
            setLoading(false);
        }
    };

    // Shared input styling for consistency
    const inputClasses = "w-full bg-gray-50 border text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent transition-all duration-200 placeholder-gray-400";
    const labelClasses = "block text-sm font-bold text-gray-700 mb-1.5";

    // Helper to dynamically apply error styles
    const getFieldClass = (errorKey) => {
        return errorKey 
            ? "border-red-500 focus:ring-red-500 bg-red-50" 
            : "border-gray-200 focus:ring-blue-500";
    };

    return (
        <div className="max-w-3xl mx-auto pb-12 animate-fade-in">
            {/* Header */}
            <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
                    <FiBriefcase className="text-blue-600 text-2xl" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Post a New Task</h1>
                    <p className="text-gray-500 mt-1 font-medium">
                        Fill in the details below to start receiving bids from verified taskers.
                    </p>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    
                    {/* Task Title */}
                    <div>
                        <label className={labelClasses}>Task Title <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            placeholder="e.g. Fix my kitchen sink plumbing"
                            className={`${inputClasses} ${getFieldClass(errors.title)}`}
                            onChange={handleChange}
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1 font-medium">{errors.title}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className={labelClasses}>Description <span className="text-red-500">*</span></label>
                        <textarea
                            name="description"
                            value={form.description}
                            placeholder="Describe what needs to be done, requirements, and specific details..."
                            rows={5}
                            className={`${inputClasses} resize-none ${getFieldClass(errors.description)}`}
                            onChange={handleChange}
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1 font-medium">{errors.description}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className={labelClasses}>Category <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select
                                name="category"
                                value={form.category}
                                className={`${inputClasses} appearance-none cursor-pointer ${getFieldClass(errors.category)}`}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select a relevant category</option>
                                {CATEGORIES.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        {errors.category && <p className="text-red-500 text-xs mt-1 font-medium">{errors.category}</p>}
                    </div>

                    {/* Budget & Location / Deadline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Budgets */}
                        <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                💰 Budget Range
                            </h3>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Min Budget (₹) <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-bold">₹</span>
                                    <input
                                        type="number"
                                        name="budgetMin"
                                        value={form.budgetMin}
                                        placeholder="500"
                                        min="1"
                                        className={`${inputClasses} pl-8 ${getFieldClass(errors.budgetMin)}`}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.budgetMin && <p className="text-red-500 text-xs mt-1 font-medium">{errors.budgetMin}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Max Budget (₹) <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-bold">₹</span>
                                    <input
                                        type="number"
                                        name="budgetMax"
                                        value={form.budgetMax}
                                        placeholder="2000"
                                        min="1"
                                        className={`${inputClasses} pl-8 ${getFieldClass(errors.budgetMax)}`}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.budgetMax && <p className="text-red-500 text-xs mt-1 font-medium">{errors.budgetMax}</p>}
                            </div>
                        </div>

                        {/* Timing & Location */}
                        <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                📍 Logistics
                            </h3>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Deadline <span className="text-red-500">*</span></label>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={form.deadline}
                                    className={`${inputClasses} ${getFieldClass(errors.deadline)}`}
                                    onChange={handleChange}
                                />
                                {errors.deadline && <p className="text-red-500 text-xs mt-1 font-medium">{errors.deadline}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Location <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    placeholder="e.g. Chennai or Remote"
                                    className={`${inputClasses} ${getFieldClass(errors.location)}`}
                                    onChange={handleChange}
                                />
                                {errors.location && <p className="text-red-500 text-xs mt-1 font-medium">{errors.location}</p>}
                            </div>
                        </div>

                    </div>

                    {/* Attachments */}
                    <div>
                        <label className={labelClasses}>Attachments <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <label className="border-2 border-dashed border-gray-300 bg-gray-50/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 group">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                                <FiUploadCloud className="text-blue-500 text-3xl" />
                            </div>
                            <p className="text-gray-700 font-semibold mb-1">
                                Click to upload files
                            </p>
                            <p className="text-gray-400 text-sm">
                                Support for Images, PDFs, and Documents
                            </p>
                            <input
                                type="file"
                                multiple
                                className="hidden"
                                onChange={(e) => setFiles(Array.from(e.target.files))}
                            />
                        </label>

                        {/* Display selected files elegantly */}
                        {files.length > 0 && (
                            <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                                <p className="text-sm font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                    <FiCheckCircle /> {files.length} file(s) selected successfully
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {files.map((f, i) => (
                                        <span key={i} className="bg-white text-emerald-700 border border-emerald-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                                            <FiFileText className="text-emerald-500" /> 
                                            <span className="truncate max-w-[150px]">{f.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-gray-100">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 text-lg group hover:-translate-y-0.5"
                        >
                            {loading ? (
                                <>
                                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Posting Task...</span>
                                </>
                            ) : (
                                <>
                                    <FiPlusCircle className="text-xl group-hover:rotate-90 transition-transform duration-300" />
                                    <span>Post Task Now</span>
                                </>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}