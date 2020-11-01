import React from 'react';
import CarouselSection from '../Carousel/Carousel';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavbarMenu></NavbarMenu>
            <HeaderMain />

        </div>
    );
};

export default Header;