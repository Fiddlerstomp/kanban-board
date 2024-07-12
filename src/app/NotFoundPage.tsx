import React from 'react'
import styled from 'styled-components';

const NotFoundPage = () => {
    return (
        <StyledNotFoundPage>
            <StyledMessage>
                404 - Page not found
            </StyledMessage>
        </StyledNotFoundPage>
    );
};

const StyledNotFoundPage = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledMessage = styled.p`
    font-size: 2rem;
    font-weight: 700;
`;

export default NotFoundPage