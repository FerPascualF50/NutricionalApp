//import logo from './logo.svg';
import React, { Fragment } from 'react';
import Header from './components/Header'
import SearchFoodDishes from './components/SearchFoodDishes'
import Footer from './components/Footer'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
        <Fragment>
            <Header />
            <SearchFoodDishes/>
            <Footer />
        </Fragment>
   
  );

};

export default App;
