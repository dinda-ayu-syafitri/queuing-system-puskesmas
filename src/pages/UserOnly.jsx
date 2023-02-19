import { Heading } from '@chakra-ui/react'
import React from 'react'

function UserOnly() {
  return (
    <div>
        <h1>This is protected page, only for signed in user</h1>
    </div>
  )
}

export default UserOnly