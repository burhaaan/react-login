import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';

import Loader from 'react-loader-spinner';
const Spinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={150}
      width={150}
      timeout={2500} //2.5 secs
    />
  );
};
export default Spinner;
