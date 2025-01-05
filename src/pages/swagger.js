// swagger.js

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation cinimaty",
    version: "1.0.0",
  },
  paths: {
    "Register": {
      post: {
        summary: "Enregistrer un nouvel utilisateur",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  fullName: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  role: { type: "string" },
                },
                required: ["fullName", "email", "password"],
              },
            },
          },
        },
        responses: {
          201: { description: "Utilisateur créé avec succès" },
          400: { description: "Champs manquants ou utilisateur déjà existant" },
        },
      },
    },
    "Login": {
      post: {
        summary: "Connexion d'un utilisateur",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string" },
                  password: { type: "string" },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: { description: "Connexion réussie" },
          400: { description: "Champs manquants" },
          404: { description: "Utilisateur introuvable" },
          401: { description: "Mot de passe incorrect" },
        },
      },
    },
    "Get All Application": {
      get: {
        summary: "Récupérer toutes les applications",
        responses: {
          200: {
            description: "Liste des applications récupérées avec succès",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          nom: { type: "string" },
                          prenom: { type: "string" },
                          cv: { type: "string" },
                          letterCover: { type: "string" },
                          numeroTelephone: { type: "string" },
                          localisation: { type: "string" },
                          OfferName: { type: "string" },
                          condidateurName: { type: "string" },
                          condidateurEmail: { type: "string" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Erreur lors de la récupération des applications",
          },
        },
      },
    },
    "get All Users": {
      get: {
        summary: "recupiration utilisateur",
        responses: {
          description: "Liste des utilisateur récupérées avec succès",
          content: {
            200: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    data: {
                      type: "array",
                      items: {
                        type: 'objcet',
                        properties: {
                          fullName: "string",
                          email: "string",
                          password: "string",
                          role: "string"

                        }
                      }
                    }
                  }

                }
              }
            },
            500: {
              description: "Erreur lors de la récupération des applications",
            },
          }

        }

      }

    }
  },
};


export default swaggerDocument;
