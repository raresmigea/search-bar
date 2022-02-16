import React from 'react';
import './currency.css';
import ListItem from '@material-ui/core/ListItem';
const Currency = (data) => {
  let flag = null;

  try {
    flag = require(`../flags/${data.data.currency
      .substring(0, 2)
      .toLowerCase()}.png`);
  } catch {
    flag = 'ad.png';
  }

  console.log('fff ', flag);
  return (
    <ListItem className='list-item'>
      <div className='currency-item'>
        <div className='currency-item-column'>
          <div>Currency: {data.data.currency}</div>
          <div>Full Name: {data.data.nameI18N}</div>
          <div>Buy: {data.data.exchangeRate?.buy}</div>
          <div>Sell: {data.data.exchangeRate?.sell}</div>
        </div>
        <div className='currency-item-column'>
          <div>Flag:</div>
          <img src={flag} alt='this is a flag' />
        </div>
      </div>
    </ListItem>
  );
};

export default Currency;
