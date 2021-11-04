import { Response, Request } from "express";
import calculate_price from "../helpers/calculatePrice";


//@route POST api/delivery
//@desc calculates how much a user is expected to pay for a delivery
//@access Public
export const post_delivery = (req: Request, res: Response) => {
  try {
    const {
      pickAddress,
      dropAddress,
      type,
    }: { pickAddress: string; dropAddress: string; type: string } = req.body;

    const price = calculate_price({ from: pickAddress, type, to: dropAddress });

    if (!price)
      return res.status(400).json({ error: "we don't deliver to such area" });

    res.json({ price });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
