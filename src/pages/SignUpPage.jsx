import { Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import SignUpInput from '../components/SignUpInput'
import { NavLink as RouterLink } from 'react-router-dom'

function SignUp() {

  // async function onRegisterHandler(user) {
  //   const { error } = await register(user)
  //   if (!error) {
  //     navigate('/login')
  //   }
  // }

  return (
    <div>
      <Heading>This is Sign Up Page</Heading>
      <SignUpInput />
      <Text>Have an account already? <Link as={RouterLink} to='/login'>Login</Link> </Text>
    </div>
  )
}

export default SignUp