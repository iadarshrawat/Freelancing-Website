import User from "../models/user.model.js";
import bcrypt from "bcrypt"

export const register = async (req, res)=>{

    try {

        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password:hash,
        });
        
        await newUser.save();
        res.status(201).send({message:"success"})
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}
export const login = async (req, res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return res.status(404).send("user not exist");

        const isCorrect = bcrypt.compare(req.body.password ,user.password);
        if(!isCorrect) return res.status(404).send("wrong password or username");

        const {password, ...info} = user._doc;
        res.status(200).send(info);

    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}
export const logout = async (req, res)=>{
    
}