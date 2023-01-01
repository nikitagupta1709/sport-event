import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initState = {
    title:"",
    desc:"",
    startTime:"",
    endTime:"",
    players_limit:"",
    address:"",
    location:"",
    picture:"",
    category:"",
}
export default function Create() {
    const [user, setUser] = React.useState(initState)
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value });
      }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await axios.post("https://sport-event.onrender.com/events/create",user)
            setLoading(false)
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
        <FormControl isRequired w="500px" m="auto" mt="40px" border="1px solid grey" p="30px" borderRadius="10px">
            <Heading mb="10px">Organize your own Event</Heading>

            <FormLabel mb="10px">Enter Title</FormLabel>
            <Input mb="10px" placeholder='Enter Title' type="text" name="title" value={user.title} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Description</FormLabel>
            <Input mb="10px" placeholder='Enter Description' type="text" name="desc" value={user.desc} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Start Time</FormLabel>
            <Input mb="10px" placeholder='Enter Start Time' type="text" name="startTime" value={user.startTime} onChange={handleChange}/>

            <FormLabel mb="10px">Enter End Time</FormLabel>
            <Input mb="10px" placeholder='Enter End Time' type="text"  name="endTime" value={user.endTime} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Location</FormLabel>
            <Input mb="10px" placeholder='Enter Location' type="text" name="players_limit" value={user.players_limit} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Address</FormLabel>
            <Input mb="10px" placeholder='Enter Address' type="text" name="address" value={user.address} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Player Limit</FormLabel>
            <Input mb="10px" placeholder='Enter Player Limit' type="text" name="location" value={user.location} onChange={handleChange}/>

            <FormLabel mb="10px">Enter Category</FormLabel>
            <Input mb="10px" placeholder='Enter Category' type="text" name="picture" value={user.picture} onChange={handleChange}/>

            <FormLabel mb="10px">Image Url</FormLabel>
            <Input mb="10px" placeholder='Enter Image Url' type="text" name="category" value={user.category} onChange={handleChange}/>

            <Button type="submit">Organize Event</Button>
        </FormControl>
    </form>
  )
}
