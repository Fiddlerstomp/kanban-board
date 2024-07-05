import React from 'react';
import icons from "../../assets/icons.svg";

type IconProps = {
    id: string;
    height?: string;
    width?: string;
    viewBox?: string;
    pointer?: boolean;
}

const Icon = (props: IconProps) => {
  return (
    <svg width={props.width || "24"} height={props.height || "24"} viewBox={props.viewBox || "0 0 24 24"} xmlns="http://www.w3.org/2000/svg" style={{cursor: props.pointer ? "pointer" : "default"}}>
            <use xlinkHref={`${icons}#${props.id}`}></use>
    </svg>
  )
}

export default Icon