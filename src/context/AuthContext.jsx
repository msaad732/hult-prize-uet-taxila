import { createContext, useContext, useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [teamData, setTeamData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register new team
    async function register(email, password, teamName) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create team document in Firestore
        await setDoc(doc(db, 'teams', user.uid), {
            teamName: teamName,
            leaderEmail: email,
            members: [],
            submissionURL: '',
            createdAt: serverTimestamp()
        });

        return user;
    }

    // Login
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    function logout() {
        return signOut(auth);
    }

    // Fetch team data
    async function fetchTeamData(uid) {
        const docRef = doc(db, 'teams', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setTeamData(docSnap.data());
            return docSnap.data();
        }
        return null;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setCurrentUser(user);
                if (user) {
                    await fetchTeamData(user.uid);
                } else {
                    setTeamData(null);
                }
            } catch (error) {
                console.error("Auth State Error:", error);
            } finally {
                setLoading(false);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        teamData,
        setTeamData,
        register,
        login,
        logout,
        fetchTeamData,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
