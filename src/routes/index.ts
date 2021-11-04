import { Router } from "express";
import delivery from "./delivery";

const route = Router();

route.use("/delivery", delivery);

export default route;
