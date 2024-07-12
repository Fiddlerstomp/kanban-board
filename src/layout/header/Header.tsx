import React from 'react';
import styled from 'styled-components';
import Button from '../../component/button/Button';
import Logo from '../../component/logo/Logo';
import SearchBar from './SearchBar';
import UserIcon from '../../component/UserIcon';
import authAPI from '../../api/auth-api';

const Header = () => {
    const userIconClickHandler = () => {
        authAPI.login();
    }

    return (
        <StyledHeader>
            <Side>
                <Logo src="logo.png" alt="logo" pointer={true} />
                <Button height='40px' width='70px' title="Create" clickCallback={() => {}}/>
            </Side>
            <Side>
                <SearchBar />
                <div onClick={userIconClickHandler}>
                    <UserIcon username="Wlados"/>
                </div>
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