import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './currency.css';

const getFlag = (currency) => {
  let flag = null;
  try {
    flag = require(`../../flags/${currency.substring(0, 2).toLowerCase()}.png`);
  } catch {
    flag = null;
  }
  return flag;
};

const Currency = (data) => {
  const flag = getFlag(data.data.currency);
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
          {flag ? (
            <>
              <div>Flag:</div>
              <img src={flag} alt='this is a flag' />
            </>
          ) : (
            <div>flag not found</div>
          )}
        </div>
      </div>
    </ListItem>
  );
};

export default Currency;
