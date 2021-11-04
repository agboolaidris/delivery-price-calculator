import delivery_price from "./../helpers/price";
import { Response, Request } from "express";

export const post_delivery = (req: Request, res: Response) => {
  try {
    const {
      pickAddress,
      dropAddress,
      type,
    }: { pickAddress: string; dropAddress: string; type: string } = req.body;

    const price = delivery_price({ from: pickAddress, type, to: dropAddress });

    if (!price)
      return res.status(400).json({ error: "we don't deliver to such area" });

    res.json({ price });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
