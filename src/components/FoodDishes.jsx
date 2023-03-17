import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid';
import FoodDish from './FoodDish';
import NoResult from './NoResults';

const FoodDishes = ({ hits }) => (
  <Fragment>
    {
      hits ? (
        <Grid container spacing={3} justify="center">
          {hits.map(hit => {
            const { uri, label, image, calories, ingredients } = hit.recipe;
            return (
              <FoodDish
                key={uri}
                label={label}
                image={image}
                calories={calories}
                ingredients={ingredients}
              />
            );
          })}
        </Grid>
      ) : (
        <NoResult />
      )}
  </Fragment>
);

export default FoodDishes;
