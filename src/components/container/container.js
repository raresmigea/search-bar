import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Currency from '../currency/currency';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import './container.css';

const Container = () => {
  const { isLoading, isError, data, error, refetch, isSuccess } = useQuery(
    'fetch',
    async () => {
      const data = await axios(
        'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'
      );
      return data;
    }
  );

  const [list, setList] = useState([]);
  const [searchedList, searchedSetList] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setList(data.data.fx);
      searchedSetList(data.data.fx);
    }
  }, [isSuccess, isLoading, data?.data?.fx]);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = searchedList.filter((user) => {
        return user.currency.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setList(results);
    } else {
      setList(data.data.fx);
    }

    setName(keyword);
  };

  return (
    <Box variant='outlined'>
      <TextField
        label='Search by currency code'
        type='search'
        value={name}
        onChange={filter}
        className='input'
        variant='outlined'
      />
      {isSuccess ? (
        <Paper className='paper' variant='outlined'>
          <List className='list'>
            {list.length ? (
              list.map((element, index) => (
                <Currency data={element} key={`currency-${index}`} />
              ))
            ) : (
              <div className='no-results'>no found results</div>
            )}
          </List>
        </Paper>
      ) : null}
    </Box>
  );
};

export default Container;
