import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // binds apollo to React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Component */
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import Basket from './components/Basket';
import Contact from './components/Contact';
import Banner from './components/Banner';

/* Bootstrap Guideline*/
/* import Button from 'react-bootstrap/Button'; */
import { Container, Col, Row, Button } from 'react-bootstrap';

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql" //apollo knows we will be making requests to this end-point from our application
})

const App = () => {

  const [productsInBasket, setProductsInBasket] = useState(() => {
    const localData = localStorage.getItem("productsInBasket");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsInBasket", JSON.stringify(productsInBasket))
  }, [productsInBasket])

  const addProduct = (product) => {
    setProductsInBasket(productsInBasket.concat(product))
  }

  return (
    <Router>
      <ApolloProvider client={client}>

        <div className="App">

          <Nav basketSize={productsInBasket.length} />
          
          <Banner />

          <Switch>

            <Route
              path="/"
              render={() => <ProductList addProduct={addProduct} />}
              exact
            />

            <Route
              path="/basket"
              render={() => <Basket basket={productsInBasket} setProductsInBasket={setProductsInBasket}  />}
              exact
            />

            <Route
              path="/contact"
              component={Contact}
              exact
            />

          </Switch>

        </div>

      </ApolloProvider>
    </Router>

  );
}

export default App;
