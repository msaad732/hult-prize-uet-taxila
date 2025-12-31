import { Link } from 'react-router-dom';

export default function Guidelines() {
    const rules = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Team Size",
            description: "2 – 4 members",
            details: "Form a team with minimum 2 and maximum 4 members. All members must be currently enrolled students at UET Taxila.",
            important: true
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Pitch Duration",
            description: "Maximum 15 minutes",
            details: "Each team will have up to 15 minutes to deliver their pitch, followed by a Q&A session with the judges.",
            important: true
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Arrival Time",
            description: "30 minutes before scheduled slot",
            details: "Pitchers must arrive at least 30 minutes before their scheduled time to complete check-in and prepare.",
            important: true
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            title: "Content Policy",
            description: "NO copyrighted materials",
            details: "Strictly no copyrighted materials allowed in presentations. All content must be original or properly licensed.",
            important: true
        }
    ];

    const additionalGuidelines = [
        {
            title: "Pitch Deck Format",
            items: [
                "Submit in PDF or PPTX format only",
                "Maximum 15 slides recommended",
                "Include problem, solution, business model, and team slides"
            ]
        },
        {
            title: "Judging Criteria",
            items: [
                "Innovation & Creativity (25%)",
                "Social Impact Potential (25%)",
                "Business Viability (25%)",
                "Presentation & Team (25%)"
            ]
        },
        {
            title: "Eligibility",
            items: [
                "Must be currently enrolled students",
                "Valid UET Taxila student ID required",
                "One team per student only"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Header */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-hult-magenta/10 border border-hult-magenta/30 mb-6">
                        <span className="text-hult-magenta text-sm font-medium">Competition Rules</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Competition <span className="text-hult-magenta">Guidelines</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Please read all guidelines carefully before registering your team.
                    </p>
                </div>
            </section>

            {/* Important Rules Cards */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        <span className="text-hult-magenta">Critical</span> Rules
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {rules.map((rule, index) => (
                            <div
                                key={index}
                                className="card border-hult-magenta/30 hover:border-hult-magenta transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 bg-hult-magenta/10 rounded-xl flex items-center justify-center text-hult-magenta">
                                        {rule.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-xl font-bold text-white">{rule.title}</h3>
                                            {rule.important && (
                                                <span className="px-2 py-0.5 bg-hult-magenta/20 text-hult-magenta text-xs rounded-full">
                                                    Important
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-2xl font-bold text-hult-magenta mb-2">
                                            {rule.description}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {rule.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Guidelines */}
            <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Additional <span className="text-hult-magenta">Information</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {additionalGuidelines.map((section, index) => (
                            <div key={index} className="card">
                                <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-800">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                            <svg className="w-5 h-5 text-hult-magenta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warning Notice */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="card bg-red-500/10 border-red-500/30 p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-red-400 mb-2">Important Notice</h3>
                                <p className="text-gray-300">
                                    Teams that violate any of the above guidelines may face disqualification.
                                    Ensure all team members are aware of and comply with these rules.
                                    Decisions made by the judging panel are final.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Understood the rules?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register" className="btn-primary">
                            Register Your Team
                        </Link>
                        <Link to="/timeline" className="btn-secondary">
                            View Timeline
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
