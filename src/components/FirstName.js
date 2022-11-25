import React from "react";
import { useSelector } from "react-redux";

const FirstName = () => {
  const name = useSelector((state) => state.aidai.firstName);
  return <div className="font-bold">{name}</div>;
};

export default FirstName;
