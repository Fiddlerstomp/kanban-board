import React from 'react'
import styled from 'styled-components';

type UserIconProps = {
    username: string;
    src?: string;
}

const UserIcon = (props: UserIconProps) => {
    const getFirstLetter = (): string => {
        return props.username.charAt(0);
    };

    return (
        <StyledUserIcon>
            {getFirstLetter()}
        </StyledUserIcon>
    )
}

const StyledUserIcon = styled.div`
    width: 30px;
    height: 30px;
    background-color: #6c757d;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export default UserIcon