import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function MySelector({ setBuyPrice, setSellPrice, setSelect }) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [refresh, setRefresh] = useState();
  const selectHandler = (currancy) => {
    console.log('CLICKED');
    console.log('currancy', currancy);
    setBuyPrice(currancy);
    setSellPrice(currancy);
    setRefresh(() => setTimeout(function func() {
      setBuyPrice((Math.random() * (currancy - currancy * 0.98) + (currancy * 0.98)).toFixed(4));
      setSellPrice((Math.random() * (currancy - currancy * 0.98) + (currancy * 0.98)).toFixed(4));
      console.log('with selected', currancy);
      setRefresh(() => setTimeout(func, 5000));
    }, 5000));
  };
  useEffect(() => () => clearTimeout(refresh), []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
        >
          <MenuItem onClick={() => { selectHandler(0.016); clearTimeout(refresh); setSelect('RUR / USD'); }} value={1}>
            RUR / USD
          </MenuItem>
          <MenuItem onClick={() => { selectHandler(0.015); clearTimeout(refresh); setSelect('RUR / EUR'); }} value={2}>
            RUR / EUR
          </MenuItem>
          <MenuItem onClick={() => { selectHandler(62.5); clearTimeout(refresh); setSelect('USD / RUR'); }} value={3}>
            USD / RUR
          </MenuItem>
          <MenuItem onClick={() => { selectHandler(0.95); clearTimeout(refresh); setSelect('USD / EUR'); }} value={4}>
            USD / EUR
          </MenuItem>
          <MenuItem onClick={() => { selectHandler(65.86); clearTimeout(refresh); setSelect('EUR / RUR'); }} value={5}>
            EUR / RUR
          </MenuItem>
          <MenuItem onClick={() => { selectHandler(1.05); clearTimeout(refresh); setSelect('EUR / USD'); }} value={6}>
            EUR / USD
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
