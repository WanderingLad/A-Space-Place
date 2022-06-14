import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleProvider from './utils/Module/ModuleContext';

const httpLink = createHttpLink({ uri: '/graphql' });

const authlink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
})
const client = new ApolloClient(
  { link: authlink.concat(httpLink), cache: new InMemoryCache() }
);

function App() {
  return (
    <ApolloProvider client={client}>
      <ModuleProvider>
        <Router>
          <div id="main-div" className="min-100-vh bg-black d-flex">
            <div className="align-self-center min-100-vw">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path='*'
                  element={<h1 className='display-2'>Wrong page!</h1>}
                />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </ModuleProvider>
    </ApolloProvider>
  );
}

export default App;
