import React, { useState } from 'react';

//Components
import Layout from './components/layout/layout.component';
import Profile from './components/profile/profile.component';
import Repositories from './components/repositories/repositories.component';

import UserContext from './contexts/user.context';

const App = () => {
  const [nickname] = useState('kentcdodds');

  return (
    <UserContext.Provider value={nickname}>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </UserContext.Provider>
  );
};

export default App;
