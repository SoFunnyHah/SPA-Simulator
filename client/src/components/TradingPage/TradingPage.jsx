import React, { useState } from 'react';
import Clock from '../Clock/Clock';
import MySelector from '../MySelector';
import PriceList from '../PriceList';

export default function TradingPage({ setHistory }) {
  const [buyPrice, setBuyPrice] = React.useState(0);
  const [sellPrice, setSellPrice] = React.useState(0);
  const [select, setSelect] = useState();
  return (
    <div style={{ margin: 'auto', maxWidth: '60vw' }}>
      <Clock />
      <MySelector setSelect={setSelect} setBuyPrice={setBuyPrice} setSellPrice={setSellPrice} />
      <PriceList
        setHistory={setHistory}
        // time={time}
        select={select}
        buyPrice={buyPrice}
        sellPrice={sellPrice}
      />
    </div>
  );
}
