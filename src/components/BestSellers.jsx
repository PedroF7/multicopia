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
            <div className="sellers-box">
              <img src={f1ef2} alt="Impressões A1 e A2"/>
              <h2>Impressão de Projetos</h2>
            </div>
            <div className="sellers-box">
              <img src={adesivos} alt="Adesivos" />
              <h2>Etiquetas/Adesivos</h2>
            </div>
            <div className="sellers-box">
              <img src={env} alt="Envelopes" />
              <h2>Impressão em Envelopes</h2>
            </div>
            <div className="sellers-box">
              <img src={cdv} alt="Cartão de Visita" />
              <h2>Cartão de Visita</h2>
            </div>
            <div className="sellers-box">
              <img src={folder1} alt="Etiquetas" />
              <h2>Etiquetas Escolares</h2>
            </div>
            <div className="sellers-box">
              <img src={tags} alt="Tags" />
              <h2>Tags</h2>
            </div>
            <div className="sellers-box">
              <img src={ag} alt="Agendas" />
              <h2>Agendas Personalizadas</h2>
            </div>
            <div className="sellers-box">
              <img src={enc} alt="Encadernação" />
              <h2>Encadernações</h2>
            </div>
            <div className="sellers-box">
              <img src={cvan} alt="Convite" />
              <h2>Convites</h2>
            </div>
        </div>
    </section>
  )
}

export default BestSellers