import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
  return (
    <div className='error-page'>
        <h1>Oops!!!</h1>
        <h2>Something went wrong</h2>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
  )
};

export default Error;
