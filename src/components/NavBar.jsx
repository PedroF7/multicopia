import React from 'react'
import logoMulticopia from "../assets/Logo redonda Multicópia.png"
import '../css/NavBarr.css'

const NavBar = () => {
  return (
    <header>
        <div className="flex">
            <img src={logoMulticopia} alt="Logo Multicopia" width={110}/>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Serviços</li>
                    <li>Localização</li>
                </ul>
            </nav>

            <button>CONTATO</button>     
        </div>
    </header>
  )
}

export default NavBar