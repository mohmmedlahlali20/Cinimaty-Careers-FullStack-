import dbConnect from "../config/mongodb";
import User from "../models/User";
export default async function getAllUsers(req , res){
    if(req.method === "GET"){
        await dbConnect();
        try{
            const users = await User.find({});
            return res.status(200).json({success: true, data: users});
        }catch(error){
            console.error(error);
            return res.status(500).json({success: false, message: "Erreur interne du serveur"});
        }
    }
}