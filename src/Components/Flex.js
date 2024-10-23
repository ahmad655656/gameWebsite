import React from 'react'
import './Flex.css'
export default function Flex(props) {
  return (
    <div onMouseOver={props.onMouseOver} onClick={props.function} className={`flex ${props.className}`} style={{
      width: `${props.width}`,
      display: `${props.display}`,
      flexDirection: `${props.flexDirection}`,
      gap: `${props.gap}`,
      minHeight: `${props.minHeight}`,
      padding: `${props.padding}`,
      justifyContent: `${props.justifyContent}`,
      backgroundColor: `${props.backgroundClolor}`,
      background: `${props.background}`,
      overflowX: `${props.overflowX}`,
      overflowY: `${props.overflowY}`,
      fontSize: `${props.fontSize}`,
      borderRadius: `${props.borderRadius}`,
      scrollbarWidth: `${props.scrollbarWidth}`,
      scrollbarColor: `${props.scrollbarColor}`,
      cursor: `${props.cursor}`,
      alignItems: `${props.alignItems}`, 
      transform: `${props.transform}`,
      zIndex: `${props.zIndex}`,
      paddingTop: `${props.paddingTop}`,
      height: `${props.height}`,
      position: `${props.position}`,
      paddingRight: `${props.paddingRight}`,
      marginLeft: `${props.marginLeft}`,
      marginTop: `${props.marginTop}`,
      marginBottom: `${props.marginBottom}`,
      color: `${props.color}`,
      right: `${props.right}`,
      border: `${props.border}`,
      flexWrap: `${props.flexWrap}`,
      left: `${props.left}`,
      top: `${props.top}`,
    }}>
      {props.children}
    </div>
  )
}
