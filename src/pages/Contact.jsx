import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Header */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-6">
                        <span className="text-hult-magenta text-sm font-medium">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contact <span className="text-hult-magenta">Us</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Have questions? We're here to help!
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Campus Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">
                                Campus <span className="text-hult-magenta">Information</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Campus Director */}
                                <div className="card">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-hult-magenta to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            EK
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Campus Director</p>
                                            <h3 className="text-xl font-bold text-white">Eman Khaliq</h3>
                                            <p className="text-hult-magenta text-sm">Hult Prize @ UET Taxila</p>
                                        </div>
                                    </div>

                                    {/* Contact Details */}
                                    <div className="space-y-3 pt-4 border-t border-gray-800">
                                        {/* Email */}
                                        <a
                                            href="mailto:hultprizeuett@gmail.com"
                                            className="flex items-center gap-3 text-gray-400 hover:text-hult-magenta transition-colors group"
                                        >
                                            <div className="w-8 h-8 bg-hult-magenta/10 rounded-lg flex items-center justify-center text-hult-magenta group-hover:bg-hult-magenta/20">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm">hultprizeuett@gmail.com</span>
                                        </a>

                                        {/* Instagram */}
                                        <a
                                            href="https://www.instagram.com/hultprizeuett"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-gray-400 hover:text-hult-magenta transition-colors group"
                                        >
                                            <div className="w-8 h-8 bg-hult-magenta/10 rounded-lg flex items-center justify-center text-hult-magenta group-hover:bg-hult-magenta/20">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm">@hultprizeuett</span>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href="https://www.linkedin.com/company/hult-prize-uet-taxila/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-gray-400 hover:text-hult-magenta transition-colors group"
                                        >
                                            <div className="w-8 h-8 bg-hult-magenta/10 rounded-lg flex items-center justify-center text-hult-magenta group-hover:bg-hult-magenta/20">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm">Hult Prize UET Taxila</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-hult-magenta/10 rounded-xl flex items-center justify-center text-hult-magenta flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                            <p className="text-gray-400">
                                                University of Engineering & Technology<br />
                                                Taxila, Punjab, Pakistan
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Venue */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-hult-magenta/10 rounded-xl flex items-center justify-center text-hult-magenta flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Event Venue</h3>
                                            <p className="text-gray-400">
                                                Will be communicated later<br />
                                                <span className="text-hult-magenta">UET Taxila Campus</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links & FAQ */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">
                                Quick <span className="text-hult-magenta">Links</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="card">
                                    <h3 className="text-lg font-bold text-white mb-4">Helpful Resources</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link to="/guidelines" className="flex items-center gap-2 text-gray-400 hover:text-hult-magenta transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                Competition Guidelines
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/timeline" className="flex items-center gap-2 text-gray-400 hover:text-hult-magenta transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                Event Timeline
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/register" className="flex items-center gap-2 text-gray-400 hover:text-hult-magenta transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                Team Registration
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.hultprize.org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-400 hover:text-hult-magenta transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Hult Prize Global Website
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* FAQ */}
                                <div className="card">
                                    <h3 className="text-lg font-bold text-white mb-4">Common Questions</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-hult-magenta font-medium text-sm">How do I register my team?</p>
                                            <p className="text-gray-400 text-sm mt-1">
                                                Click on "Register Team" in the navigation which will direct you to the official Hult Prize website for registration.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-hult-magenta font-medium text-sm">What is the required team size?</p>
                                            <p className="text-gray-400 text-sm mt-1">
                                                Teams must consist of 2 to 4 students. Students from different departments can form a team.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-hult-magenta font-medium text-sm">Do we need a finalized idea to register?</p>
                                            <p className="text-gray-400 text-sm mt-1">
                                                You should have a proposed idea and a preliminary pitch deck ready by the Feb 8 deadline.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Hult Prize */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="card text-center p-10 bg-gradient-to-br from-gray-900 to-black border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Learn More About <span className="text-hult-magenta">Hult Prize Global</span>
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            Visit the official Hult Prize website to learn more about the global competition,
                            past winners, and the impact of social entrepreneurship.
                        </p>
                        <a
                            href="https://www.hultprize.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Visit HultPrize.org
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

