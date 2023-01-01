import{ useState } from 'react'
import { Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';
import Register from './Register'
import { useDispatch,useSelector } from "react-redux"
import { login } from '../Redux/Auth/action'
import axios from 'axios';

const initState ={
  email:"",
  password:""
}

const Login = () => {
  const [user, setUser] = useState(initState)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state)

  const handleChange = (e) =>{
    let {name, value} = e.target;
    setUser({...user, [name]:value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setLoading(true);
        let res = await axios.post("https://sport-event.onrender.com/auth/login",user)
        dispatch(login(res.data.data))
        localStorage.setItem("token",res.data.data);
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
    navigate("/")
  }

  if(loading){
    return <img className="loadingImg" src="https://gifimage.net/wp-content/uploads/2020/03/white-loading-gif-transparent-background-1.gif" alt=""/>
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired w="500px" m="auto" mt="40px" border="1px solid grey" p="30px" borderRadius="10px" >
          <Heading mb="10px">Login form</Heading>
          <FormLabel mb="10px">Email</FormLabel>
          <Input mb="10px" placeholder='Email' type="email"name="email" value={user.email} onChange={handleChange} />
          <FormLabel mb="10px">Password</FormLabel>
          <Input  placeholder='Password' type="password" name="password" value={user.password} onChange={handleChange} />
          <Button type='submit' my="20px">Login</Button>
          <Text>Don't have an account? <NavLink to="/auth/register" element={<Register/>}>Register</NavLink></Text>
      </FormControl>
    </form>
  )
}

export default Login
