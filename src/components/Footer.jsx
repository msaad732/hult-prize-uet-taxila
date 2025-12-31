import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-block">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                HULT <span className="text-hult-magenta">PRIZE</span>
                            </h3>
                            <p className="text-sm text-gray-400">UET Taxila Campus</p>
                        </Link>
                        <p className="mt-4 text-gray-500 text-sm max-w-md">
                            The Hult Prize challenges young people to solve the world's toughest issues through
                            social entrepreneurship. Join the movement. Change the world.
                        </p>
                        <div className="mt-6">
                            <p className="text-hult-magenta font-semibold text-lg">
                                UNLIMITED 2026
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-hult-magenta transition-colors text-sm">
                                    About The Challenge
                                </Link>
                            </li>
                            <li>
                                <Link to="/guidelines" className="text-gray-400 hover:text-hult-magenta transition-colors text-sm">
                                    Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link to="/timeline" className="text-gray-400 hover:text-hult-magenta transition-colors text-sm">
                                    Timeline
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-gray-400 hover:text-hult-magenta transition-colors text-sm">
                                    Register Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Campus Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">
                                <span className="text-gray-500">Campus Director:</span>
                                <br />
                                <span className="text-white font-medium">Eman Khaliq</span>
                            </li>
                            <li className="text-gray-400 text-sm">
                                <span className="text-gray-500">Location:</span>
                                <br />
                                <span className="text-white">UET Taxila, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Hult Prize at UET Taxila. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://www.hultprize.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-hult-magenta transition-colors text-sm"
                            >
                                Hult Prize Global
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
