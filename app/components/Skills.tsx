"use client";

import React from 'react';
import {
    Bot,
    Sparkles,
    Network,
    Link2,
    Workflow,
    Plug,
    Monitor,
    Layers,
    Atom,
    FileCode2,
    Palette,
    Boxes,
    CreditCard,
    Server,
    Terminal,
    Zap,
    Database,
    Globe,
    Table2,
    Cog,
    Waypoints,
    Container,
    GitBranch,
    Triangle,
    Sheet,
    Calendar,
    Share2,
    Mail,
    Briefcase,
    Building,
    Rocket,
    Factory,
    Stethoscope,
    Users,
 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tool {
    name: string;
    icon: LucideIcon;
}

interface Category {
    title: string;
    description: string;
    icon: LucideIcon;
    tools: Tool[];
}

const CATEGORIES: Category[] = [
    {
        title: 'Agentic AI & Frameworks',
        description: 'Design patterns and SDKs for building autonomous, tool-using agents.',
        icon: Bot,
        tools: [
            { name: 'OpenAI Agents SDK', icon: Bot },
            { name: 'Claude Agent SDK', icon: Sparkles },
            { name: 'CrewAI', icon: Network },
            { name: 'LangChain', icon: Link2 },
            { name: 'LangGraph', icon: Workflow },
            { name: 'MCP', icon: Plug },
        ],
    },
    {
        title: 'Frontend',
        description: 'Interfaces for AI products — fast, typed, and production-ready.',
        icon: Monitor,
        tools: [
            { name: 'Next.js', icon: Layers },
            { name: 'React', icon: Atom },
            { name: 'TypeScript', icon: FileCode2 },
            { name: 'Tailwind CSS', icon: Palette },
            { name: 'Sanity', icon: Boxes },
            { name: 'Stripe', icon: CreditCard },
        ],
    },
    {
        title: 'Backend & Database',
        description: 'APIs and data layers that power the workflows behind the UI.',
        icon: Server,
        tools: [
            { name: 'Python', icon: Terminal },
            { name: 'FastAPI', icon: Zap },
            { name: 'PostgreSQL', icon: Database },
            { name: 'REST APIs', icon: Globe },
            { name: 'Supabase', icon: Table2 },
        ],
    },
    {
        title: 'Automation & Delivery',
        description: 'Wiring automations together and shipping them reliably.',
        icon: Cog,
        tools: [
            { name: 'n8n', icon: Waypoints },
            { name: 'Docker', icon: Container },
            { name: 'Git & GitHub', icon: GitBranch },
            { name: 'Vercel', icon: Triangle },
        ],
    },

    {
        title: 'Integration & APIs',
        description: 'Connecting AI agents to the tools and platforms teams already use.',
        icon: Plug,
        tools: [
            { name: 'Gemini API', icon: Sparkles },
            { name: 'Google Sheets API', icon: Sheet },
            { name: 'Google Calendar API', icon: Calendar },
            { name: 'Facebook API', icon: Share2 },
            { name: 'Gmail API', icon: Mail },
            { name: 'LinkedIn API', icon: Briefcase },
        ],
    },

    {
        title: 'Domain',
        description: 'Industries where I’ve built and shipped AI-powered solutions.',
        icon: Building,
        tools: [
            { name: 'AI for productivity', icon: Rocket },
            { name: 'Industrial solutions', icon: Factory },
            { name: 'Healthcare', icon: Stethoscope },
            { name: 'Agencies', icon: Users },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className='relative isolate overflow-hidden bg-[#1A0B2E] text-slate-300'
        >
            {/* Ambient background orbs — same vocabulary as the hero and footer */}
            <div className='hero-orb absolute -top-20 right-0 w-80 h-80 bg-[#9857D3]/8 rounded-full blur-[120px] pointer-events-none' />
            <div className='hero-orb-delayed absolute -bottom-24 -left-16 w-72 h-72 bg-[#c084fc]/6 rounded-full blur-[110px] pointer-events-none' />

            {/* Subtle grid texture */}
            <div className='absolute inset-0 pointer-events-none opacity-[0.035] hero-grid' />

            <div className='relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24'>

                {/* ---------------- Section heading ---------------- */}
                <div className='hero-fade-up flex flex-col items-center text-center'>
                    <span className='inline-flex items-center gap-2 rounded-full border border-[#9857D3]/25 bg-[#9857D3]/8 px-4 py-1.5 text-xs font-medium tracking-wide text-[#c084fc]'>
                        <Sparkles size={13} className='animate-pulse' />
                        Skills
                    </span>
                    <h2 className='mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
                        My{' '}
                        <span className='bg-linear-to-r from-[#9857D3] via-[#c084fc] to-[#9857D3] bg-clip-text text-transparent'>
                            Tech Stack
                        </span>
                    </h2>
                    <p className='mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base'>
                        The tools and frameworks I reach for to design, ship, and scale
                        production AI systems.
                    </p>
                </div>

                {/* ---------------- Category boxes ---------------- */}
                <div className='mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2'>
                    {CATEGORIES.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <div
                                key={category.title}
                                className='hero-fade-up relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#9857D3]/25 sm:p-7'
                                style={{ animationDelay: `${120 + categoryIndex * 90}ms` }}
                            >
                                {/* Inner top light line */}
                                <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent' />

                                {/* Box header */}
                                <div className='flex items-start gap-4'>
                                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#9857D3]/30 bg-[#9857D3]/12 text-[#c084fc]'>
                                        <CategoryIcon size={20} />
                                    </span>
                                    <div>
                                        <h3 className='text-lg font-semibold text-white'>
                                            {category.title}
                                        </h3>
                                        <p className='mt-1 text-sm leading-relaxed text-slate-400'>
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className='my-5 h-px bg-linear-to-r from-transparent via-white/8 to-transparent' />

                                {/* Tool tiles */}
                                <div className='flex flex-wrap gap-2.5'>
                                    {category.tools.map((tool, toolIndex) => {
                                        const ToolIcon = tool.icon;
                                        return (
                                            <div
                                                key={tool.name}
                                                className='skill-tile group/tool relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9857D3]/40 hover:bg-[#9857D3]/10'
                                                style={{
                                                    animationDelay: `${220 + categoryIndex * 90 + toolIndex * 60}ms`,
                                                }}
                                            >
                                                {/* Hover glow behind tile */}
                                                <span className='absolute inset-0 -z-10 bg-[#9857D3]/0 blur-lg transition-all duration-300 group-hover/tool:bg-[#9857D3]/15' />

                                                <span className='shrink-0 text-[#9857D3] transition-colors duration-300 group-hover/tool:text-[#c084fc]'>
                                                    <ToolIcon size={16} />
                                                </span>
                                                <span className='text-sm font-medium text-slate-200 transition-colors duration-300 group-hover/tool:text-white'>
                                                    {tool.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;
