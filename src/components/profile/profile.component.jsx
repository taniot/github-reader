import React from 'react';
import './profile.styles.scss';

const Profile = () => (
  <section className='profile-container'>
    <div style={{ display: 'flex' }}>
      <div className='profile-avatar'>Avatar</div>
      <div className='profile-info'>
        <h1>
          <span className='fullName'>Name Surname</span>
          <span className='nickName'>nickname</span>
        </h1>

        <div className='profile-bio'>bio</div>
      </div>
    </div>
  </section>
);
export default Profile;
