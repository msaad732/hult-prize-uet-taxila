import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hult-magenta/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hult-magenta/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(230, 0, 127, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(230, 0, 127, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-8">
                        <span className="w-2 h-2 bg-hult-magenta rounded-full animate-pulse mr-2"></span>
                        <span className="text-hult-magenta text-sm font-medium">Registrations are now open!</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                        HULT PRIZE
                        <br />
                        <span className="text-hult-magenta">UET TAXILA</span>
                    </h1>

                    {/* Subheading */}
                    <div className="mb-8">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-wider">
                            UNLIMITED <span className="text-hult-magenta">2026</span>
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join the world's largest student competition for social entrepreneurship.
                        Create innovative solutions for the UN Sustainable Development Goals.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register" className="btn-primary text-lg px-10 py-4 glow-magenta">
                            Register Your Team
                        </Link>
                        <Link to="/about" className="btn-secondary text-lg px-10 py-4">
                            Learn More
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto">
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-hult-magenta">$1M+</p>
                            <p className="text-gray-500 text-sm mt-1">Global Prize</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-hult-magenta">300K+</p>
                            <p className="text-gray-500 text-sm mt-1">Participants</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-hult-magenta">150+</p>
                            <p className="text-gray-500 text-sm mt-1">Countries</p>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                        Why <span className="text-hult-magenta">Hult Prize?</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-hult-magenta/10 rounded-2xl flex items-center justify-center group-hover:bg-hult-magenta/20 transition-colors">
                                <svg className="w-8 h-8 text-hult-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Impact Driven</h3>
                            <p className="text-gray-400">
                                Create solutions that address real-world challenges and make a lasting difference.
                            </p>
                        </div>

                        <div className="card text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-hult-magenta/10 rounded-2xl flex items-center justify-center group-hover:bg-hult-magenta/20 transition-colors">
                                <svg className="w-8 h-8 text-hult-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
                            <p className="text-gray-400">
                                Connect with like-minded changemakers from around the world.
                            </p>
                        </div>

                        <div className="card text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-hult-magenta/10 rounded-2xl flex items-center justify-center group-hover:bg-hult-magenta/20 transition-colors">
                                <svg className="w-8 h-8 text-hult-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Real Funding</h3>
                            <p className="text-gray-400">
                                Win seed funding to launch your social enterprise and scale your impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="card bg-gradient-to-r from-hult-magenta/20 to-pink-500/10 border-hult-magenta/30 p-12 mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Change the World?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Form your team, develop your idea, and compete at the campus level for a chance
                            to advance to the regional and global finals.
                        </p>
                        <Link to="/register" className="btn-primary text-lg px-10 py-4">
                            Start Your Journey
                        </Link>
                    </div>

                {/* Sponsors Section */}
<div className="space-y-12">
    <h3 className="text-gray-500 uppercase tracking-[0.4em] text-sm font-bold">
        Official Event Sponsors
    </h3>
    
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        {/* Neon Consultants */}
        <div className="group transition-all duration-300 hover:scale-110">
            <img 
                src="/assets/Neon-Consultants-Pvt-Ltd-Logo.png" 
                alt="Neon Consultants" 
                className="h-16 md:h-24 w-auto object-contain transition-all"
            />
        </div>

        {/* Raasta */}
        <div className="group transition-all duration-300 hover:scale-110">
            <img 
                src="/assets/raasta.jpeg" 
                alt="Raasta" 
                className="h-20 md:h-28 w-auto object-contain rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all"
            />
        </div>

        {/* RED HR */}
        <div className="group transition-all duration-300 hover:scale-110">
            <img 
                src="/assets/RED-HR-LOGO.png" 
                alt="HR Overseas Education Specialist" 
                className="h-14 md:h-20 w-auto object-contain group-hover:brightness-125 transition-all"
            />
        </div>
    </div>
</div>
                </div>
            </section>
        </div>
    );
}


