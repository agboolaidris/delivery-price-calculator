import { Router } from "express";
import trim from "../helpers/trim";
import { validate_delivery } from "../validations/delivery";
import { post_delivery } from "./../controllers/delivery";

const route = Router();

//@route POST api/delivery
//@desc calculates how much a user is expected to pay for a delivery
//@access Public
route.post("/", [trim, validate_delivery], post_delivery);

export default route;
