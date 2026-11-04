"use client";

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
    name: string;
    link: string;
}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", link: "#home" },
        { name: "Skills", link: "#skills" },
        { name: "Product", link: "#product" },
        { name: "Projects", link: "#projects" },
        { name: "Certificate", link: "#certificate" },
        { name: "About", link: "#about" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <header className='sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-[#1A0B2E]/80 backdrop-blur-xl border-b border-white/6 text-slate-300 header-glow'>

            {/* Logo with shimmer effect */}
            <Link href="#home" className='group relative'>
                <h1 className='text-md sm:text-xl font-bold text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#9857D3] group-hover:via-[#c084fc] group-hover:to-[#9857D3]'>
                    Ahtesham Ahmed
                </h1>
                {/* Glow behind logo on hover */}
                <span className='absolute -inset-x-3 -inset-y-2 rounded-lg bg-[#9857D3]/0 blur-xl transition-all duration-500 group-hover:bg-[#9857D3]/10 -z-10' />
            </Link>

            {/* Desktop Menu */}
            <nav>
                <ul className='hidden md:flex items-center gap-1'>
                    {navItems.map((item, index) => (
                        <li key={item.name}>
                            <Link
                                href={item.link}
                                className='nav-link relative px-4 py-2 text-[15px] text-slate-300 font-medium rounded-lg transition-all duration-300 group inline-block'
                                style={{ animationDelay: `${index * 60}ms` }}
                            >
                                {/* Hover background pill */}
                                <span className='absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5 group-hover:shadow-[inset_0_0_20px_rgba(152,87,211,0.08)]' />

                                {/* Text with hover color */}
                                <span className='relative z-10 transition-colors duration-300 group-hover:text-white'>
                                    {item.name}
                                </span>

                                {/* Animated gradient underline */}
                                <span className='absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-linear-to-r from-transparent via-[#9857D3] to-transparent transition-all duration-400 group-hover:w-3/4 opacity-0 group-hover:opacity-100' />

                                {/* Glow dot on hover */}
                                <span className='absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9857D3] opacity-0 blur-[3px] transition-all duration-300 group-hover:opacity-80' />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger Button - animated lines */}
            <button
                className='md:hidden relative w-8 h-8 flex items-center justify-center group'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                <span className={`hamburger-line absolute h-0.5 w-5 bg-slate-300 rounded-full transition-all duration-300 group-hover:bg-[#c084fc] ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                <span className={`hamburger-line absolute h-0.5 w-5 bg-slate-300 rounded-full transition-all duration-300 group-hover:bg-[#c084fc] ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
                <span className={`hamburger-line absolute h-0.5 w-5 bg-slate-300 rounded-full transition-all duration-300 group-hover:bg-[#c084fc] ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
            </button>

            {/* Mobile Dropdown Menu with slide animation */}
            <div
                className={`absolute top-full left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-xl border-b border-white/6 md:hidden flex flex-col items-center py-0 gap-0 z-50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isMobileMenuOpen ? 'max-h-125 py-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {navItems.map((item, index) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='mobile-nav-link text-lg font-medium text-slate-300 py-3 px-6 w-full text-center transition-all duration-300 hover:text-white hover:bg-white/4 relative group'
                        style={{
                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                            opacity: isMobileMenuOpen ? 1 : 0,
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
                        }}
                    >
                        {item.name}
                        {/* Side accent on hover */}
                        <span className='absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 rounded-full bg-linear-to-b from-[#9857D3] to-[#c084fc] transition-all duration-300 group-hover:h-1/2' />
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default Header;