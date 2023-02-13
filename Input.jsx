import React from "react";

export const Input = ({ type, placeholder, labelTxt, name,}) => {
  return (
    <>
      <label htmlFor={name}>{labelTxt}</label>
      <input id={name} type={type} placeholder={placeholder} 
      style={{marginBottom:"10px", padding:"4px 10px"}} />     
    </>
    
  );
};