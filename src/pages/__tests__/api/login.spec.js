import { test, expect } from "@playwright/test";

test.describe("E2E Login Tests", () => {
    test("Successful login", async ({ request }) => {
        const response = await request.post("/api/login", {
            data: {
                email: "john.doe@example.com",
                password: "testpassword",
            },
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.success).toBe(true);
        expect(body.token).toBeDefined();
        expect(body.user.email).toBe("john.doe@example.com");
    });

    test("Invalid password", async ({ request }) => {
        const response = await request.post("/api/login", {
            data: {
                email: "john.doe@example.com",
                password: "wrongpassword",
            },
        });

        expect(response.status()).toBe(401);
        const body = await response.json();
        expect(body.success).toBe(false);
        expect(body.message).toBe("Mot de passe incorrect");
    });

    test("Non-existent email", async ({ request }) => {
        const response = await request.post("/api/login", {
            data: {
                email: "nonexistent@example.com",
                password: "somepassword",
            },
        });

        expect(response.status()).toBe(404);
        const body = await response.json();
        expect(body.success).toBe(false);
        expect(body.message).toBe("Utilisateur introuvable avec cet email");
    });
});
