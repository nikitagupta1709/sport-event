import { Box, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function SingleEvent() {
  const [events, setEvents] = React.useState([]);
  let {_id} = useParams();

  React.useEffect(()=>{
    getAllEvents();
  },[]);

  const getAllEvents = ()=>{
    axios.get(`https://sport-event.onrender.com/events/${_id}`)
    .then(res=>console.log(res));
  }
  return (
    <Box>
        <Image />
        <Heading></Heading>
        <Text>Event</Text>
        <Text>About</Text>
        <Text>Location</Text>
        <Box display="flex" flexDirection="row">
            <Text>Start Time:</Text>
            <Text>End Time: </Text>
        </Box>
        <Text>Address</Text>
        <Text>Player Limit</Text>
    </Box>
  )
}
