import React, { useState } from 'react';
import currencies from '../../data/currencies';
import Button from '../Button/Button';
import CurrencyBox from '../CurrencyBox/CurrencyBox';
import styles from './CurrencySelection.module.scss';

const CurrencySelection = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const filterOut = (currency: string) => (
    setSelectedCurrencies(selectedCurrencies.filter((a) => a !== currency))
  );

  const toggleCurrency = (currency: string) => {
    if (selectedCurrencies.includes(currency)) {
      filterOut(currency);
    } else setSelectedCurrencies([...selectedCurrencies, currency]);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.grid} ${styles.gridList}`}>
        {selectedCurrencies.map((currency) => (
          <CurrencyBox
            key={currency}
            title={currency}
            onClick={() => filterOut(currency)}
          />
        ))}
      </div>
      <div className={styles.grid}>
        {currencies.map((currency) => (
          <Button
            key={currency}
            title={currency}
            selected={selectedCurrencies.includes(currency)}
            onClick={() => toggleCurrency(currency)}
          />
        ))}
      </div>
    </div>
  );
};
export default CurrencySelection;
