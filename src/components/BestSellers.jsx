import React from 'react'
import '../css/BestSellerss.css'

// IMAGES
import folder2 from '../assets/best-sellers/folder-2-dobras.png'
import adesivos from '../assets/best-sellers/adesivos.jpg'
import calend from '../assets/best-sellers/calendarios.jpg'
import cdv from '../assets/best-sellers/cartao-de-visita.jpg'
import folder1 from '../assets/best-sellers/etiqueta-p.jpg'
import pb from '../assets/best-sellers/publi-midias.jpg'
import ag from '../assets/best-sellers/ag.png'
import enc from '../assets/best-sellers/encadernacao.jpg'
import cvan from '../assets/best-sellers/cvan.jpg'
import f1ef2 from '../assets/best-sellers/folha-a1-a2.jpg'
import tags from '../assets/best-sellers/tag.jpg'
import env from '../assets/best-sellers/Panfleto envelopes.png'

const BestSellers = () => {
  return (
    <section className='best-sellers pt-10' id='service'>
        <h1 className='mt-40 text-6xl'><strong className="strong">MAIS VENDIDOS</strong></h1>
        <div className="flex">
                <div className="sellers-box p-4">
                    <img src={f1ef2} alt=""className='md:w-best-sellers-400 md:h-best-sellers-350 w-80 h-60'/>
                    <h2 className='leading-8 pt-2'>Impressão de Projetos</h2>
                    </div>
                    
                    <div className="sellers-box p-6">
                    <img src={adesivos} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-80 h-60'/>
                    <h2>Etiquetas/Adesivos</h2>
                    </div>
                    
                    <div className="sellers-box p-5">
                    <img src={env} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-80 h-60'/>
                    <h2 className='leading-9'>Impressão de Envelopes</h2>
                    </div>
                    <div className="sellers-box">
                    <img src={cdv} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-96 h-60'/>
                    <h2>Cartão de Visita</h2>
                    </div>
                    <div className="sellers-box">
                    <img src={folder1} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-96 h-60'/>
                    <h2>Etiquetas Escolares</h2>
                    </div>

                    <div className="sellers-box">
                    <img src={tags} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-80 h-60'/>
                    <h2>Tags</h2>
                    </div>
                    <div className="sellers-box">
                    <img src={ag} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-80 h-60'/>
                    <h2 className='leading-9'>Agendas Personalizadas</h2>
                    </div>
                    <div className="sellers-box">
                    <img src={enc} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-96 h-60'/>
                    <h2>Encadernações</h2>
                    </div>
                    <div className="sellers-box">
                    <img src={cvan} alt="" className='md:w-best-sellers-400 md:h-best-sellers-350 w-96 h-60'/>
                    <h2>Convites</h2>
                    </div>
                </div>
    </section>
  )
}

export default BestSellers