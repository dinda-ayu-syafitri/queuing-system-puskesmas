import supabase from "../config/supabaseClient.js";
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = supabase.auth.getSession();

        setUser(session?.user ?? null);
        setLoading(false);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null)
            }
        )

        return () => {
            authListener.unsubscribe()
        }
    }, [])

    const login = async (email, password) => {
        const { user, error } = await supabase.auth.signIn({
            email,
            password,
        });
        if (error) throw error;
        setUser(user);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
      };

    const values = {
        user,
        login,
        logout,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}

export {AuthContext, AuthProvider}