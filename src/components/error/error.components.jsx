import React from 'react';
import './error.styles.scss';

const ErrorMessage = ({ children, ...props }) => {
  const type = props.type || '';

  return (
    <div className={`error-container ${type}`}>
      <div className='error-message'>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
