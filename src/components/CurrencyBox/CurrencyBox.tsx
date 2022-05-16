import React, { FC } from 'react';
import styles from './CurrencyBox.module.scss';

type CurrencyBoxProps = {
  title: string
}

const CurrencyBox:FC<CurrencyBoxProps> = ({ title }) => (
  <div
    className={styles.box}
  >
    {title}
  </div>
);

export default CurrencyBox;
