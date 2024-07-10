import React from 'react'
import styled from 'styled-components'

type StyledButtonProps = {
    backgroundColor?: string;
    height?: string;
    width?: string;
    color?: string;
    border?: string;
}

type ButtonProps = {
    title: string;
    clickCallback: () => void;
} & StyledButtonProps

const Button = (props: ButtonProps) => {
  return (
    <StyledButton backgroundColor={props.backgroundColor} height={props.height} width={props.width} onClick={props.clickCallback}>
        {props.title}
    </StyledButton>
  )
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${p => p.backgroundColor || "#0e6f9b"};
    height: ${p => p.height};
    width: ${p => p.width};
    color: ${p => p.color || "#ffffff"};
    border: ${p => p.border || "none"};
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
`

export default Button