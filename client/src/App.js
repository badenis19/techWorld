import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // binds apollo to React
// import { getProductQuery, getProductsQuery  } from './queries/queries';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import Basket from './components/Basket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Apollo Client Setup 
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql" //apollo knows we will be making requests to this end-point from our application
})


function App() {
  return (
    
      <ApolloProvider client={client}>

        <div className="App">
          <Nav />
          <Basket />
          <ProductList />
        </div>

      </ApolloProvider>
    
  );
}

export default App;
