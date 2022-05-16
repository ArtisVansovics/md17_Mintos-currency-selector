import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string
  onClick: () => void
}

const Button:FC<ButtonProps> = ({ title, onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    <div className={styles.checkbox} />
    {title}
  </button>
);

export default Button;
