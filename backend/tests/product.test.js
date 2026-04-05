import request from "supertest";
import app from "../server.js";

describe("Basic API", () => {
  it("should return 200 for root", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});