import React from 'react';

interface SymbolsProps {
  selectedSymbol: string;
  onSymbolChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  symbols: string[]; // Ensure symbols are required
}

const Symbols: React.FC<SymbolsProps> = ({ selectedSymbol, onSymbolChange, symbols }) => {
  return (
    <label htmlFor="symbolSelect">
      Watchlist:
      <select className='bg-white text-black'id="symbolSelect" value={selectedSymbol} onChange={onSymbolChange}>
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Symbols;
