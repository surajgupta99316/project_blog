import React from "react";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Blog</h3>
      <button onClick={() => navigate("/Vol")}>Add Blog</button>{" "}
    </>
  );
};

export default Test;
