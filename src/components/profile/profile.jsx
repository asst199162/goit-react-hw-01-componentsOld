//import PropTypes from 'prop-types';
import { Profile, Avatar, Itemstats, Stats,Text,DescriptionText } from './profile.style';


export const ProfileCard = ({ users }) => {
    const { username, tag, location,avatar,stats:{followers,views,likes} } = users
    return <Profile >
    <Avatar
      src={avatar}
      alt="User avatar"
        />
  <DescriptionText>
    <Text bold l>{username }</Text>
    <Text >@{tag}</Text>
    <Text >{location}</Text>
  </DescriptionText>     



  <Stats class="stats">
    <Itemstats>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </Itemstats>
    <Itemstats>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </Itemstats>
    <Itemstats>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </Itemstats>
  </Stats>
</Profile>
}