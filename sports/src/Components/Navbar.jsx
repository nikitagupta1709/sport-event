import { NavLink } from "react-router-dom"
import {useSelector } from "react-redux"
import jwt_decode from "jwt-decode";
import "./Navbar.css"

export const Navbar =()=>{
    const {token} = useSelector((state)=>state)

    if(token!=="null"){
        var user = jwt_decode(token);
        console.log(user);
    }
    
    const handleLogout = ()=>{
        localStorage.setItem("token",null);
        alert("User logged out succesfully!");
        window.location.replace("/auth/login");
    }
    return (
        <div className='navbar'>
            <NavLink to="/">Home</NavLink>
            {
                token==="null" ? <NavLink to="/auth/login">Login</NavLink> : <NavLink onClick={handleLogout} >Logout</NavLink>
            }
            
        </div>
    );
}