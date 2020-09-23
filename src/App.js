import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';


class App extends React.Component {



  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetail}/> 
          </div>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
