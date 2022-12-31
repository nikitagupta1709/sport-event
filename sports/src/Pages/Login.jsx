import React from 'react'
import { Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import Register from './Register'

const Login = () => {
  return (
    <FormControl isRequired w="500px" m="auto" mt="40px" border="1px solid grey" p="30px" borderRadius="10px">
        <Heading mb="10px">Login form</Heading>
        <FormLabel mb="10px">Email</FormLabel>
        <Input mb="10px" placeholder='Email' type="email" />
        <FormLabel mb="10px">Password</FormLabel>
        <Input  placeholder='Password' type="password" />
        <Button my="20px">Login</Button>
        <Text>Don't have an account? <NavLink to="/register" element={<Register/>}>Register</NavLink></Text>
    </FormControl>
  )
}

export default Login
