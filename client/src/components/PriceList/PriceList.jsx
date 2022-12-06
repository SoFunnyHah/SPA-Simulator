import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { setHistory } from '../../redux/actions/historyActions';

export default function PriceList({
  select,
}) {
  const [form, setForm] = useState({
    method: '',
    price: '',
    selected: '',
    volume: 0,
  });
  //
  const buyPrice = useSelector((state) => state.buyPrice);
  const sellPrice = useSelector((state) => state.sellPrice);
  //

  const clickHandler = (obj) => {
    setForm(() => ({ ...obj, selected: select }));
  };
  console.log('form', form);
  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  // const submitHandler = () => {
  //   setHistory((prev) => ([...prev,
  //     {
  //       ...form, time: new Date().toLocaleTimeString(),
  //     },
  //   ]));
  // };
  const submitHandler = () => {
    dispatch(setHistory({ ...form, time: new Date().toLocaleTimeString() }));
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
