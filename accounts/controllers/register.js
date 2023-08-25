import { User } from "../models/user.js"

export const register_user = (db) =>{
    return async(req, res) =>{
        const {
            first_name,
            last_name,
            email,
            username,
            password, 
        } = req.body
        try {
            const user = await db.createUser(User, {
                first_name,
                last_name,
                username,
                email,
                password
            })
         
            res.status(200).json({
                userId: user._id
            })
        } catch (error) {
            res.status(500).json({error:{
                status: 500,
                message: error.message
            }})
        }
    }  
} 