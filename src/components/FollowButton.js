import React from 'react';
import Button from './Button';
import { useAccount } from '../context/AccountContext';

// Follow / Following toggle for any person. Renders nothing for the signed-in user themselves.
export default function FollowButton({ person, size = 'sm', fullWidth = false }) {
  const { isFollowing, toggleFollow } = useAccount();
  if (!person || person.id === 'me') return null;
  const following = isFollowing(person.id);
  return (
    <Button
      title={following ? 'Following' : 'Follow'}
      icon={following ? 'checkmark' : 'person-add-outline'}
      variant={following ? 'secondary' : 'accent'}
      size={size}
      fullWidth={fullWidth}
      accessibilityLabel={`${following ? 'Unfollow' : 'Follow'} ${person.name}`}
      onPress={() => toggleFollow(person.id)}
    />
  );
}
