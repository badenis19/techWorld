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
import Footer from './components/Footer';

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql" //apollo knows we will be making requests to this end-point from our application
})

const App = () => {

  // Storing the basket with local Storage
  const [productsInBasket, setProductsInBasket] = useState(() => {
    let localData = localStorage.getItem("productsInBasket"); // String
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsInBasket", JSON.stringify(productsInBasket))
  }, [productsInBasket])

  // Add product to the basket
  const addProduct = (product) => {
    setProductsInBasket(productsInBasket.concat(product))
  }

  // Remove product from basket
  const removeProduct = (productId) => {
    let updatedBasket = [];

    productsInBasket.forEach(item => {
      if (item.id !== productId) {
        updatedBasket.push(item);
      }
    });

    setProductsInBasket(updatedBasket);
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
              render={() => <Basket basket={productsInBasket} setProductsInBasket={setProductsInBasket} removeProduct={removeProduct} />}
              exact
            />

            <Route
              path="/contact"
              component={Contact}
              exact
            />

          </Switch>

          <Footer />

        </div>

      </ApolloProvider>
    </Router>

  );
}

export default App;
