import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ name, filter }) => {
  return (
    <>
      <TextField
        label='Search by currency code'
        type='search'
        value={name}
        onChange={(e) => filter(e.target.value)}
        className='input'
        variant='outlined'
      />
    </>
  );
};

export default Search;
