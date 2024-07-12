import styled from 'styled-components'
import SpacesBar from './spaceBar/SpacesBar'
import SpacesMain from './spacesMain/SpacesMain'
import { useAppSelector } from '../../model/store'
import spacesAPI from '../../api/spaces-api'
import { useState } from 'react'

export type SpaceSelectType = "all" | string;

const Spaces = () => {
    const spaces = useAppSelector(store => store.spaces);
    
    const [selectedSpace, setSelectedSpace] = useState<SpaceSelectType>("all");

    const createNewSpace = (title: string) => {
        spacesAPI.createSpace(title);
    };

    const setSelectSpaceHandler = (spaceID: number) => {
        const selectedSpaceTitle = spaces.find(space => space.id === spaceID)?.title;
        if (selectedSpaceTitle)
            setSelectedSpace(selectedSpaceTitle);
    }

    return (
        <StyledSpaces>
            <SpacesBar selectedSpace={selectedSpace} createSpace={createNewSpace} setSelectedSpace={setSelectSpaceHandler}/>
            <SpacesMain selectedSpace={selectedSpace} spaces={spaces}/>
        </StyledSpaces>
    )
}

const StyledSpaces = styled.div`
    width: 100%;
`

export default Spaces