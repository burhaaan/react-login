import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validateLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  function submit() {
    console.log('Submitted Successfully');
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <p className="h4 text-center py-4">Safepay</p>

      <div className="form-group">
        <label> Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
