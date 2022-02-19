import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">
          firstName:
          {' '}
          <input id="firstname" {...register('firstName')} />
        </label>
        <label htmlFor="lastname">
          lastname:
          <input id="lastname" {...register('lastName', { required: true })} />
        </label>
        {errors.lastName && <p>Last name is required.</p>}
        <label htmlFor="age">
          age:
          <input id="age" {...register('age', { pattern: /\d+/, type: Number })} />
        </label>
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
