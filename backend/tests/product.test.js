import request from "supertest";
import app from "../server.js";

describe("Product API", () => {
  it("should fetch product list", async () => {
    const res = await request(app).get("/api/product/list");
    expect(res.statusCode).toBe(200);
  });
});