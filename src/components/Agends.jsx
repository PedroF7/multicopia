import React from 'react';
import styles from '../css/Agends.module.css';

import ag1 from '../assets/Agendas/POST 0001.png'
import ag2 from '../assets/Agendas/POST 0002.png'
import ag3 from '../assets/Agendas/POST 0003.png'
import ag4 from '../assets/Agendas/POST 0005.png'
import ag5 from '../assets/Agendas/POST 0007.png'
import ag6 from '../assets/Agendas/POST 0008.png'
import ag7 from '../assets/Agendas/POST 0012 - Copia.png'
import ag8 from '../assets/Agendas/POST 0018.png'

const Agends = () => {
  return (
    <section className={`${styles.agends} mt-28 px-6`} id='agends'>
      <h1 className='mb-6 text-h1-agends-p md:text-h1-agends-g md:leading-normal leading-tight'><strong>AGENDAS 2024</strong> </h1>

      <div className={`container flex justify-center flex-wrap gap-14 p-4  items-center ${styles.agendsContainer}`}>
        <div className={`agendsbox flex items-center  ${styles.agendsBox}`}>
          <img src={ag1} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center  ${styles.agendsBox}`}>
          <img src={ag2} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center  ${styles.agendsBox}`}>
          <img src={ag3} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center  ${styles.agendsBox} `}>
          <img src={ag4} alt="" className={styles.agendsImage}/>
        </div>

        <div className={`agendsbox flex items-center  ${styles.agendsBox}`}>
          <img src={ag5} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center ${styles.agendsBox}`}>
          <img src={ag6} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center  ${styles.agendsBox}`}>
          <img src={ag7} alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center  ${styles.agendsBox} `}>
          <img src={ag8} alt="" className={styles.agendsImage}/>
        </div>
      </div>
    </section>
  );
};

export default Agends;
