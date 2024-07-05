import React from 'react'
import styled from 'styled-components'
import { Space } from '../Spaces'

type SpacesBarProps = {
  spaces: Space[];
}

const SpacesBar = (props: SpacesBarProps) => {
  return (
    <StyledSpacesBar>
      <StyledHeader>
        <h3>Workspaces</h3>
        <button>+</button>
      </StyledHeader>
      <StyledWorkSpaceList>
        {props.spaces.map(item => <StyledWorkSpaceItem><a>{item.title}</a></StyledWorkSpaceItem>)}
      </StyledWorkSpaceList>
    </StyledSpacesBar>
  )
}

const StyledSpacesBar = styled.nav`
  border-right: 1px grey solid;
  position: fixed;
  width: 250px;
  margin-top: 51px;
  overflow-y: auto;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5em;
  }
`

const StyledWorkSpaceList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledWorkSpaceItem = styled.li`
  font-size: 1.3em;
  margin-bottom: 5px;
`

export default SpacesBar