import React from 'react';
import styles from'./Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>




          <div className={styles.headerTitle}>
              <h2 className={styles.headerTitle}>Мои Скилы</h2>
          <div className={styles.line}></div>
      </div>





        <div className={styles.skillsWrapper}>
        <div className={styles.skill}>
        <div className={styles.icon}>
        <img src="" alt="" className=""/>
      </div>
      <span className={styles.skillTitle}>HTML&CSS </span>
      <span className={styles.description}> не знаю что писать пока</span>
    </div>
          <div className={styles.skill} >
            <div className={styles.icon} >
              <img src="" alt="" className=""/>
            </div>
            <span className={styles.skillTitle}>JS</span>
            <span className={styles.description}>средний столбец</span>
          </div>
          <div className={styles.skill} >
            <div className={styles.icon} >
              <img src="" alt="" className=""/>
            </div>
            <span className={styles.skillTitle}>React-Redux </span>
            <span className={styles.description}>третий крайний столбец</span>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Skills;
