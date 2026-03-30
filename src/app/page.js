'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
    FiCheckCircle,
    FiUsers,
    FiDollarSign,
    FiShield,
    FiArrowRight,
} from 'react-icons/fi';

export default function HomePage() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-hidden">
            {/* Hero */}
            <section className="relative isolate overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_35%,#172554_70%,#312e81_100%)]" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl text-white/90 text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.2)] mb-6">
                            <span className="text-cyan-300">✦</span>
                            Trusted Freelance Marketplace
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                            Find the Right Tasker
                            <br />
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                                for Every Job
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
                            ExLabour connects you with skilled taskers. Post a task,
                            receive bids, compare proposals, and choose the best fit.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            {user ? (
                                <Link
                                    href={`/dashboard/${user.role}`}
                                    className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-blue-700 font-semibold text-lg shadow-[0_15px_40px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-slate-50"
                                >
                                    Go to Dashboard
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-blue-700 font-semibold text-lg shadow-[0_15px_40px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-slate-50"
                                    >
                                        Get Started Free
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-4 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:text-slate-900"
                                    >
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Stats */}
            <section className="relative z-10 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {[
                            { value: '500+', label: 'Tasks Completed' },
                            { value: '200+', label: 'Verified Taskers' },
                            { value: '98%', label: 'Satisfaction Rate' },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(59,130,246,0.12)]"
                            >
                                <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </h3>
                                <p className="mt-2 text-slate-500 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-semibold mb-4 border border-blue-100">
                            Simple Process
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            How ExLabour Works
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            A smooth, trusted and modern workflow that helps users and taskers connect faster.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FiCheckCircle />,
                                title: 'Post a Task',
                                desc: 'Describe your task with budget, deadline, and full details.',
                                gradient: 'from-blue-500 to-cyan-500',
                                bg: 'bg-blue-50',
                            },
                            {
                                icon: <FiUsers />,
                                title: 'Receive Bids',
                                desc: 'Verified taskers submit competitive proposals for your job.',
                                gradient: 'from-emerald-500 to-teal-500',
                                bg: 'bg-emerald-50',
                            },
                            {
                                icon: <FiDollarSign />,
                                title: 'Compare & Choose',
                                desc: 'Review bids by cost, delivery time, and proposal quality.',
                                gradient: 'from-amber-500 to-orange-500',
                                bg: 'bg-amber-50',
                            },
                            {
                                icon: <FiShield />,
                                title: 'Get It Done',
                                desc: 'Assign the best tasker and track the work until completion.',
                                gradient: 'from-violet-500 to-fuchsia-500',
                                bg: 'bg-violet-50',
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 backdrop-blur-xl p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
                            >
                                <div className="absolute top-5 right-5 text-xs font-bold tracking-[0.2em] text-slate-200 group-hover:text-blue-400 transition">
                                    0{i + 1}
                                </div>

                                <div className={`w-16 h-16 rounded-2xl ${feature.bg} bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white text-2xl shadow-lg mb-6`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_35%,#4f46e5_70%,#7c3aed_100%)] text-white shadow-[0_20px_80px_rgba(37,99,235,0.25)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_30%)]" />
                        <div className="relative px-8 py-16 md:px-16 text-center">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                                Join thousands of users and taskers on ExLabour and experience a smarter way to get work done.
                            </p>

                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-blue-700 font-bold text-lg shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-slate-50"
                            >
                                Create Free Account
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
                        ExLabour
                    </p>
                    <p className="text-sm text-slate-500">
                        © 2026 ExLabour. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}