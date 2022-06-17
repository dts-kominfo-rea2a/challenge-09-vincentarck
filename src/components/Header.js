// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <header className='header-container'>
            <h1 className='title'>call a friend</h1>
            <p className='desc'>your friendly contact app</p>
            <span className='divider' style={{color:'#c97e1d '}}>{("*").repeat(70)}</span>
        </header>
    )
}

export default Header;