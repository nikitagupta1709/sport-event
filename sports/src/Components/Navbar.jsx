import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
const links =[
    {
        path:"/",
        title:"HOME"
    },
    {
        path:"/login",
        title:"LOGIN"
    }
]
export const Navbar =()=>{
    
    return (
        <div style={{display: "flex",  alignItems: "center", justifyContent: "space-around", width: "100%", margin: "auto", background: "#cecece", padding: "20px"}}>
            {links.map( (link) => (
                <NavLink key={link.path}  to={link.path}
                    className={({isActive}) =>{
                        return isActive ? styles.active : styles.default;
                    }}
                >
                    {link.title}
                </NavLink>
            ))}
        </div>
    );
}