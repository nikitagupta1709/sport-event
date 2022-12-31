import { Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

const Register = () => {
  return (
    <FormControl isRequired w="500px" m="auto" mt="40px" border="1px solid grey" p="30px" borderRadius="10px">
        <Heading mb="10px">Register form</Heading>
        <FormLabel mb="10px">First name</FormLabel>
        <Input mb="10px" placeholder='First name' type="text"/>
        <FormLabel mb="10px">Email</FormLabel>
        <Input mb="10px" placeholder='Email' type="email" />
        <FormLabel mb="10px">Password</FormLabel>
        <Input placeholder='Password' type="password" />
        <Button my="20px">Register</Button>
        <Text>Already have an account? <NavLink to="/login" element={<Login/>}>Login</NavLink></Text>
    </FormControl>
  )
}

export default Register
