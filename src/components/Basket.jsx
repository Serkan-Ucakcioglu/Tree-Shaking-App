import React from "react";
import BasketSvg from "../assets/BasketSvg";
import { useSelector } from "react-redux";
import { selectedArr, selectedGoBasket } from "../features/treeSlice";
import Apple from "../assets/AppleSvg";

function Basket() {
  const arr = useSelector(selectedArr);
  const goBasket = useSelector(selectedGoBasket);
  const content =
    goBasket &&
    arr?.map((apple) => {
      return <Apple />;
    });
  return (
    <div className="basket">
      <BasketSvg />
      <div className="basketapple">{content}</div>
    </div>
  );
}

export default Basket;
