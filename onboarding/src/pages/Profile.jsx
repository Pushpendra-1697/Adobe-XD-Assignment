import React from 'react';

const Profile = () => {
  return (
    <div className='profile'>
      <h1>Account Settings</h1>
      <div>
        <div>
          <div>
            <img src={'./profile.png'} alt='Profile' />
            <img id='camara' src='./camara.svg' alt='camara' />
          </div>
          <div>
            <h4>Marry Doe</h4>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam in perspiciatis reprehenderit quam impedit labore
        </div>
      </div>
    </div>
  );
}

export default Profile;