import { app } from "./../src/index";
import { expect } from "chai";
import request from "supertest";

describe("test", () => {
  it("test without pass json", (done) => {
    request(app)
      .post("/api/delivery")
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("test with pass json", (done) => {
    request(app)
      .post("/api/delivery")
      .send({
        type: "Regular",
        pickAddress: "20 adamo ikorodu lagos",
        dropAddress: "25 kkk iju lagos",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
