import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
  return (
    <StyledSearch>
      Search...
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
    height: 40px;
    width: 140px;
    background-color: black;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
`

export default SearchBar