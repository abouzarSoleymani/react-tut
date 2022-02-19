import './App.css';
import { useForm } from 'react-hook-form';

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
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">
          firstName:
          <input defaultValue={defaultValues.firstName} id="firstname" {...register('firstName')} />
        </label>
        <label htmlFor="lastname">
          lastname:
          <input defaultValue={defaultValues.lastName} id="lastname" {...register('lastName', { required: 'this is required', minLength: { value: 10, message: 'must 10' } })} />
        </label>
        {errors.lastName && errors.lastName.message}
        <label htmlFor="age">
          age:
          <input id="age" {...register('age', { required: 'this is required', pattern: { value: /\d+/, message: 'pattren' } })} />
        </label>
        {errors.age && errors.age.message}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
