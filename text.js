import React from "react";
import { h1, p } from "./styledefinition";

export const Text = (props) => {
  const { type, children } = props;

  if (type === "h1") {
    return <h1 style={h1}>{children}</h1>;
  }

  if (type === "p") {
    return <p style={{ ...p, ...props }}>{children}</p>;
  }

  return (
    <>
      <span style={{ ...props }}>{children}</span>
    </>
  );
};