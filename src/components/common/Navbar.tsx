import React, { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import myCV from '../../assets/resume-pdf/jasmat_parmar.pdf';
import { ProfileDataProps } from '../types/types';

const Navbar: React.FC<ProfileDataProps> = ({ProfileData}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('#home');

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: '#home', label: 'HOME' },
        { id: '#about', label: 'ABOUT' },
        { id: '#works', label: 'WORKS' },
        { id: '#service', label: 'SERVICE' },
        { id: '#contact', label: 'CONTACT' },
        // { id: '#blog', label: 'BLOG' },
    ];

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = myCV;
        link.download = 'jasmat_parmar.pdf'; // Set the filename for download
        link.click();
    }

    return (
        <div className={`fixed z-10 container mx-auto px-2 md:px-4 ${isScrolled ? 'bg-white py-0' : 'py-2 md:py-6'} transition-all duration-1000 ease-in-out`}>
            <div className="flex justify-between items-center">
                {/* Static Logo (Always visible) */}
                <div className="flex items-center space-x-2">
                    {/* <img src={logo} alt="Thames Logo" className="w-16 h-16" /> */}
                    <div className="w-12 h-12 m-2 rounded-full bg-[#4a9fd8] text-white flex items-center justify-center text-xl font-semibold">
                        {ProfileData.name.slice(0, 2).toUpperCase()}
                    </div>
                </div>
                <div className='flex mr-6 z-10'>

                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex items-center space-x-8 text-lg font-semibold ${isScrolled ? 'text-black' : ''}`}>
                        {links.map(link => (
                            <a
                                key={link.id}
                                href={link.id}
                                onClick={() => setActive(link.id)}
                                className={`hover:text-[#4a9fd8] ${active === link.id ? 'text-[#4a9fd8]' : ''
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button (text-based) */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl font-semibold text-[#4a9fd8]" >
                        <Bars3Icon className="size-6 text-blue-500" />
                    </button>

                    <button onClick={downloadCV} className="border border-[#4a9fd8] text-xs md:text-base text-[#4a9fd8] px-4 py-2 ml-4 rounded hover:bg-[#4a9fd8] hover:text-white transition">
                        DOWNLOAD CV
                    </button>
                    
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white text-black p-4 flex flex-col space-y-4 text-lg font-semibold">
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={link.id}
                            onClick={() => setActive(link.id)}
                            className={`hover:text-[#4a9fd8] ${active === link.id ? 'text-[#4a9fd8]' : ''
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
