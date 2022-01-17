import React, { useContext } from 'react';

import './profile.styles.scss';
import UserContext from '../../contexts/user.context';

const Profile = () => {
  const user = useContext(UserContext);
  console.log({ user });
  return (
    <section className='profile-container'>
      <div className='profile'>
        <div className='profile-avatar'>
          <figure>
            <img
              className='avatar-image'
              src={user.avatarUrl}
              alt={user.name}
            />
          </figure>
        </div>
        <div className='profile-info'>
          <h1>
            <span className='fullName'>{user.name}</span>
            <span className='nickName'>{user.login}</span>
          </h1>

          <div
            className='profile-bio'
            dangerouslySetInnerHTML={{ __html: user.bioHTML }}
          />
        </div>
      </div>
    </section>
  );
};
export default Profile;
