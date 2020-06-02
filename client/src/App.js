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
    const localData = localStorage.getItem("productsInBasket");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsInBasket", JSON.stringify(productsInBasket))
  }, [productsInBasket])

  const addProduct = (product) => {
    setProductsInBasket(productsInBasket.concat(product))
  }

  // const removeProduct = (state, basket) => {
  const removeProduct = (product) => {
    console.log(product)
    // basket = JSON.parse(localStorage.getItem('productsInBasket'));

    // // console.log(basket[0]);
    // basket.splice(0, 1);
    // localStorage.setItem("productsInBasket", JSON.stringify(basket));
  }

  // removeAccount(state, account){
  //   const accounts = JSON.parse(localStorage.getItem('accounts'));
  //   delete accounts[account.apikey];
  //   localStorage.setItem("accounts", JSON.stringify(accounts));
  // }



  

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
              render={() => <Basket basket={productsInBasket} setProductsInBasket={setProductsInBasket} removeProduct={removeProduct}  />}
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
