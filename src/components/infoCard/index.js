import styles from './infoCard.module.scss'

import React from "react";

const InfoCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__info}>
                <img src="/logo.svg" alt="My LOGO" />
                <div className={styles.card__info__text}>
                    <h1>Shuyuan</h1>
                    <p>A front-end developer who also revels in design.</p>
                </div>
            </div>
            <a href='https://shuyuanchuang.com/'>
                <div className={styles.card__button}>
                    VIEW WEBSITE
                </div>
            </a>
        </div>
    );
};

export default InfoCard;