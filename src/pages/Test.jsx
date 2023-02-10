import { Heading } from '@chakra-ui/react'
import React from 'react'
import supabase from '../config/supabaseClient'

function Test() {
  console.log(supabase);
  return (
    <div>
        <Heading>This is a Heading, for testing the Supabase connection</Heading>
    </div>
  )
}

export default Test