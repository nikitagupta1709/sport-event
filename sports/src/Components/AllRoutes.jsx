import { Routes, Route} from "react-router-dom";
import Create from "../Pages/Create";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleEvent from "../Pages/SingleEvent";

export const AllProducts = ()=>{
    return (
        <Routes>
            <Route path="/" element ={<Home />}></Route>
            <Route path="/auth/login" element ={<Login />}></Route>
            <Route path="/auth/register" element ={<Register />}></Route>
            <Route path="/events/create" element ={<Create />}></Route>
            <Route path="/events/:id" element ={<SingleEvent />}></Route>
        </Routes>
    )
}