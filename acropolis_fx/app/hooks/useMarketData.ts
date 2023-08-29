import { useState, useEffect, useRef } from 'react';
import { TvApiAdapter } from 'tradingview-api-adapter';

const adapter = new TvApiAdapter();

export function useMarketData(symbols: string[]) {
  const [symbolData, setSymbolData] = useState<{ [symbol: string]: any }>({});
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const exchange = 'BINANCE';
    const fields = ['lp', 'ch', 'chp'];

    const listeners = symbols.map(symbol => {
      return adapter.Quote(symbol, exchange, fields).listen(data => {
        if (isMounted.current) {
          setSymbolData(prevData => ({
            ...prevData,
            [symbol]: data,
          }));
        }
      });
    });

    return () => {
      isMounted.current = false;
    };
  }, [symbols]);

  return symbolData;
}