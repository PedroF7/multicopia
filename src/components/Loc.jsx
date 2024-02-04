import React from 'react'

const Loc = () => {
  return (
    <section className="flex flex-col p-7 gap-12  lg:flex-row md:p-20 mb-24 lg:mt-24" id='loc'>
        <div className="txt-sobre">
            <h1 className='mt-20 text-5xl md:text-h1-agends-g'>MULTICÓPIA</h1>
            <p className='text-center  italic text-xl md:pt-8 md:pb-5'>Gráfica Rápida</p>
            <p className='text-2xl text-justify pt-5 md:text-3xl'>Somos uma empresa que atua em Vitória da Conquista-BA no Seguimento de Impressões Gráficas. Buscando Atender da Melhor Forma Possível a Você Cliente. Trabalhamos com Pequenas e Grandes Tiragens
            </p>
        </div>

        <div className="iframe-sobre">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.482900122814!2d-40.841411325242056!3d-14.854252000508467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b1f0544f72d%3A0x8f50ca65a0b32dbc!2zTXVsdGljw7NwaWEgR3LDoWZpY2EgUsOhcGlkYQ!5e0!3m2!1spt-BR!2sbr!4v1706971574187!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-80 h-72 md:w-iframe-600 md:h-iframe-h-450'></iframe>
        </div>
    </section>
  )
}

export default Loc