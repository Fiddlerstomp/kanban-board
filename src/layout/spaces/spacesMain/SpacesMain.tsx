import React from 'react'
import styled from 'styled-components'
import BoardCard from './BoardCard'
import CreateBoardCard from './CreateBoardCard'
import { SpaceType } from '../../../model/spaces/types'

type SpacesMainProps = {
  spaces: SpaceType[];
}

const SpacesMain = (props: SpacesMainProps) => {
  return (
    <StyledSpacesMain>
        {props.spaces.map(space => <BoardCard title={space.title} />)}
        <CreateBoardCard />
    </StyledSpacesMain>
  )
}

const StyledSpacesMain = styled.main`
    flex-grow: 1;
    margin-left: 250px;
    padding: 71px 20px 20px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    color: gray;
    font-size: 14px;
`

export default SpacesMain