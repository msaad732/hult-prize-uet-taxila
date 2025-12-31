import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-hult-magenta border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
