import React from 'react';
import HistoryRow from '../HistoryRow/HistoryRow';

export default function ArchivePage({ history }) {
  console.log(history);
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
        {history?.map((el, i) => (
          <HistoryRow
            key={i}
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
