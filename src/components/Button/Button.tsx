import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  selected: boolean
  onClick: () => void;
}

const Button:FC<ButtonProps> = ({ title, onClick, selected }) => (
  <button
    className={`${styles.button} ${selected ? styles.buttonSelected : ''}`}
    onClick={onClick}
  >
    <div className={`${styles.checkbox} ${selected ? styles.checkboxSelected : ''}`}>
      X
    </div>
    {title}
  </button>
);

export default Button;
