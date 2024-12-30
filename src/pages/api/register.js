import dbConnect from "pages/config/mongodb";
import User from "pages/models/User";
import bcrypt from "bcryptjs";

export default async function register(req, res) {
    if (req.method === "POST") {
        await dbConnect();
        const { fullName, email, password, role } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: "Tous les champs sont requis" });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "this email already exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({ fullName, email, password: hashedPassword, role });
            res.status(201).json({ success: true, user });
        } catch (error) {
            console.error(error);
            res.status(400).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
