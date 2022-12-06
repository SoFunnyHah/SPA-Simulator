import React, { useState } from 'react';
import Clock from '../Clock/Clock';
import MySelector from '../MySelector';
import PriceList from '../PriceList';

export default function TradingPage() {
  const [select, setSelect] = useState();
  return (
    <div style={{ margin: 'auto', maxWidth: '60vw' }}>
      <Clock />
      <MySelector setSelect={setSelect} />
      <PriceList
        select={select}
      />
    </div>
  );
}
