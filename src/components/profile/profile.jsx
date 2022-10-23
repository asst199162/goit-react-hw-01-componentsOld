import PropTypes from 'prop-types';
import { Profile, Avatar, Itemstats, Stats,Text,DescriptionText, AmountStat, } from './profile.style';


export const ProfileCard = ({ users }) => {
    const { username, tag, location,avatar,stats:{followers,views,likes} } = users
    return <Profile >
    <Avatar
      src={avatar}
      alt="User avatar"
        />
  <DescriptionText>
    <Text bold l black>{username }</Text>
    <Text  >@{tag}</Text>
    <Text >{location}</Text>
  </DescriptionText>     



  <Stats>
    <Itemstats>
      <AmountStat gray>Followers</AmountStat>
      <AmountStat bold>{followers}</AmountStat>
    </Itemstats>
    <Itemstats>
      <AmountStat gray>Views</AmountStat>
      <AmountStat bold>{views}</AmountStat>
    </Itemstats>
    <Itemstats noLineBorder>
      <AmountStat gray>Likes</AmountStat>
      <AmountStat bold>{likes}</AmountStat>
    </Itemstats>
  </Stats>
</Profile>
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};