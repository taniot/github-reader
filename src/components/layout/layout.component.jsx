import React from 'react';
import './layout.styles.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <header></header>
    <section className='children'>{children}</section>
  </div>
);

export default Layout;
