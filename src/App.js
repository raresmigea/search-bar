import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Fetch from './components/fetch';
// import useGetData from './components/use-get-data';
const queryClient = new QueryClient({});

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
