const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "API Next.js - cinimaty - Documentation",
      version: "1.0.0",
      description: "Documentation de l'API pour le projet Next.js",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Serveur de développement",
      },
    ],
    paths: {
      "/login": {
        post: {
          tags: ["Authentification"],
          summary: "Connexion utilisateur",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "mohammed80@gmail.com" },
                    password: { type: "string", example: "password80" },
                  },
                  required: ["email", "password"],
                },
              },
            },
          },
          responses: {
            200: {
              description: "Connexion réussie",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean", example: true },
                      message: { type: "string", example: "Connexion réussie" },
                      token: { type: "string", example: "to9ens" },
                      user: {
                        type: "object",
                        properties: {
                          id: { type: "string", example: "user_id" },
                          fullName: { type: "string", example: "John Doe" },
                          email: { type: "string", example: "utilisateur@example.com" },
                          role: { type: "string", example: "user" },
                        },
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Email ou mot de passe manquant",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean", example: false },
                      message: { type: "string", example: "Email et mot de passe sont requis" },
                    },
                  },
                },
              },
            },
            404: {
              description: "Utilisateur introuvable",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean", example: false },
                      message: { type: "string", example: "Utilisateur introuvable avec cet email" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erreur interne du serveur",
            },
          },
        },
      },
    },
  };


  export default swaggerDocument;
  
  