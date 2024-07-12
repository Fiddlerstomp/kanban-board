import React from 'react'
import { SpaceType } from '../../../model/spaces/types';
import styled from 'styled-components';
import BoardCard from './BoardCard';
import CreateBoardCard from './CreateBoardCard';

type AllSpacesProps = {
    spaces: SpaceType[];
};

type BoardType = {
    id: number;
    spaceID: number;
    title: string;
    color: string;
};

const boardState: BoardType[] = [
    {
        id: 11,
        spaceID: 1,
        title: "First board",
        color: "#d4d10f"
    },
    {
        id: 12,
        spaceID: 1,
        title: "Second board",
        color: "#1cb93e"
    },
    {
        id: 21,
        spaceID: 2,
        title: "Third board",
        color: "#23b0dbff"
    }
];

const AllSpaces = (props: AllSpacesProps) => {
    return (
        <StyledAllSpaces>
            {props.spaces.map(space => {
                const spaceBoards = boardState.filter(board => board.spaceID === space.id);
                return (
                    <StyledSpaceSection>
                        <StyledSpaceHeader>{space.title}</StyledSpaceHeader>
                        <StyledSpacesList>
                            {spaceBoards.map(board =>
                                <BoardCard title={board.title} color={board.color}/>
                            )}
                            <CreateBoardCard />
                        </StyledSpacesList>
                    </StyledSpaceSection>
                )
            }
            )}
        </StyledAllSpaces>
    );
};

const StyledAllSpaces = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledSpaceHeader = styled.h5`
    font-size: 1.5rem;
`;

const StyledSpaceSection = styled.section`
    display: flex;
    flex-direction: column;
`;

const StyledSpacesList = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    color: gray;
    font-size: 14px;
`;

export default AllSpaces;