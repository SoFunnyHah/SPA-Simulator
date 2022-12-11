import React from 'react';

export default function HistoryRow({
  method, price, selected, volume, time,
}) {
  return (
    <tr>
      <th scope="row">{method}</th>
      <td>{price}</td>
      <td>{selected}</td>
      <td>{volume}</td>
      <td>{time}</td>
    </tr>
  );
}
