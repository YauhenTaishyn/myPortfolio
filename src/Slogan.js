import React from 'react';
import styles from'./Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>Рассматриваю варианты удаленной работы</span>
        <button className={styles.btnSubmit} type='submit'> отправить </button>
    </div>
    </div>
  );
}

export default Slogan;
