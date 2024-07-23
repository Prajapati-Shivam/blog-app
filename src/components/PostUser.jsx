import React from 'react';
import { getUser } from '@/lib/data';

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <p className='text-gray-400 italic'>
      - {user?.username} on {new Date(user?.createdAt).toLocaleDateString()}
    </p>
  );
};

export default PostUser;
