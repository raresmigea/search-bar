import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Currency from './currency';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const Fetch = () => {
  const { isLoading, isError, data, error, refetch, isSuccess } = useQuery(
    'fetch',
    async () => {
      const data = await axios(
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

  console.log('data: ', data);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setList(data.data.fx);
    }
  }, [isSuccess, isLoading, data.data.fx]);

  console.log('list ', list);

  return (
    <>
      {isSuccess && (
        <Paper style={{ maxHeight: 400, overflow: 'auto' }}>
          <List>
            {list.map((a, index) => (
              <Currency data={a} key={index} />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default Fetch;
