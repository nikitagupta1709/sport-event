import bcrypt from "bcryptjs";
import userModel from '../models/user.model.js';
export const register = async(req,res)=> {
    try {
        const user = req.body
        let { name, email, password} = user;
        let userExists = await userModel.findOne({email});
        if(userExists){
            return res.status(400).send({
                status: false,
                message: 'User already exists'
            })
        }
        else{
            password = bcrypt.hashSync(password);
            let newUser = await userModel.create({
                name,email,password
            })
            newUser = newUser.toJSON();
            delete newUser.password;
            return res.send({
                message: "User Succesfully Registred!!",
                data: newUser
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
}

export const login = (req, res) => {
    res.send("login");
}