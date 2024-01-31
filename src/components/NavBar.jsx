import React from 'react'
import logoMulticopia from "../assets/Logo redonda Multicópia.png"
import '../css/NavBarr.css'

const NavBar = () => {
  return (
    <header>
        <div className="flex">
            <img src={logoMulticopia} alt="Logo Multicopia" width={110} className='hover:scale-110 cursor-pointer transition'/>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Localização</a></li>
                </ul>
            </nav>

            <button className='border px-5 py-3'>CONTATO</button>     
        </div>
    </header>
  )
}

export default NavBar