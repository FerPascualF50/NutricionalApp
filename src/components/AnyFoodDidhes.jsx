import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import { anyFoodDishes } from '../constants';

const AnyFoodDidhes = ({ getData }) => {
  const [query, setQuery] = useState();

  const getFoods = () => {
    const title = document.querySelector(`#AnyFoodDidhes`).value.toLowerCase().trim();
    if (query !== title) {
      setQuery(title);
      getData(title);
    }
  };

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    align='center'
    ><Grid item xs={6} md={4}>
        <Autocomplete
          id='AnyFoodDidhes'
          freeSolo
          options={anyFoodDishes.map(foodDish => foodDish.title)}
          renderInput={params => (
            <TextField
              {...params}
              label='Select your foods and click "GO"'
              margin='normal'
              variant='outlined'
            />
          )}
        />
        <IconButton
          size='small'
          variant="contained"
          onClick={() => getFoods()}>GO
        </IconButton>
    </Grid>
  </Grid>
  )
}

export default AnyFoodDidhes;
