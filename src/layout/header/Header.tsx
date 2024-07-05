import React from 'react';
import styled from 'styled-components';
import Button from '../../component/button/Button';
import Logo from '../../component/logo/Logo';
import SearchBar from './SearchBar';
import UserIcon from '../../component/UserIcon';

const Header = () => {
    return (
        <StyledHeader>
            <Side>
                <Logo src="logo.png" alt="logo" pointer={true} />
                <Button height='40px' width='70px' title="Create" />
            </Side>
            <Side>
                <SearchBar />
                <UserIcon username="Wlados" />
            </Side>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 51px;
    border-bottom: 1px grey solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 999;
`

const Side = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

export default Header