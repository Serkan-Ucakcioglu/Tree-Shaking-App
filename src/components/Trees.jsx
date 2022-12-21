import React from "react";
import { useSelector } from "react-redux";
import TreeSvg from "../assets/TreeSvg";
import { selectedShake } from "../features/treeSlice";
import AppleList from "./AppleList";

function Trees() {
  const shake = useSelector(selectedShake);
  return (
    <div className={`tree ${shake ? "tree_bot" : ""}`}>
      <TreeSvg />
      <AppleList />
    </div>
  );
}

export default Trees;
