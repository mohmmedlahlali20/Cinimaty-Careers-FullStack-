import { test, expect } from '@playwright/test';

test.describe('E2E Register Tests', () => {

    test('Successful registration', async ({ request }) => {
        const response = await request.post('http://localhost:3000/api/register', {
            data: {
                fullName: 'John Doe',
                email: 'john.doe85@example.com',
                password: 'testpassword',
                role: 'user',
            },
        });
    
        const body = await response.json();
        console.log(body); 
    
        expect(response.status()).toBe(201);
        expect(body.success).toBe(true);
        expect(body.user).toHaveProperty('fullName', 'John Doe');
        expect(body.user).toHaveProperty('email', 'john.doe85@example.com');
        expect(body.user).toHaveProperty('role', 'user');
    });
    

  test('Registration with missing fields', async ({ request }) => {
    const response = await request.post('http://localhost:3000/api/register', {
      data: {
        email: 'missingfields@example.com',
        password: 'testpassword',
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toBe('Tous les champs sont requis');
  });

  test('Registration with an existing email', async ({ request }) => {
    // Assuming a user with this email already exists
    const response = await request.post('http://localhost:3000/api/register', {
      data: {
        fullName: 'Jane Doe',
        email: 'john.doe@example.com', // Already used email
        password: 'newpassword',
        role: 'user',
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toBe('this email already exist');
  });

});

