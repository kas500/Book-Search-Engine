import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider  client ={client}>
       <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<SearchBooks/>} />
          <Route exact path='/saved' lement={<SavedBooks />} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
      </Router>
  </ApolloProvider>
  );
}

export default App;
