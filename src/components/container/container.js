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
  const [list, setList] = useState([]);
  const [searchedList, searchedSetList] = useState([]);
  const [name, setName] = useState('');
  const query = 'getCurrencies';
  const { isLoading, data, isSuccess, isError } = useQuery(query, async () => {
    const data = await axios(
      'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'
    );
    const response = data.data.fx;
    return response;
  });

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = searchedList.filter((user) => {
        return user.currency.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setList(results);
    } else {
      setList(data);
    }
    setName(keyword);
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setList(data);
      searchedSetList(data);
    }
  }, [isSuccess, isLoading, data]);

  return (
    <>
      {!isLoading ? (
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
          ) : isError ? (
            <>something went wrong</>
          ) : null}
        </Box>
      ) : (
        <div className='no-results'>loading...</div>
      )}
    </>
  );
};

export default Container;
