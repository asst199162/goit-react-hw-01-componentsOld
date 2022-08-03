import PropTypes from 'prop-types';
import { ProfileCard } from 'components/profile/profile'
import user from 'components/user.json'
export const App = () => {
  return (
    
    <>
        <ProfileCard users = {user}/>
    </>
    
  );
};
