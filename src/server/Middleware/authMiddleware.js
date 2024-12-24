import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
        return res.status(401).json({ success: false, message: "unothorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(403).json({ success: false, message: "invalid token" });
    }
}
