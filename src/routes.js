import React from 'react';
import Layout from './Hoc/Layout';

const Routes = (props) => {
  return (
    <Layout>
      
      {props.children}
      
    </Layout>
      
    
  )
}

export default Routes;
