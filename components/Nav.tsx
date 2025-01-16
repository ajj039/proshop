"use client";
import React,{useState} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen((prev )=>!prev);
    }
  return (
    <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800">Brand</a>
            <nav className="hidden md:flex space-x-6">
                <Link href="/" className={`text-gray-600 hover:bg-black hover:text-white transition hover:p-2 hover:rounded ${pathname === "/" && "text-blue-500 font-bold"}`}>Home</Link>
                <Link href="/about"  className={`text-gray-600 hover:bg-black hover:text-white transition hover:p-2 hover:rounded ${pathname === "/about" && "text-blue-500 font-bold"}`}>About</Link>
                <Link href="/services"  className={`text-gray-600 hover:bg-black hover:text-white transition hover:p-2 hover:rounded ${pathname === "/services" && "text-blue-500 font-bold"}`}>Services</Link>
                <Link href="/contact"  className={`text-gray-600 hover:bg-black hover:text-white transition hover:p-2 hover:rounded ${pathname === "/contact" && "text-blue-500 font-bold"}`}>Contact</Link>
                <Link href="/testimonals" className={`text-gray-600 hover:bg-black hover:text-white transition hover:p-2 hover:rounded ${pathname === "/testimonals" && "text-blue-500 font-bold"}`}>Testimonals</Link>

            </nav>
            <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none" id="menu-toggle">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
       {isMenuOpen && <div className="md:hidden" id="mobile-menu">
            <nav className="px-6 py-4 bg-white shadow-md">
                <Link href="/" className="block text-gray-600 py-2 hover:bg-black hover:text-white transition hover:p-2 hover:rounded">Home</Link>
                <Link href="/about" className="block text-gray-600 py-2 hover:bg-black hover:text-white transition hover:p-2 hover:rounded">About</Link>
                <Link href="/services" className="block text-gray-600 py-2 hover:bg-black hover:text-white transition hover:p-2 hover:rounded">Services</Link>
                <Link href="/contact" className="block text-gray-600 py-2 hover:bg-black hover:text-white transition hover:p-2 hover:rounded">Contact</Link>
            </nav>
        </div>}
    </header>
  )
}

export default Nav