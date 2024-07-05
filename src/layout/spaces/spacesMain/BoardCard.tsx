import React from 'react'
import styled from 'styled-components'

type BoardCardProps = {
    title: string;
}

const BoardCard = (props: BoardCardProps) => {
  return (
    <StyledBoardCard>
        {props.title}
    </StyledBoardCard>
  )
}

const StyledBoardCard = styled.div`
    background-color: #d4d10f;
    color: #ffffff;
    font-size: 1.5em;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    height: 100px;
`

export default BoardCard