import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    getEvents();
  },[]);

  const getEvents = ()=>{
    axios.get("https://sport-event.onrender.com/events")
    .then(res=>setEvents(res.data.events))
    // .then(res=>console.log(res))
  }
  return (
    <Box>
      <Box p="20px">
      <Heading>Want to organize your own event?</Heading>
      <NavLink to="/events/create"><Button mt="20px" bgColor="black" color="white" px="20px" _hover={{bg:"black", color:"white"}}>Organize Event</Button></NavLink>
      </Box>
      <Heading>List of all the events gooing on</Heading>
      <Grid w="95%" m="auto" mt="20px" templateColumns='repeat(2, 1fr)' gap={4}>
        {events.map((event)=>(
            <NavLink to="/events/:id"><Box key={event._id} cursor="pointer" p="10px" boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" borderRadius="10px" bgColor="black" color="white" >
                <Image w="100%" src={event.category === "footbal" ? "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg" : "https://static.toiimg.com/thumb/msid-85096936,width-1200,height-900,resizemode-4/.jpg"} alt="" />
                <Heading>Event: {event.title}</Heading>
                <Text>Category: {event.category}</Text>
                <Text>Location: {event.location}</Text>
                <Text>Address: {event.address}</Text>
                <Text>Start Time: {event.startTime}</Text>
              </Box>
            </NavLink>
          ))}
      </Grid>
    </Box>

  )
}

export default Home
