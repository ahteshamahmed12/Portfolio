"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
    Code,
    Briefcase,
    Mail,
    MapPin,
    Phone,
    Heart,
    ArrowUpRight,
    Send,
} from 'lucide-react';

interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

interface FooterLink {
    name: string;
    href: string;
}

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const socialLinks: SocialLink[] = [
        { name: 'GitHub', href: 'https://github.com/ahteshamahmed12', icon: <Code size={20} /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahtesham-ahmed-qadri-a7574125a/', icon: <Briefcase size={20} /> },
        
        { name: 'Email', href: 'ahteshamahmed402@gmail.com', icon: <Mail size={20} /> },
    ];

    const quickLinks: FooterLink[] = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificate', href: '#certificate' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='relative bg-[#1A0B2E] text-slate-300 overflow-hidden'>

            {/* Top glow line — mirrors header's bottom glow */}
            <div className='footer-glow-top' />

            {/* Ambient background orbs */}
            <div className='absolute top-10 -left-20 w-72 h-72 bg-[#9857D3]/4 rounded-full blur-[100px] pointer-events-none footer-orb' />
            <div className='absolute bottom-10 -right-20 w-60 h-60 bg-[#c084fc]/3 rounded-full blur-[80px] pointer-events-none footer-orb-delayed' />

            {/* Main footer content */}
            <div className='relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'>

                    {/* Brand column */}
                    <div className='footer-fade-in space-y-5'>
                        <Link href="#home" className='group inline-block'>
                            <h2 className='text-2xl font-bold text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#9857D3] group-hover:via-[#c084fc] group-hover:to-[#9857D3]'>
                                Ahtesham Ahmed
                            </h2>
                        </Link>
                        <p className='text-sm text-slate-400 leading-relaxed max-w-xs'>
                            Crafting digital experiences with clean code and creative design. Always learning, always building.
                        </p>

                        {/* Social icons */}
                        <div className='flex items-center gap-3 pt-2'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={social.name}
                                    className='social-icon group relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/8 bg-white/3 text-slate-400 transition-all duration-300 hover:text-white hover:border-[#9857D3]/40 hover:bg-[#9857D3]/10 hover:scale-110 hover:-translate-y-0.5'
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    {social.icon}
                                    {/* Glow behind icon */}
                                    <span className='absolute inset-0 rounded-xl bg-[#9857D3]/0 blur-lg transition-all duration-300 group-hover:bg-[#9857D3]/20 -z-10' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links column */}
                    <div className='footer-fade-in' style={{ animationDelay: '150ms' }}>
                        <h3 className='text-sm font-semibold text-white uppercase tracking-widest mb-5 flex items-center gap-2'>
                            <span className='w-8 h-px bg-linear-to-r from-[#9857D3] to-transparent' />
                            Quick Links
                        </h3>
                        <ul className='space-y-3'>
                            {quickLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className='group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1'
                                        style={{ transitionDelay: `${index * 30}ms` }}
                                    >
                                        <span className='w-0 h-px bg-[#9857D3] transition-all duration-300 group-hover:w-3 rounded-full' />
                                        {link.name}
                                        <ArrowUpRight
                                            size={12}
                                            className='opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0'
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className='footer-fade-in' style={{ animationDelay: '300ms' }}>
                        <h3 className='text-sm font-semibold text-white uppercase tracking-widest mb-5 flex items-center gap-2'>
                            <span className='w-8 h-px bg-linear-to-r from-[#9857D3] to-transparent' />
                            Get In Touch
                        </h3>
                        <ul className='space-y-4'>
                            <li className='group flex items-start gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300'>
                                <Mail size={16} className='mt-0.5 text-[#9857D3]/60 transition-colors duration-300 group-hover:text-[#9857D3]' />
                                <span>ahteshamahmed402@gmail.com</span>
                            </li>
                            <li className='group flex items-start gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300'>
                                <Phone size={16} className='mt-0.5 text-[#9857D3]/60 transition-colors duration-300 group-hover:text-[#9857D3]' />
                                <span>+92 318 2158057</span>
                            </li>
                            <li className='group flex items-start gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-slate-300'>
                                <MapPin size={16} className='mt-0.5 text-[#9857D3]/60 transition-colors duration-300 group-hover:text-[#9857D3]' />
                                <span>Karachi, Pakistan</span>
                            </li>
                        </ul>

                        {/* Mini CTA */}
                        <a
                            href='mailto:hello@example.com'
                            className='group inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium rounded-xl border border-[#9857D3]/30 bg-[#9857D3]/8 text-[#c084fc] transition-all duration-300 hover:bg-[#9857D3]/20 hover:border-[#9857D3]/50 hover:shadow-[0_0_20px_rgba(152,87,211,0.15)] hover:scale-[1.02]'
                        >
                            <Send size={14} className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                            Say Hello
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className='mt-14 mb-6 h-px bg-linear-to-r from-transparent via-white/8 to-transparent' />

                {/* Bottom bar */}
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500'>
                    <p className='flex items-center gap-1.5'>
                        © {currentYear} Ahtesham Ahmed. Built with
                        <Heart size={12} className='text-[#9857D3] animate-pulse' />
                    </p>
                    <button
                        onClick={scrollToTop}
                        className='group flex items-center gap-2 text-slate-500 transition-all duration-300 hover:text-[#c084fc]'
                        aria-label='Back to top'
                    >
                        Back to top
                        <span className='flex items-center justify-center w-6 h-6 rounded-md border border-white/8 bg-white/3 transition-all duration-300 group-hover:border-[#9857D3]/30 group-hover:bg-[#9857D3]/10 group-hover:-translate-y-0.5'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className='transition-transform duration-300 group-hover:-translate-y-0.5'>
                                <path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
