import React, { useEffect } from "react";
import AppleSvg from "../assets/AppleSvg";
import { useDispatch, useSelector } from "react-redux";
import {
  activeGoBasket,
  selectedApple,
  selectedArr,
  selectedGoBasket,
} from "../features/treeSlice";

function AppleList() {
  const apple = useSelector(selectedApple);
  const arr = useSelector(selectedArr);
  const goBasket = useSelector(selectedGoBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (apple) {
      setTimeout(() => {
        dispatch(activeGoBasket());
      }, 6000);
    }
  }, [apple]);

  const content = arr.map((apple, i) => {
    return (
      <li key={i} className={`${goBasket ? "appleGround" : ""}`}>
        {" "}
        <AppleSvg />{" "}
      </li>
    );
  });

  return (
    <ul
      className={`apple-list ${goBasket ? "ground" : ""} ${
        apple ? " apple" : ""
      }`}
    >
      {content}
    </ul>
  );
}

export default AppleList;
