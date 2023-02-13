import { Heading, Text, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import LoginInput from '../components/LoginInput'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'

function LoginPage() {
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.onAuthStateChange(
            async (event) => {
                if (event == "SIGNED_IN") {
                    navigate('/')
                }
            })
    }, [event])



    return (
        <div>
            <Heading>This is a Login Page</Heading>
            <LoginInput />
            <Text>Don't have an an Account? Please <Link as={RouterLink} to='/register'>Sign Up</Link></Text>
        </div>
    )
}

export default LoginPage