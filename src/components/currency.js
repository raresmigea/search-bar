import React from 'react';

import ListItem from '@material-ui/core/ListItem';

const Currency = (data) => {
  //   console.log('Currency data: ', data);
  return (
    <ListItem>
      <div>{data.data.currency}</div>
      <div>{data.data.exchangeRate?.middle}</div>
    </ListItem>
  );
};

export default Currency;
