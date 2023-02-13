import React from 'react'
import { flex } from './styledefinition'


export const  Flex=(props)=> {
  return (
    <div style={{...flex,...props}}>{props.children}</div>
  );
}

