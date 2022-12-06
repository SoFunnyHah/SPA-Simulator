import React from 'react';
import Clock from '../Clock/Clock';
import MySelector from '../MySelector';
import PriceList from '../PriceList';

export default function TradingPage() {
  return (
    <div style={{ margin: 'auto', maxWidth: '60vw' }}>
      <Clock />
      <MySelector />
      <PriceList />
    </div>
  );
}
