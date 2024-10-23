import React from 'react'
export default function Title(props) {
  return (
    <h1 onChange={props.function} style={{
        color: `${props.color}`,
        fontSize: `${props.fontSize}`,
        marginLeft: `${props.marginLeft}`,
        cursor: `${props.cursor}`,
        fontFamily: `${props.fontFamily}`,
        textTransform: `${props.textTransform}`,
        width: `${props.width}`,
    }} className={`publicTitle ${props.className}`}>
      {props.children}
    </h1>
  )
}
