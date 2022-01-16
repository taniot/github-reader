import React from 'react';

//Components
import Layout from './components/layout/layout.component';
import Profile from './components/profile/profile.component';
import ReposList from './components/repos-list/repos-list.component';

function App() {
  return (
    <Layout>
      <h1>MVST Github Light</h1>
      <Profile />
      <ReposList />
    </Layout>
  );
}

export default App;
