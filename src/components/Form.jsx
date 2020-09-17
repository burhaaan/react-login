import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validateLogin';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const Form = () => {
  const { handleChange, handleSubmit, values, errors, Loading } = useForm(
    submit,
    validate
  );
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: grey;
  `;
  function submit() {
    setTimeout(() => {
      toast.success('Submitted successfully');
    }, 1500);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={60}
          color={'#00BFFF'}
          loading={Loading.value}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <p className="h3 text-center">Safepay</p>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group mx-sm-3 mb-2">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control border-top-0 border-left-0 border-right-0 pl-0"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                    ></input>

                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control border-top-0 border-left-0 border-right-0 pl-0"
                      placeholder=".........."
                      value={values.password}
                      onChange={handleChange}
                    ></input>
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-dark mt-3 spinner">
                      LOG IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
