"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../src/index");
var supertest_1 = __importDefault(require("supertest"));
describe("test", function () {
    it("test without pass json", function (done) {
        (0, supertest_1.default)(index_1.app)
            .post("/api/delivery")
            .expect(400)
            .end(function (err, res) {
            if (err)
                return done(err);
            return done();
        });
    });
    it("test with pass json", function (done) {
        (0, supertest_1.default)(index_1.app)
            .post("/api/delivery")
            .send({
            type: "Regular",
            pickAddress: "20 adamo ikorodu lagos",
            dropAddress: "25 kkk iju lagos",
        })
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            return done();
        });
    });
});
