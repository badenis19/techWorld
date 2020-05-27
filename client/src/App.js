import React from 'react';
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
  return (
    <Router>
      <ApolloProvider client={client}>

        <div className="App">
          <Nav />
          <Banner />

          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/basket" component={Basket} exact/>
            <Route path="/contact" component={Contact} exact/>
          </Switch>

        </div>

      </ApolloProvider>
    </Router>

  );
}

export default App;
