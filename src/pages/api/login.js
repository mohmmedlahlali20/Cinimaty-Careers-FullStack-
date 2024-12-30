import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "../config/mongodb";
import User from "../models/User";



export default async function handler(req, res) {
    if (req.method === "POST") {
        await dbConnect();
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email et mot de passe sont requis" });
        }

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ success: false, message: "Utilisateur introuvable avec cet email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ success: false, message: "Mot de passe incorrect" });
            }

            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
            );

            return res.status(200).json({
                success: true,
                message: "Connexion réussie",
                token,
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    role: user.role
                },
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Erreur interne du serveur" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
   
    
}
