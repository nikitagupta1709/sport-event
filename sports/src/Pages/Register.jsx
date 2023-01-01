import { Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Login from './Login'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initState ={
    name:"",
    email:"",
    password:""
}


const Register = () => {
  const [user, setUser] = useState(initState)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e) =>{
    let {name, value} = e.target;
    setUser({...user, [name]:value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await axios.post("https://sport-event.onrender.com/auth/register",user)
      setLoading(false)
    } catch (error) {
        console.log(error)
    }
    navigate("/auth/login")
  }

  if(loading){
    return <img className="loadingImg" src="https://gifimage.net/wp-content/uploads/2020/03/white-loading-gif-transparent-background-1.gif" alt=""/>
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired w="500px" m="auto" mt="40px" border="1px solid grey" p="30px" borderRadius="10px" >
          <Heading mb="10px">Register form</Heading>
          <FormLabel mb="10px">First name</FormLabel>
          <Input mb="10px" placeholder='First name' type="text" name="name" value={user.name} onChange={handleChange}/>
          <FormLabel mb="10px">Email</FormLabel>
          <Input mb="10px" placeholder='Email' type="email" name="email" value={user.email} onChange={handleChange}/>
          <FormLabel mb="10px">Password</FormLabel>
          <Input placeholder='Password' type="password" name="password" value={user.password} onChange={handleChange} />
          <Button type='submit' my="20px">Register</Button>
          <Text>Already have an account? <NavLink to="/auth/login" element={<Login/>}>Login</NavLink></Text>
      </FormControl>
    </form>
  )
}

export default Register
