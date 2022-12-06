import React from 'react';
import { useSelector } from 'react-redux';
import HistoryRow from '../HistoryRow/HistoryRow';

export default function ArchivePage() {
  const history = useSelector((state) => state.history);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Side</th>
          <th scope="col">Price</th>
          <th scope="col">Instrument</th>
          <th scope="col">Volume</th>
          <th scope="col">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {history?.map((el, index) => (
          <HistoryRow
            key={index}
            method={el.method}
            price={el.price}
            selected={el.selected}
            volume={el.volume}
            time={el.time}
          />
        ))}
      </tbody>
    </table>
  );
}
