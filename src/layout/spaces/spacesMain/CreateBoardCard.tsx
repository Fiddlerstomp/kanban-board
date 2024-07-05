import React from 'react'
import styled from 'styled-components'

const CreateBoardCard = () => {
  return (
    <StyledCard>Create new board</StyledCard>
  )
}

const StyledCard = styled.div`
    background-color: #e9ecef;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`

export default CreateBoardCard