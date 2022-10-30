
import PropTypes from 'prop-types';
import { IoAccessibility } from "react-icons/io5";
import { ItemList,Icon } from "./friend.styled";


export const FriendList = ({ friends }) =>
{
    return <>
        {friends.map(({ avatar, name, isOnline, id }) =>
    <ItemList key={id}>
        <Icon isOnline={isOnline}><IoAccessibility /></Icon>
        <img src={avatar} alt="User avatar" width="50" />
        <p>{name}</p>
    </ItemList>
        )}
    </>
}

ItemList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};