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
          <div>
            <span className='label'>Currency: </span>
            {data.data.currency ?? 'no data'}
          </div>
          <div>
            <span className='label'>Full Name: </span>
            {data.data.nameI18N ?? 'no data'}
          </div>
          <div>
            <span className='label'>Buy: </span>
            {data.data.exchangeRate?.buy ?? 'no data'}
          </div>
          <div>
            <span className='label'>Sell: </span>
            {data.data.exchangeRate?.sell ?? 'no data'}
          </div>
        </div>
        <div className='currency-item-column'>
          {flag ? (
            <>
              <div>
                <span className='label'>Flag</span>
              </div>
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
