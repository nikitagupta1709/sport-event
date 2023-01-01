import {LOGIN, LOGOUT} from "./action"

const initState = {
    token : localStorage.getItem("token") || null,
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null
}

const loginReducer = (state=initState, {type, payload}) =>{
    switch(type){
        case LOGIN : {
            return {
                token:payload,
            };
        }
        case LOGOUT : {
            return {
                token:null,
            };
        }   
        default: {
            return state
        }
    }
} 
export default loginReducer; 