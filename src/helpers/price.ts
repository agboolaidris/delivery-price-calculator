import price from "../fixtures/price";
import routes from "../fixtures/routes";

interface Props {
  type: string;
  from: string;
  to: string;
}
const delivery_price = ({ type, from, to }: Props): null | number => {
  let pickup = routes.find((route) => {
    const res = route.place.map((e) => {
      return from.toLowerCase().includes(e);
    });
    return res.includes(true);
  });

  if (!pickup) return null;

  let dropoff = routes.find((route) => {
    const res = route.place.map((e) => {
      return to.toLowerCase().includes(e);
    });
    return res.includes(true);
  });

  if (!dropoff) return null;

  const amount = price.find((p) => {
    const res = p.id.map((e) => {
      return `${pickup?.id}-${dropoff?.id}` == e;
    });
    return res.includes(true);
  });
  if (!amount) return null;

  return type.toLowerCase() == "express" ? amount.price * 2 : amount.price;
};

export default delivery_price;
