import { NextFunction, Request, Response } from "express";

export const validate_delivery = async (
  req: Request,
  res: Response,
  Next: NextFunction
) => {
  try {
    const errors: any = {};
    const {
      pickAddress,
      type,
      dropAddress,
    }: { pickAddress: string; type: string; dropAddress: string } = req.body;

    //check if pickup address not empty
    if (!pickAddress) errors.pickAddress = " pickup address can't be empty ";

    //check if dropoff address not empty
    if (!dropAddress) errors.dropAddress = " drop off address can't be empty ";

    //check if dropoff address not empty
    if (!type) errors.type = "delivery type can't be empty ";

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    if (type.toLowerCase() !== "express" && type.toLowerCase() !== "regular")
      return res
        .status(400)
        .json({ type: "delivery type most be either express or regular" });

    Next();
  } catch (error: any) {
    return res.status(400).json({ msg: error.message });
  }
};
