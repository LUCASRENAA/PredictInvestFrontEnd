import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="h-16 w-screen relative bg-white dark:bg-gray-800 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)] border-b border-gray-200 dark:border-gray-700">
            <div className="px-8 h-16 mx-auto flex items-center justify-between">
                {/* Logo and Nav Items */}
                <div className="flex items-center space-x-8">
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-black dark:bg-white mr-2"></div>
                        <span className="text-gray-800 dark:text-gray-100 text-xl font-bold">StockAnalytics</span>
                    </div>
                    <ul className="flex space-x-8">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/acoes" label="Ações" />
                        <NavItem href="/acoes_indicadores" label="Indicadores" />
                        <NavItem href="/about" label="Sobre" />
                        <NavItem href="/contact" label="Contato" />
                    </ul>
                </div>
                {/* Notifications and Avatar */}
                <div className="flex items-center space-x-4">
                    <div className="w-4 h-5 bg-black dark:bg-white"></div>
                    <img
                        className="w-8 h-8 rounded-full"
                        src="https://placehold.co/32x32"
                        alt="User Avatar"
                    />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
    return (
        <li className="text-gray-600 dark:text-gray-300 text-base font-normal hover:text-gray-800 dark:hover:text-gray-100">
            <Link href={href}>{label}</Link>
        </li>
    );
};

export default Navbar;
