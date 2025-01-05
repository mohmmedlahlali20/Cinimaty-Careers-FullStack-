// pages/api/swagger.js
import swaggerDocument from "../swagger"

export default function handler(req, res) {
    res.status(200).json(swaggerDocument);
}
