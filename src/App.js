import React from 'react';
import './App.css';
//Components
import Profile from './components/profile/profile.component';
import ReposList from './components/repos-list/repos-list.component';

function App() {
  return (
    <div className='App'>
      <h1>MVST Github Light</h1>
      <Profile />
      <ReposList />
    </div>
  );
}

export default App;
