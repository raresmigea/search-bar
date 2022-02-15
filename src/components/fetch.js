import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Currency from './currency';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const Fetch = () => {
  const { isLoading, isError, data, error, refetch, isSuccess } = useQuery(
    'joke',
    async () => {
      const { data } = await axios(
        'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'
      );
      return data;
    }
  );

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (isError) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <>
      {isSuccess && (
        <Paper style={{ maxHeight: 400, overflow: 'auto' }}>
          <List>
            {data.fx.map((a, index) => (
              <Currency data={a} key={index} />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default Fetch;
