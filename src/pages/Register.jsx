import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="min-h-screen bg-black pt-20 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-6">
                        <span className="text-hult-magenta text-sm font-medium">
                            Registration Open
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Register Your <span className="text-hult-magenta">Team</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        Ready to change the world? Registration for Hult Prize 2026 is now open on the official global platform.
                    </p>
                </div>

                {/* Call to Action Card */}
                <div className="card p-10 bg-gradient-to-br from-hult-magenta/10 to-transparent border-hult-magenta/30">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Step 1: Official Registration
                    </h2>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                        All teams must register by filling the form below to be eligible for the competition.
                        Make sure you have your team details and pitch deck ready before starting.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        
                        {/* Register Button */}
                        <a
                            href="https://forms.gle/jLHv9UFq587mpCUT6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
                        >
                            Register Now
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>

                        {/* Guidelines */}
                        <Link
                            to="/guidelines"
                            className="btn-secondary w-full sm:w-auto justify-center"
                        >
                            Read Guidelines
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        Deadline:{' '}
                        <span className="text-hult-magenta font-semibold">
                            February 8, 2026
                        </span>
                    </p>
                </div>

                {/* Help Section */}
                <div className="mt-12 text-gray-400 text-sm">
                    <p>
                        Having trouble? Contact us at{' '}
                        <a
                            href="mailto:hultprizeuett@gmail.com"
                            className="text-hult-magenta hover:underline"
                        >
                            hultprizeuett@gmail.com
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
}

