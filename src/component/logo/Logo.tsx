import React from 'react'

type LogoProps = {
    src: string;
    alt: string;
    height?: string;
    pointer?: boolean;
}

const Logo = (props: LogoProps) => {
  return (
    <img src={props.src} alt={props.alt} height={props.height || "50px"} style={{cursor: props.pointer ? "pointer" : "default"}}/>
  )
}

export default Logo