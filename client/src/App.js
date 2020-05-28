import React, { useState } from 'react';
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

  const [basketSize, setBasketSize] = useState([]);

  const [products, setProducts] = useState([]);


  const addOne = () => {
    console.log("OK")
    setBasketSize(basketSize.concat(2));
  }

  const addProduct = (product) => {
    setProducts(products.concat(product))
    console.log(">>>>>", products)
  }


  return (
    <Router>
      <ApolloProvider client={client}>

        <div className="App">

          <button onClick={() => addOne()} >Add</button>

          <Nav basketSize={products} />

          <Banner />

          <Basket basketSize={basketSize} />
          
          <ProductList addProduct={addProduct} />

          {/* <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/basket" component={Basket} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch> */}

        </div>

      </ApolloProvider>
    </Router>

  );
}

export default App;
