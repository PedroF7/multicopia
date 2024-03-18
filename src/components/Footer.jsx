import React from 'react'
import logoMulticopia from "../assets/Cartão de visita Multicópia 2023.png"

import  '../css/Footerr.css'

const Footer = () => {
  return (
    <>
        <div className="container-footer" id='footer'>
          <div className="line-footer">
            <div class="logo-footer">
                    <img src={logoMulticopia} alt="" width={500} className='pb-9'/>
                    </div>
                    <div class="container-footer">
                        <h2 className='text-center'>Contato</h2>
                        <p><i class="bi bi-whatsapp"></i><a href="https://api.whatsapp.com/send?phone=5521997401505" target="_blank"> 77 98833-0595</a> -Wesley Gomes Santos</p>
                    </div>
                    <div class="container-footer">
                        <h2 className='text-center'>Localização</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.482900122814!2d-40.841411325242056!3d-14.854252000508467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b1f0544f72d%3A0x8f50ca65a0b32dbc!2zTXVsdGljw7NwaWEgR3LDoWZpY2EgUsOhcGlkYQ!5e0!3m2!1spt-BR!2sbr!4v1706971574187!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-80 h-72 md:w-96 md:h-36'></iframe>
                    </div>
          </div>
        </div>
    </>
  )
}

export default Footer