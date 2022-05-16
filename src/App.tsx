import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import currencies from './data/currencies';
import CurrencyBox from './components/CurrencyBox/CurrencyBox';

const App = () => {
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
    <div className="app">
      <div className="container">
        <div className="container__row">
          <div className="container__grid container__grid--list">
            {selectedCurrencies.map((currency) => (
              <CurrencyBox
                key={currency}
                title={currency}
                onClick={() => filterOut(currency)}
              />
            ))}
          </div>
        </div>
        <div className="container__row">
          <div className="container__grid">
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
      </div>
    </div>
  );
};

export default App;
