import React, { useState } from 'react'
import styled from 'styled-components'
import SpacesBar from './spaceBar/SpacesBar'
import SpacesMain from './spacesMain/SpacesMain'

export type Space = {
    id: number;
    title: string;
    boards: string[]
}

const initialSpaces: Space[] = [
    {id: 0, title: "Kanban", boards: [
        "Front",
        "Back",
        "Ideas"
    ]},
    {id: 1, title: "Attend", boards: [
        "Design",
        "Peoples"
    ]},
    {id: 2, title: "WoodPixel", boards: [
        "Todo",
        "Pixels",
        "Navigation",
        "Routes"
    ]}
]

const Spaces = () => {
    const [selectedBoard, setSelectedBoard] = useState<string>(initialSpaces[0].title);
    return (
        <StyledSpaces>
            <SpacesBar spaces={initialSpaces}/>
            <SpacesMain />
        </StyledSpaces>
    )
}

const StyledSpaces = styled.div`
    display: flex;
    width: 100%;
`

export default Spaces