import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Fetch from './components/fetch';
// import useGetData from './components/use-get-data';
const queryClient = new QueryClient({});

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

function App() {
  // const { data, isLoading } = useGetData();
  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);
  // the value of the search field
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Fetch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
