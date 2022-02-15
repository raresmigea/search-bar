import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Fetch from './components/fetch';
const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Fetch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
