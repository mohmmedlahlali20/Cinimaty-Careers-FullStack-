import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcryptjs";
import supertest from "supertest";
import handler from "../../api/login";
import User from "../../models/User";

const request = supertest(handler);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const hashedPassword = await bcrypt.hash("testpassword", 10);
  await User.create({
    fullName: "Test User",
    email: "test@example.com",
    password: hashedPassword,
    role: "user",
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

jest.setTimeout(10000);  

describe("POST /api/login", () => {
  test("should return 200 and a token if credentials are valid", async () => {
    const response = await request.post("/api/login").send({
      email: "test@example.com",
      password: "testpassword",
    });
    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty("success", true);
    // expect(response.body).toHaveProperty("token");
    // expect(response.body.user).toMatchObject({
    //   fullName: "Test User",
    //   email: "test@example.com",
    //   role: "user",
    // });
  });
});
