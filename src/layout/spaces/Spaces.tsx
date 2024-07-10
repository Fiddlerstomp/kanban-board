import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SpacesBar from './spaceBar/SpacesBar'
import SpacesMain from './spacesMain/SpacesMain'
import { useAppDispatch, useAppSelector } from '../../model/store'
import { getSpacesTC } from '../../model/thunks/spaces-thunks'

const Spaces = () => {
    const [selectedBoard, setSelectedBoard] = useState<string>("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSpacesTC())
    }, []);

    const spaces = useAppSelector(store => store.spaces);

    return (
        <StyledSpaces>
            <SpacesBar/>
            <SpacesMain spaces={spaces}/>

        </StyledSpaces>
    )
}

const StyledSpaces = styled.div`
    display: flex;
    width: 100%;
`

export default Spaces