import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,  
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true
    },
    role: {
        type: String, 
        enum: ['admin', 'user'],
        default: 'user',
        required: true,
    }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
