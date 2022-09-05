import { Request, Response } from "express";
import { checkExistUser, createUser } from '../controller/user_db'
import jwt = require('jsonwebtoken');

 export const signUp = async (req: Request, res: Response) => {
    

    const { email, password } = req.body;
    try {
        
        //Check for the existing user
        if (await checkExistUser(email)) {
            return res.status(400).json({ message: "User Already Exists" })
        }

        //Create user
        var result = await createUser(email, password);

        //Token Generate
        const token = jwt.sign({ email: result.email, id: result.id }, "123456")
        res.status(301).json({ user: result, token: token });
        console.log("______________Success_______________");

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" })
    }



}



const signIn = (req: Request, res: Response) => {

}



module.exports = { signUp, signIn }