import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Dashboard() {
    const { currentUser, teamData, setTeamData, logout, fetchTeamData } = useAuth();
    const navigate = useNavigate();

    // Member form state
    const [members, setMembers] = useState([
        { name: '', regID: '', dept: '' }
    ]);
    const [memberErrors, setMemberErrors] = useState([]);
    const [savingMembers, setSavingMembers] = useState(false);
    const [memberSuccess, setMemberSuccess] = useState(false);

    // Link submission state
    const [pitchDeckUrl, setPitchDeckUrl] = useState('');
    const [urlError, setUrlError] = useState('');
    const [savingLink, setSavingLink] = useState(false);
    const [linkSuccess, setLinkSuccess] = useState(false);

    // Regex for UET Taxila Registration ID: XX-XX-XXX (e.g., 22-CP-045)
    const regIDPattern = /^\d{2}-[A-Z]{2,3}-\d{2,3}$/;

    useEffect(() => {
        if (teamData?.members && teamData.members.length > 0) {
            setMembers(teamData.members);
        }
        if (teamData?.submissionURL) {
            setPitchDeckUrl(teamData.submissionURL);
        }
    }, [teamData]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Validate Registration ID format
    const validateRegID = (regID) => {
        return regIDPattern.test(regID.toUpperCase());
    };

    // Add new member row
    const addMember = () => {
        if (members.length < 4) {
            setMembers([...members, { name: '', regID: '', dept: '' }]);
        }
    };

    // Remove member row
    const removeMember = (index) => {
        if (members.length > 1) {
            const newMembers = members.filter((_, i) => i !== index);
            setMembers(newMembers);
        }
    };

    // Update member field
    const updateMember = (index, field, value) => {
        const newMembers = [...members];
        newMembers[index][field] = field === 'regID' ? value.toUpperCase() : value;
        setMembers(newMembers);

        // Clear error for this field
        if (memberErrors[index]) {
            const newErrors = [...memberErrors];
            newErrors[index] = { ...newErrors[index], [field]: '' };
            setMemberErrors(newErrors);
        }
    };

    // Save members to Firestore
    const saveMembers = async () => {
        setMemberSuccess(false);

        // Validate all members
        const errors = members.map((member, index) => {
            const err = {};
            if (!member.name.trim()) {
                err.name = 'Name is required';
            }
            if (!member.regID.trim()) {
                err.regID = 'Registration ID is required';
            } else if (!validateRegID(member.regID)) {
                err.regID = 'Invalid format. Use XX-XX-XXX (e.g., 22-CP-045)';
            }
            if (!member.dept.trim()) {
                err.dept = 'Department is required';
            }
            return err;
        });

        const hasErrors = errors.some(err => Object.keys(err).length > 0);
        if (hasErrors) {
            setMemberErrors(errors);
            return;
        }

        // Check minimum 2 members
        const filledMembers = members.filter(m => m.name && m.regID && m.dept);
        if (filledMembers.length < 2) {
            alert('You must have at least 2 team members.');
            return;
        }

        setSavingMembers(true);

        try {
            const teamRef = doc(db, 'teams', currentUser.uid);
            await updateDoc(teamRef, {
                members: filledMembers
            });
            await fetchTeamData(currentUser.uid);
            setMemberSuccess(true);
        } catch (error) {
            console.error('Error saving members:', error);
            alert('Failed to save team members. Please try again.');
        } finally {
            setSavingMembers(false);
        }
    };

    // Save Pitch Deck Link
    const saveLink = async (e) => {
        e.preventDefault();
        setUrlError('');
        setLinkSuccess(false);

        if (!pitchDeckUrl.trim()) {
            setUrlError('Please enter a URL.');
            return;
        }

        try {
            new URL(pitchDeckUrl); // Validate URL format
        } catch (_) {
            setUrlError('Please enter a valid URL (e.g., https://drive.google.com/...).');
            return;
        }

        setSavingLink(true);

        try {
            const teamRef = doc(db, 'teams', currentUser.uid);
            await updateDoc(teamRef, {
                submissionURL: pitchDeckUrl.trim()
            });

            await fetchTeamData(currentUser.uid);
            setLinkSuccess(true);
        } catch (error) {
            console.error('Error saving link:', error);
            setUrlError('Failed to save link. Please try again.');
        } finally {
            setSavingLink(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-hult-magenta text-sm font-medium mb-1">Team Dashboard</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            {teamData?.teamName || 'Your Team'}
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Logged in as {currentUser?.email}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-gray-400 hover:text-white text-sm border border-gray-700 px-4 py-2 rounded-lg hover:border-gray-500 transition-all self-start"
                    >
                        Logout
                    </button>
                </div>

                {/* Team Overview Card */}
                <div className="card mb-8 border-hult-magenta/30">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-hult-magenta to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                            {teamData?.teamName?.charAt(0)?.toUpperCase() || 'T'}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">{teamData?.teamName}</h2>
                            <p className="text-gray-400">
                                {teamData?.members?.length || 0} member(s) registered
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {teamData?.leaderEmail}
                        </div>
                        <div className="flex items-center gap-2">
                            {teamData?.submissionURL ? (
                                <span className="flex items-center gap-1 text-green-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Pitch Deck Submitted
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 text-yellow-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Pitch Deck Pending
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Member Management Section */}
                <div className="card mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white">Team Members</h3>
                            <p className="text-gray-500 text-sm">Add 2-4 members including yourself</p>
                        </div>
                        {members.length < 4 && (
                            <button
                                onClick={addMember}
                                className="text-hult-magenta hover:text-pink-400 text-sm font-medium flex items-center gap-1"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Member
                            </button>
                        )}
                    </div>

                    {memberSuccess && (
                        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <p className="text-green-400 text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Team members saved successfully!
                            </p>
                        </div>
                    )}

                    <div className="space-y-6">
                        {members.map((member, index) => (
                            <div key={index} className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-gray-400">Member {index + 1}</span>
                                    {members.length > 1 && (
                                        <button
                                            onClick={() => removeMember(index)}
                                            className="text-red-400 hover:text-red-300 text-sm"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={member.name}
                                            onChange={(e) => updateMember(index, 'name', e.target.value)}
                                            className="input-field text-sm"
                                            placeholder="John Doe"
                                        />
                                        {memberErrors[index]?.name && (
                                            <p className="text-red-400 text-xs mt-1">{memberErrors[index].name}</p>
                                        )}
                                    </div>

                                    {/* Registration ID */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">
                                            Registration ID
                                        </label>
                                        <input
                                            type="text"
                                            value={member.regID}
                                            onChange={(e) => updateMember(index, 'regID', e.target.value)}
                                            className="input-field text-sm uppercase"
                                            placeholder="22-CP-045"
                                        />
                                        {memberErrors[index]?.regID && (
                                            <p className="text-red-400 text-xs mt-1">{memberErrors[index].regID}</p>
                                        )}
                                        {!memberErrors[index]?.regID && (
                                            <p className="text-gray-600 text-xs mt-1">Format: XX-XX-XXX</p>
                                        )}
                                    </div>

                                    {/* Department */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            value={member.dept}
                                            onChange={(e) => updateMember(index, 'dept', e.target.value)}
                                            className="input-field text-sm"
                                            placeholder="Computer Engineering"
                                        />
                                        {memberErrors[index]?.dept && (
                                            <p className="text-red-400 text-xs mt-1">{memberErrors[index].dept}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={saveMembers}
                        disabled={savingMembers}
                        className="mt-6 btn-primary w-full md:w-auto disabled:opacity-50"
                    >
                        {savingMembers ? 'Saving...' : 'Save Team Members'}
                    </button>
                </div>

                {/* Pitch Deck Submission Section (Link) */}
                <div className="card">
                    <h3 className="text-xl font-bold text-white mb-2">Pitch Deck Submission</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        Upload your pitch deck to Google Drive, Dropbox, or OneDrive and paste the shareable link below.
                        <br />
                        <span className="text-hult-magenta/80 text-xs">Make sure the link is accessible to anyone with the link (Public).</span>
                    </p>

                    {urlError && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                            <p className="text-red-400 text-sm">{urlError}</p>
                        </div>
                    )}

                    {linkSuccess && (
                        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <p className="text-green-400 text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Link saved successfully!
                            </p>
                        </div>
                    )}

                    <form onSubmit={saveLink} className="space-y-4">
                        <div>
                            <label htmlFor="pitchDeckUrl" className="block text-sm font-medium text-gray-300 mb-2">
                                Pitch Deck Link
                            </label>
                            <input
                                type="url"
                                id="pitchDeckUrl"
                                value={pitchDeckUrl}
                                onChange={(e) => setPitchDeckUrl(e.target.value)}
                                className="input-field"
                                placeholder="https://drive.google.com/file/d/..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={savingLink}
                            className="btn-primary w-full md:w-auto disabled:opacity-50"
                        >
                            {savingLink ? 'Saving...' : 'Save Link'}
                        </button>
                    </form>

                    {/* Current Submission Display */}
                    {teamData?.submissionURL && (
                        <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Current Submission:</p>
                                <a
                                    href={teamData.submissionURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-hult-magenta hover:underline flex items-center gap-2 font-medium truncate max-w-[200px] md:max-w-md"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Link
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
