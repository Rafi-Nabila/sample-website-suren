import React from 'react';
// import styled from 'styled-components';
import { HeaderTop } from './header-top';
import { NavigationBar } from './navbar';

export default function Header() {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <NavigationBar></NavigationBar>
        </div>
    )
}