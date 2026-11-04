"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Briefcase, Sparkles, Terminal } from 'lucide-react';

/* ---------------------------------------------------------------
   Edit these two values to personalise the hero
   --------------------------------------------------------------- */
const LINKEDIN_URL = 'https://www.linkedin.com/in/ahtesham-ahmed-qadri-a7574125a/';
const ROLES = ['Agentic AI Engineer', 'Forward Deployed Engineer','Full Stack AI Engineer'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    // Cycle the job titles one after the other
    useEffect(() => {
        const id = setInterval(() => {
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }, 2800);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            id="home"
            className='relative isolate overflow-hidden bg-[#1A0B2E] text-slate-300'
        >
            {/* Ambient background orbs — same vocabulary as the footer */}
            <div className='hero-orb absolute -top-24 -left-24 w-80 h-80 bg-[#9857D3]/8 rounded-full blur-[120px] pointer-events-none' />
            <div className='hero-orb-delayed absolute top-1/3 -right-24 w-72 h-72 bg-[#c084fc]/6 rounded-full blur-[110px] pointer-events-none' />
            <div className='absolute bottom-0 left-1/3 w-96 h-40 bg-[#9857D3]/5 rounded-full blur-[100px] pointer-events-none' />

            {/* Subtle grid texture */}
            <div className='absolute inset-0 pointer-events-none opacity-[0.035] hero-grid' />

            <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 py-16 lg:flex-row lg:items-center lg:gap-10 lg:py-24'>

                {/* ---------------- LEFT — Intro (w-1/2) ---------------- */}
                <div className='hero-fade-up w-full lg:w-1/2'>
                    {/* Eyebrow badge */}
                    <span className='inline-flex items-center gap-2 rounded-full border border-[#9857D3]/25 bg-[#9857D3]/8 px-4 py-1.5 text-xs font-medium tracking-wide text-[#c084fc]'>
                        <Sparkles size={13} className='animate-pulse' />
                        Founder · Meblost AI Automation
                    </span>

                    {/* Greeting */}
                    <h1 className='mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl'>
                        Hi, I&apos;m{' '}
                        <span className='bg-linear-to-r from-[#9857D3] via-[#c084fc] to-[#9857D3] bg-clip-text text-transparent'>
                            Ahtesham Ahmed
                        </span>
                    </h1>

                    {/* Rotating role — one title at a time */}
                    <div className='mt-5 flex min-h-11 flex-wrap items-baseline gap-x-3 gap-y-1 sm:min-h-12'>
                        <span className='text-lg font-medium text-slate-400 sm:text-xl'>
                            A
                        </span>
                        <span
                            key={roleIndex}
                            className='role-flip inline-block bg-linear-to-r from-[#9857D3] via-[#c084fc] to-[#9857D3] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl'
                        >
                            {ROLES[roleIndex]}
                        </span>
                    </div>

                    {/* Sub-heading */}
                    <p className='mt-3 flex items-center gap-2 text-sm font-medium tracking-wide text-slate-400 sm:text-base'>
                        <Terminal size={15} className='text-[#9857D3]' />
                        Co-Founder of{' '}
                        <span className='font-semibold text-slate-200'>Meblost</span>
                    </p>

                    {/* Description */}
                    <p className='mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base'>
                    I'm a full-stack AI engineer or Forward Deployed Engineer specializing in AI-powered products, from
                    LLM-driven automations to voice and chat assistants. I build end to end:
                    Next.js and TypeScript frontends, Python + FastAPI backends with PostgreSQL database
                    , and agent workflows
                    with the OpenAI and Claude Agent SDKs. The result is production-ready,
                    scalable software for industries, productivity, and business teams.
                    </p>

                    {/* ---------------- Buttons ---------------- */}
                    <div className='mt-9 flex flex-col gap-4 sm:flex-row sm:items-center'>
                        {/* Primary — View My Projects */}
                        <a
                            href='#projects'
                            className='btn-3d group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#9857D3] to-[#7c3aed] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(152,87,211,0.6)]'
                        >
                            {/* Sheen sweep on hover */}
                            <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
                            <span className='relative z-10'>View My Projects</span>
                            <ArrowUpRight
                                size={17}
                                className='relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                            />
                        </a>

                        {/* Secondary — Connect on LinkedIn */}
                        <a
                            href={LINKEDIN_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-3d group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-[#9857D3]/45 hover:bg-[#9857D3]/10 hover:text-white'
                        >
                            <Briefcase
                                size={17}
                                className='text-[#9857D3] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110'
                            />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                {/* ---------------- RIGHT — Image (w-1/2) ---------------- */}
                <div
                    className='hero-fade-up w-full lg:w-1/2 flex justify-center lg:justify-end'
                    style={{ animationDelay: '150ms' }}
                >
                    <div className='hero-float relative w-[78%] max-w-105 sm:w-[65%] lg:w-full'>
                        {/* Glow ring behind the card */}
                        <div className='absolute inset-0 -z-10 rounded-4xl bg-[#9857D3]/20 blur-3xl hero-glow-pulse' />

                        {/* Rotating conic border */}
                        <div className='hero-spin-ring absolute inset-[-1.5px] -z-10 rounded-4xl' />

                        {/* 3D tilt card */}
                        <div className='hero-tilt group relative aspect-square overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 backdrop-blur-sm'>
                            {/* Inner top light */}
                            <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent' />

                            {/* Image */}
                            <Image
                                src='/myimage.png'
                                alt='Abu Bakar'
                                fill
                                sizes='(max-width: 1024px) 70vw, 420px'
                                preload
                                className='scale-95 object-contain transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-100 hero-image-pop'
                            />
                        </div>

                        {/* Floating accent chip */}
                        <div className='absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-[#1A0B2E]/90 px-4 py-2.5 text-xs font-medium text-slate-300 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.8)] hero-chip'>
                            <span className='relative flex h-2 w-2'>
                                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70' />
                                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
                            </span>
                            Open to opportunities
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
