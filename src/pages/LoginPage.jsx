import { Heading, Text, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import React from 'react'
import LoginInput from '../components/LoginInput'

function LoginPage() {
    return (
        <div>
            <Heading>This is a Login Page</Heading>
            <LoginInput />
            <Text>Don't have an an Account? Please <Link as={RouterLink} to='/register'>Sign Up</Link></Text>
        </div>
    )
}

export default LoginPage