const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/swagger");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const html = swaggerUi.generateHTML(swaggerDocument);
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
