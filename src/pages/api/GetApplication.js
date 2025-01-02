import Application from "../models/Application";
import dbConnect from "../config/mongodb";




export default async function getApplication(req, res){
    if(req.method === "GET"){
        await dbConnect();
        try {
            const Applications = await Application.find({}).exec()
            
            return res.status(200).json({success: true, data: Applications})
        } catch (err) {
            console.log('fetch Application Error', err)
            return res.status(500).json({success: false, message: "error fetch Application"})
            
        }
    }
}