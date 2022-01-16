import React, { useState } from 'react';

//Components
import Layout from './components/layout/layout.component';
import Profile from './components/profile/profile.component';
import ReposList from './components/repos-list/repos-list.component';

import UserContext from './contexts/user.context';

const App = () => {
  const [nickname] = useState('taniot');

  return (
    <UserContext.Provider value={nickname}>
      <Layout>
        <Profile />
        <ReposList />
      </Layout>
    </UserContext.Provider>
  );
};

export default App;
