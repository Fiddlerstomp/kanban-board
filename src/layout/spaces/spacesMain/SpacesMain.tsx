import React from 'react'
import styled from 'styled-components'
import { SpaceType } from '../../../model/spaces/types'
import AllSpaces from './AllSpaces'

type SpacesMainProps = {
  spaces: SpaceType[];
  selectedSpace: string;
}

const SpacesMain = (props: SpacesMainProps) => {
  return (
    <StyledSpacesMain>
      <AllSpaces spaces={props.spaces} />
    </StyledSpacesMain>
  )
};

const StyledSpacesMain = styled.main`
  padding: 30px;
  margin-left: 250px;
`;

export default SpacesMain