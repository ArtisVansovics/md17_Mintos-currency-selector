import React, { FC } from 'react';
import styles from './CurrencyBox.module.scss';

type CurrencyBoxProps = {
  title: string;
  onClick: () => void;
}

const CurrencyBox:FC<CurrencyBoxProps> = ({ title, onClick }) => (
  <div
    className={styles.box}
  >
    <button
      className={styles.button}
      onClick={onClick}
    >
      X
    </button>
    {title}
  </div>
);

export default CurrencyBox;
