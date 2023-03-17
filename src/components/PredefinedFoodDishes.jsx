import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { predefinidedFoodDishes } from '../constants';
import { ToggleButton } from '@mui/material';


const PredefinedFoodDishes = ({ getData, setHits }) => {
  const getFoods = title => {
    predefinidedFoodDishes.map(foodDish => {
      foodDish.selected = foodDish.title === title ? !foodDish.selected : false;
      return !foodDish.selected ? setHits
        : getData(document.querySelector(`#${title}`).value.toLowerCase().trim());

    });

  };


  return (
    <Grid align='center' spacing = {10}>
      <Paper >
        {
          predefinidedFoodDishes.map(foodDish => {
            const { title, selected } = foodDish;
            return (
              <ToggleButton
                key={title}
                id={title}
                value={title}
                selected={selected}
                onClick={() => getFoods(title)}
              >
                {title}
              </ToggleButton>
            );
          })
        }
      </Paper>
    </Grid>
  );
};

export default PredefinedFoodDishes;
