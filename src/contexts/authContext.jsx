import supabase from "../config/supabaseClient.js";
import { useState, useContext, useEffect, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useProvideAuth()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    setUser(session?.user ?? null);
    setLoading(false);

    const login = async (email, password) => {
        const { user, error } = await supabase.auth.signIn({
            email,
            password,
        });
        if (error) throw error;
        setUser(user);

        return {error, user}
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
      };

      useEffect(() => {
        const user = supabase.auth.user()
        setUser(user)

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

    return {
        user,
        login,
        logout
    }
}

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const session = supabase.auth.getSession();

//         setUser(session?.user ?? null);
//         setLoading(false);

//         const { data: authListener } = supabase.auth.onAuthStateChange(
//             async (event, session) => {
//                 setUser(session?.user ?? null)
//             }
//         )

//         return () => {
//             authListener.unsubscribe()
//         }
//     }, [])

    

//     const values = {
//         user,
//         login,
//         logout,
//     }

//     return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

// }



// export {AuthContext, AuthProvider}