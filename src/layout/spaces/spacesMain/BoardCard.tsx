import React from 'react'
import styled from 'styled-components'

type StyledBoardCardProps = {
    color?: string;
};

type BoardCardProps = {
    title: string;
    color?: string;
}

const BoardCard = (props: BoardCardProps) => {
  return (
    <StyledBoardCard color={props.color}>
        {props.title}
    </StyledBoardCard>
  )
}

const StyledBoardCard = styled.div<StyledBoardCardProps>`
    background-color: ${p => p.color};
    color: #ffffff;
    font-size: 1.5em;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    height: 100px;
`

export default BoardCard