import './App.css';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function App() {
  const defaultValues = {
    firstName: 'bifefefefell',
    lastName: 'luoffffdddd',
  };

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    alert(JSON.stringify(data));
  };
  return (
    <Box
      sx={{
        mt: 10,
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="firstName"
            fullWidth
            multiline
            maxRows={4}
            defaultValue={defaultValues.firstName}
            {...register('firstName')}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="lastName"
            multiline
            maxRows={4}
            defaultValue={defaultValues.lastName}
            {...register('lastName', { required: 'this is required', minLength: { value: 10, message: 'must 10' } })}
          />
        </Grid>
        <Grid item align="center">
          {errors.lastName && errors.lastName.message}
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="age"
            multiline
            maxRows={4}
            defaultValue={defaultValues.age}
            {...register('age', { required: 'this is required', pattern: { value: /\d+/, message: 'pattren' } })}
          />
        </Grid>
        <Grid item align="center" marginBottom={4}>
          {errors.age && errors.age.message}
        </Grid>
        <Button type="submit" variant="contained">submit</Button>
      </Grid>
    </Box>
  );
}

export default App;
