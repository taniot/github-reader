import React from 'react';
import './layout.styles.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <header></header>
    {children}
  </div>
);

export default Layout;
