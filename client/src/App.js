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


// Apollo Client Setup 
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql" //apollo knows we will be making requests to this end-point from our application
})

const App = () => {

  const [productsInBasket, setProducts] = useState(() => {
    const localData = localStorage.getItem("productsInBasket");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsInBasket", JSON.stringify(productsInBasket))
  }, [productsInBasket])

  const addProduct = (product) => {
    setProducts(productsInBasket.concat(product))
    console.log(">>>>>", productsInBasket)
  }

  const clearBasket = () => {
    localStorage.removeItem("productsInBasket")
  }


  return (
    <Router>
      <ApolloProvider client={client}>

        <div className="App">

          <Nav basketSize={productsInBasket.length} />

          <Banner />

          {/* <ProductList addProduct={addProduct} /> */}

          <Switch>
            <Route path="/" render={() => <ProductList addProduct={addProduct} />} exact />
            {/* <Route path="/" render={(props) => console.log(">>", props)} />} exact />  */}
            <Route path="/basket" component={Basket} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>

        </div>

      </ApolloProvider>
    </Router>

  );
}

export default App;
