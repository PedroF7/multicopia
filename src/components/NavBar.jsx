import React, { useState } from 'react';
import logoMulticopia from "../assets/Logo redonda Multicópia.png";
import '../css/NavBarr.css';

// COMPONENTS
import BestSellers from "./BestSellers";
import Agends from "./Agends";
import Loc from "./Loc";
import Footer from "./Footer";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='container-header h-32 '>
            <div className="flex">
                <img src={logoMulticopia} alt="Logo Multicopia" width={110} className='hover:scale-110 cursor-pointer transition'/>
                <nav className='hidden menu-desktop lg:block'>
                    <ul>
                        <li className='md:m-7'><a href="#service">Serviços</a></li>
                        <li className='md:m-7'><a href="#loc">Sobre</a></li>
                        <li className='md:m-7'><a href="#footer">Localização</a></li>
                    </ul>
                </nav>

                <div className="btn-abrir-menu" id="btn-menu" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </div>

                <div className={`menu-mobile ${menuOpen ? 'abrir-menu' : ''}`}>
                    <div className="btn-fechar" onClick={toggleMenu}>
                        <i className="bi bi-x-lg"></i>
                    </div>

                    <nav>
                        <ul>
                            <li className='md:m-7'><a href="#service">Serviços</a></li>
                            <li className='md:m-7'><a href="#loc">Sobre</a></li>
                            <li className='md:m-7'><a href="#footer">Localização</a></li>
                        </ul>
                    </nav>
                </div>

                {menuOpen && <div className="overlay-menu" onClick={toggleMenu}></div>}
            </div>
        </header>
    );
};

export default NavBar;
