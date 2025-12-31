import { Link } from 'react-router-dom';

export default function About() {
    const sdgs = [
        { number: 1, name: "No Poverty", color: "#E5243B" },
        { number: 2, name: "Zero Hunger", color: "#DDA63A" },
        { number: 3, name: "Good Health & Well-being", color: "#4C9F38" },
        { number: 4, name: "Quality Education", color: "#C5192D" },
        { number: 5, name: "Gender Equality", color: "#FF3A21" },
        { number: 6, name: "Clean Water & Sanitation", color: "#26BDE2" },
        { number: 7, name: "Affordable & Clean Energy", color: "#FCC30B" },
        { number: 8, name: "Decent Work & Economic Growth", color: "#A21942" },
        { number: 9, name: "Industry, Innovation & Infrastructure", color: "#FD6925" },
        { number: 10, name: "Reduced Inequalities", color: "#DD1367" },
        { number: 11, name: "Sustainable Cities & Communities", color: "#FD9D24" },
        { number: 12, name: "Responsible Consumption & Production", color: "#BF8B2E" },
        { number: 13, name: "Climate Action", color: "#3F7E44" },
        { number: 14, name: "Life Below Water", color: "#0A97D9" },
        { number: 15, name: "Life on Land", color: "#56C02B" },
        { number: 16, name: "Peace, Justice & Strong Institutions", color: "#00689D" },
        { number: 17, name: "Partnerships for the Goals", color: "#19486A" },
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-6">
                        <span className="text-hult-magenta text-sm font-medium">The Challenge</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-hult-magenta">Hult Prize</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        The Hult Prize is the world's largest engine for the launch of
                        for-good, for-profit startups emerging from university campuses.
                    </p>
                </div>
            </section>

            {/* What is Hult Prize */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What is <span className="text-hult-magenta">Hult Prize?</span>
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Founded in 2009 by Ahmad Ashkar, the Hult Prize Foundation partners with
                                the United Nations to present an annual year-long competition that crowd-sources
                                ideas from university students around the world.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                The challenge presents students with a pressing social issue, asking them
                                to develop innovative business solutions. The winning team receives USD $1,000,000
                                in seed capital to launch their social enterprise.
                            </p>
                            <div className="flex items-center space-x-4 text-hult-magenta">
                                <span className="text-4xl font-bold">15+</span>
                                <span className="text-gray-400">Years of Impact</span>
                            </div>
                        </div>
                        <div className="card p-8">
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-hult-magenta to-pink-500 rounded-2xl flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Global Movement</h3>
                                <p className="text-gray-400">
                                    Over 2,500+ universities participate annually from 150+ countries
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unlimited 2026 Theme */}
            <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                            UNLIMITED <span className="text-hult-magenta">2026</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            This year's theme focuses on bold, unlimited possibilities to address
                            global challenges through social entrepreneurship.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-white mb-2">Think Global</h3>
                            <p className="text-gray-400 text-sm">
                                Develop solutions that can scale across borders and create worldwide impact.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-5xl mb-4">💡</div>
                            <h3 className="text-xl font-bold text-white mb-2">Innovate Boldly</h3>
                            <p className="text-gray-400 text-sm">
                                Challenge conventional thinking and propose disruptive solutions.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-2">Launch Fast</h3>
                            <p className="text-gray-400 text-sm">
                                Build sustainable business models that can be implemented quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UN SDGs Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            UN Sustainable Development <span className="text-hult-magenta">Goals</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The Hult Prize challenges align with the United Nations' 17 SDGs,
                            focusing on solving humanity's most pressing problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
                        {sdgs.map((sdg) => (
                            <div
                                key={sdg.number}
                                className="aspect-square rounded-lg flex flex-col items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer"
                                style={{ backgroundColor: sdg.color }}
                            >
                                <span className="text-2xl md:text-3xl font-black text-white">{sdg.number}</span>
                                <span className="text-[8px] md:text-xs text-white/80 text-center mt-1 leading-tight">
                                    {sdg.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-8">
                        Your solution should address at least one of the UN SDGs
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to make an impact?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register" className="btn-primary">
                            Register Your Team
                        </Link>
                        <Link to="/guidelines" className="btn-secondary">
                            View Guidelines
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
