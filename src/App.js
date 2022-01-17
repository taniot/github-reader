import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
//Components
import Layout from './components/layout/layout.component';
import Profile from './components/profile/profile.component';
import Repositories from './components/repositories/repositories.component';
import Loader from './components/loader/loader.component';
import ErrorMessage from './components/error/error.components';
//Contexts
import UserContext from './contexts/user.context';
//Queries
import QUERY_USER from './graphql/queries/user';

const App = () => {
  const [nickname] = useState('kentcdodds');

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { login: nickname },
  });

  if (loading) return <Loader text='Loading user information...' />;
  if (error) {
    return <ErrorMessage type='full'>Error: {error.message}</ErrorMessage>;
  }

  return (
    <UserContext.Provider value={data.user}>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </UserContext.Provider>
  );
};

export default App;
