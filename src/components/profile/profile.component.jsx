import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import './profile.styles.scss';
import UserContext from '../../contexts/user.context';
import QUERY_USER from '../../graphql/queries/user';

const Profile = () => {
  const nickName = useContext(UserContext);
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { login: nickName },
  });

  if (loading) return <div>Loading</div>;
  if (error) {
    return <div>Error</div>;
  }

  const { user } = data;
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
