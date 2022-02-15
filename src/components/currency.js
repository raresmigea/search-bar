import React from 'react';

import ListItem from '@material-ui/core/ListItem';

const Currency = (data) => {
  //   console.log('Currency data: ', data);
  return (
    <ListItem style={{ height: 100 }}>
      <div>
        <div>Currency: {data.data.currency}</div>
        <div>Name: {data.data.nameI18N}</div>
        <div>Buy: {data.data.exchangeRate?.buy}</div>
        <div>Sell: {data.data.exchangeRate?.sell}</div>
      </div>
    </ListItem>
  );
};

export default Currency;
