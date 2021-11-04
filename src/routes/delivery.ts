import { Router } from "express";
import trim from "../helpers/trim";
import { validate_delivery } from "../validations/delivery";
import { post_delivery } from "./../controllers/delivery";

const route = Router();

route.post("/", [trim, validate_delivery], post_delivery);

export default route;
