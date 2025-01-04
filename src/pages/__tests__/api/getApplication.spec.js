import { test, expect } from '@playwright/test';
import dbConnect from "../../config/mongodb";
import Application from "../../models/Application";

test.describe('GET /api/applications', () => {

  test.beforeEach(async () => {
    await dbConnect();
    await Application.deleteMany({});
    await Application.create({ name: 'Test Application', description: 'Test Description' });
  });

  test('Successful application retrieval', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/Application');
    
    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.success).toBe(true);
    expect(body.data).toHaveLength(1);
    expect(body.data[0]).toHaveProperty('name', 'Test Application');
    expect(body.data[0]).toHaveProperty('description', 'Test Description');
  });

  test('Error in fetching applications', async ({ request }) => {
    const mockDatabaseError = jest.spyOn(dbConnect, 'connect').mockImplementationOnce(() => {
      throw new Error('Database connection failed');
    });

    const response = await request.get('http://localhost:3000/api/Application');
    expect(response.status()).toBe(500);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toBe("error fetch Application");
    
    mockDatabaseError.mockRestore();
  });

});
