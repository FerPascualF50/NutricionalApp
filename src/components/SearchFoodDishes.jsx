import React, { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import AnyFoodDishes from './AnyFoodDidhes';
import PredefinedFoodDishes from './PredefinedFoodDishes';
import FoodDishes from './FoodDishes';
import { getApiUrl } from '../constants/index';


const SearchFoodDishes = () => {
  const [hits, setHits] = useState();


  const getData = query => {
    query && fetch(getApiUrl(query))
      .then(data => data.json())
      .then(res => setHits(res.hits)) 
      .catch(err => console.log(err))

  }

  return (
    
    <Fragment >
        <Grid  >
          <AnyFoodDishes  getData={getData} />
          <PredefinedFoodDishes getData={getData} setHits={setHits} />
        </Grid>
      {hits && <FoodDishes  hits={hits} ></FoodDishes>}
    </Fragment>
  );

};

export default SearchFoodDishes;