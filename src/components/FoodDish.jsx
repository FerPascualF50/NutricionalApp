import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const FoodDish = ({label, image, calories, ingredients}) => (
  <Grid  item xs={12} sm={6} md={4}  >
    <Paper align='center' variant="outlined" >
      <h4>{label}</h4>
      <img src={image} alt={label}  />
      <h3>{`${Math.trunc(calories)} calories`}</h3>
      <h4>Ingredients</h4>
      <ul>
        {
          ingredients.map((ingredeint, index) => {
            const { text } = ingredeint;
            return (
              <li key={index}> &nbsp;&nbsp;{text}</li>
            );
          }
          )}
      </ul>
    </Paper>
  </Grid>
)

export default FoodDish;
