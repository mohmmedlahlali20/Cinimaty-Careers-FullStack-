const swaggerUi = require("swagger-ui-express");
import swaggerDocument from "../config/swagger";

const setupSwagger = swaggerUi.setup(swaggerDocument);

export default function handler(req, res) {
  swaggerUi.serve(req, res, () => setupSwagger(req, res));
}
