import { Link } from 'react-router-dom';

export default function Timeline() {
    const events = [
        {
            date: "January 2026",
            title: "Registration Opens",
            description: "Team registration begins. Form your team and submit your initial idea.",
            status: "current",
            icon: "📝"
        },
        {
            date: "February 8, 2026",
            title: "Registration Deadline",
            description: "Last date to register your team and submit pitch deck. 11:59 PM PST.",
            status: "upcoming",
            icon: "⏰"
        },
        {
            date: "February 2026",
            title: "Campus Round",
            description: "On-campus competition at UET Taxila. Top teams advance to regionals.",
            status: "upcoming",
            icon: "🏆"
        },
        {
            date: "April-May 2026",
            title: "Regional Summit",
            description: "Winners compete at the regional level with teams from other universities.",
            status: "upcoming",
            icon: "🌍"
        },
        {
            date: "August 2026",
            title: "Accelerator Program",
            description: "Selected teams join the Hult Prize Accelerator for mentorship and training.",
            status: "upcoming",
            icon: "🚀"
        },
        {
            date: "September 2026",
            title: "Global Finals",
            description: "Finals at the United Nations with a chance to win $1M seed capital.",
            status: "upcoming",
            icon: "🏅"
        }
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Header */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-6">
                        <span className="text-hult-magenta text-sm font-medium">Event Schedule</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Competition <span className="text-hult-magenta">Timeline</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Key dates and milestones for Hult Prize 2026
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hult-magenta via-hult-magenta/50 to-gray-800 transform md:-translate-x-1/2"></div>

                        {/* Events */}
                        <div className="space-y-12">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 border-4 border-black"
                                        style={{
                                            backgroundColor: event.status === 'current' ? '#E6007F' : '#374151'
                                        }}
                                    >
                                        {event.status === 'current' && (
                                            <div className="absolute inset-0 rounded-full bg-hult-magenta animate-ping opacity-50"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                        }`}>
                                        <div className={`card ${event.status === 'current' ? 'border-hult-magenta glow-magenta' : ''}`}>
                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                }`}>
                                                <span className="text-3xl">{event.icon}</span>
                                                <div>
                                                    <p className="text-hult-magenta font-semibold text-sm">
                                                        {event.date}
                                                    </p>
                                                    {event.status === 'current' && (
                                                        <span className="inline-block px-2 py-0.5 bg-hult-magenta/20 text-hult-magenta text-xs rounded-full">
                                                            Current Phase
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates Summary */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">
                        Key <span className="text-hult-magenta">Deadlines</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card text-center bg-gradient-to-br from-hult-magenta/20 to-transparent border-hult-magenta/30">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="text-lg font-bold text-white mb-2">Registration Deadline</h3>
                            <p className="text-2xl font-bold text-hult-magenta">Feb 8, 2026</p>
                            <p className="text-gray-500 text-sm mt-2">11:59 PM PST</p>
                        </div>

                        <div className="card text-center">
                            <div className="text-4xl mb-4">📤</div>
                            <h3 className="text-lg font-bold text-white mb-2">Pitch Deck Submission</h3>
                            <p className="text-2xl font-bold text-hult-magenta">Feb 8, 2026</p>
                            <p className="text-gray-500 text-sm mt-2">Along with registration</p>
                        </div>

                        <div className="card text-center">
                            <div className="text-4xl mb-4">🎤</div>
                            <h3 className="text-lg font-bold text-white mb-2">Campus Pitch Day</h3>
                            <p className="text-xl font-bold text-hult-magenta">TBA</p>
                            <p className="text-gray-500 text-sm mt-2">Will be announced later • UET Taxila Campus</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="card bg-gradient-to-r from-hult-magenta/20 to-pink-500/10 border-hult-magenta/30 p-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Don't Miss the Deadline!
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Register your team now and start working on your world-changing idea.
                        </p>
                        <Link to="/register" className="btn-primary">
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
