import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Guidelines', path: '/guidelines' },
        { name: 'Timeline', path: '/timeline' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-xl md:text-2xl font-bold text-white">
                            HULT <span className="text-hult-magenta">PRIZE</span>
                        </span>
                        <span className="hidden sm:block text-xs text-gray-400 border-l border-gray-600 pl-2 ml-2">
                            UET Taxila
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                    ? 'text-hult-magenta bg-hult-magenta/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Register Button */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/register" className="btn-primary text-sm py-2 px-4">
                            Register Team
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                    ? 'text-hult-magenta bg-hult-magenta/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t border-gray-800 mt-2 pt-2">
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-hult-magenta font-medium"
                            >
                                Register Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
