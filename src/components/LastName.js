import React from "react";
import { useSelector } from "react-redux";

const LastName = () => {
  const lastname = useSelector((state) => state.users.lastName);
  return <div className="font-bold">{lastname}</div>;
};

export default LastName;
