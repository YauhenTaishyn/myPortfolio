import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мои проекты</span>
                <div className={styles.projectsWrapper}>
                    <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <a className={styles.btnShow} href=''>Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>To do list </span>
                    <span className={styles.description}>описание блаблабла </span>
                </div>
                <div className={styles.project}>
                <div className={styles.projectImg}>
                    <a className={styles.btnShow} href=''>Смотреть</a>
                </div>
                    <span className={styles.projectTitle}>NetWork </span>
                    <span className={styles.description}>описание блаблабла 2 </span>
                </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=''>Смотреть</a>
                        </div>
                <span className={styles.projectTitle}>как только сделаю допишу </span>
                <span className={styles.description}>описание блаблабла 3 </span>
            </div>
        </div>
            </div>
        </div>
    );

            };

            export default Projects;
