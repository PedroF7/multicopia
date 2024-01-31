import React from 'react';
import styles from '../css/Agends.module.css';

const Agends = () => {
  return (
    <section className={styles.agends}>
      <h1 className='mb-12 '>AGENDAS PERSONALIZADAS</h1>

      <div className={`container flex justify-center flex-wrap gap-14 p-4  items-center ${styles.agendsContainer}`}>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox} `}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>

        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox}`}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
        <div className={`agendsbox flex items-center p-10 ${styles.agendsBox} `}>
          <img src="" alt="" className={styles.agendsImage}/>
        </div>
      </div>
    </section>
  );
};

export default Agends;
