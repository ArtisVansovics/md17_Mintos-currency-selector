import React, { FC, useState } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  onClick: () => void;
}

const Button:FC<ButtonProps> = ({ title, onClick }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    onClick();
    setSelected(!selected);
  };

  return (
    <button
      className={`${styles.button} ${selected ? styles.buttonSelected : ''}`}
      onClick={handleClick}
    >
      <div className={`${styles.checkbox} ${selected ? styles.checkboxSelected : ''}`}>
        X
      </div>
      {title}
    </button>
  );
};

export default Button;
