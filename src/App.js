import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Container from './components/container/container';
const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Container />
      </div>
    </QueryClientProvider>
  );
}

export default App;
