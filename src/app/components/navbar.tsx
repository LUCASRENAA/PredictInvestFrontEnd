import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <ul className="flex justify-around items-center p-4">
                <NavItem href="/" label="Home" />
                <NavItem href="/acoes" label="Ações" />
                <NavItem href="/acoes_indicadores" label="Indicadores" />
                <NavItem href="/about" label="Sobre" />
                <NavItem href="/contact" label="Contato" />
            </ul>
        </nav>
    );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
    return (
        <li className="nav-item text-white hover:text-gray-300">
            <Link href={href}>{label}</Link>
        </li>
    );
};

export default Navbar;
