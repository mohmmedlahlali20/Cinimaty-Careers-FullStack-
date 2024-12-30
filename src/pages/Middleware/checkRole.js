export function authorizeRole(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ success: false, message: "Utilisateur non authentifié" });
    }

    switch (req.user.role) {
        case "admin":
            return res.redirect("/dashboard");
        case "user":
            return res.redirect("/offers"); 
        default:
            return res.status(403).json({ success: false, message: "Accès refusé" });
    }
}
