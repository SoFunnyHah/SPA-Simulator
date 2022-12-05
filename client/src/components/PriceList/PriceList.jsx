import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';

export default function PriceList({
  buyPrice, sellPrice, select, time, setHistory,
}) {
  const [form, setForm] = useState({
    method: '',
    price: '',
    selected: '',
  });
  const [input, setInput] = useState(0);

  const clickHandler = (obj) => {
    setForm(() => ({ ...obj, selected: select }));
  };
  console.log('form', form);
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log('changed:', input);
  };
  const submitHandler = () => {
    console.log('INPUT IS:', input);
    setHistory((prev) => ([...prev,
      {
        volume: input.volume, price: form.price, selected: form.selected, method: form.method, time,
      },
    ]));
  };
  return (
    <>
      <Row>
        <Col style={{ color: 'green', fontSize: '3em' }} onClick={() => clickHandler({ method: 'BUY', price: buyPrice })} data-bs-toggle="modal" data-bs-target="#exampleModal">
          BUY
          <br />
          {buyPrice}
        </Col>
        <Col style={{ color: 'red', fontSize: '3em' }} onClick={() => clickHandler({ method: 'SELL', price: sellPrice })} data-bs-toggle="modal" data-bs-target="#exampleModal">
          SELL
          <br />
          {sellPrice}
        </Col>
      </Row>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Make order</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p style={{ display: 'inline-block' }}>{form.method}</p>
              {' '}
              <p style={{ display: 'inline-block' }}>{form.price}</p>
              {' '}
              <p style={{ display: 'inline-block' }}>{form.selected}</p>
              <label htmlFor="exampleInputEmail1" className="form-label" style={{ display: 'block' }}>
                Volume
                <input onChange={changeHandler} name="volume" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button onClick={submitHandler} type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
