import React from "react";
import { button } from './styledefinition'

export const Button = (props)=> {
  return (
    <>
      <button style={{...button,...props}}>{props.children}</button>
    </>
  );
  
}
