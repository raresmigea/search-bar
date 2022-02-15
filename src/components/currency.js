import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import img from '../flags/ad.png';
const Currency = (data) => {
  //   console.log('Currency data: ', data);
  const flag = `../flags/${data.data.currency
    .substring(0, 2)
    .toLowerCase()}.png`;
  console.log('fff ', flag);
  return (
    <ListItem style={{ height: 100 }}>
      <div>
        <div>Currency: {data.data.currency}</div>
        <div>Name: {data.data.nameI18N}</div>
        <div>Buy: {data.data.exchangeRate?.buy}</div>
        <div>Sell: {data.data.exchangeRate?.sell}</div>
        {/* <img src={flag} alt='this is a flag' /> */}
        <img src={img} alt='this is a flag' />
      </div>
    </ListItem>
  );
};

export default Currency;
