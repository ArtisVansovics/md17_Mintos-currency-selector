import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import currencies from './data/currencies';
import CurrencyBox from './components/CurrencyBox/CurrencyBox';

const App = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  return (
    <div className="app">
      <div className="selector-container">
        <div className="selector-container__row">
          {selectedCurrencies.map((currency) => (
            <CurrencyBox title={currency} />
          ))}
        </div>
        <div className="selector-container__row">
          <div className="selector-container__grid">
            {currencies.map((currency) => (
              <Button
                title={currency}
                onClick={() => {
                  if (selectedCurrencies.includes(currency)) {
                    setSelectedCurrencies(selectedCurrencies.filter((a) => a !== currency));
                  } else setSelectedCurrencies([...selectedCurrencies, currency]);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
