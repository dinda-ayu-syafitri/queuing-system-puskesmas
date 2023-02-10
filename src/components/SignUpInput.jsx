import { Container, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
// import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';


function SignUpInput() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            const { error } = await supabase.auth.signUp({ email, password })
            if (error) {
                alert(error)
            } else {
                navigate('/login')
            }
        } catch (error) {
            alert(error)
        }


        // register({ email, password })


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
        </Container>

        // <Container mt={16}>
        //     <Formik
        //         initialValues={{
        //             email: '',
        //             password: ''
        //         }}
        //         onSubmit={
        //             async (values) => {
        //                 const { error } = await supabase.auth.signUp({ email: values.email, password: values.password })
        //                 if (error) {
        //                     alert(error)
        //                 }
        //             }}
        //     >
        //         {({ handleSubmit, errors, touched }) => (
        //             <form onSubmit={handleSubmit}>
        //                 <FormControl>
        //                     <FormLabel>Email Address</FormLabel>
        //                     <Field
        //                         as={Input}
        //                         id='email'
        //                         name='email'
        //                         type='email'
        //                     />
        //                 </FormControl>

        //                 <FormControl isInvalid={!!errors.password && touched.password}>
        //                     <FormLabel>Password</FormLabel>
        //                     <Field
        //                         as={Input}
        //                         id='password'
        //                         name='password'
        //                         type='password'
        //                     />
        //                 </FormControl>

        //                 <Button type='submit'>Submit</Button>
        //             </form>
        //         )}

        //     </Formik>

        // </Container>
    )
}

export default SignUpInput