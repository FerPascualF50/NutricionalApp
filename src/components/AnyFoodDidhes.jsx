import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
    <Grid align='center' direction ='row' >
      <Paper >
        <Autocomplete
          id='AnyFoodDidhes'
          freeSolo
          options={anyFoodDishes.map(foodDish => foodDish.title)}
          renderInput={params => (
            <TextField
              {...params}
              label='foods'
              margin='normal'
              align='center'
              justify='center'
              variant='outlined'
            />
          )}
        />
        <IconButton
          size='small'
          variant="contained"
          onClick={() => getFoods()}>GO
        </IconButton>
      </Paper>
    </Grid>
  )

}

export default AnyFoodDidhes;
