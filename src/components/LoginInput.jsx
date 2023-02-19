import { Container, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import supabase from '../config/supabaseClient'

function LoginInput() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) {
                alert(error)

            } else {
                alert('Successfully logged in')
                console.log(data);
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container mt={16}>
            <form onSubmit={onSubmitHandler}>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        type='email'
                        variant='filled'
                        value={email}
                        onChange={onEmailChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type='password'
                        variant='filled'
                        value={password}
                        onChange={onPasswordChange}
                    />
                </FormControl>
                <Button type='submit'>Submit</Button>
            </form>
        </Container>, data

    )
}

export default LoginInput