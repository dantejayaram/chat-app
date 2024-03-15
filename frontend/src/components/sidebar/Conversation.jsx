import React from 'react';

const Conversation = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
            alt='user avatar'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>Jai</p>
          <span className='text-x1'>😘</span>
        </div>
      </div>
    </div>
  );
}

export default Conversation;


/*
import React from 'react';

const Conversation = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
            alt='user avatar'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>Jai</p>
          <span className='text-x1'>😘</span>
        </div>
      </div>
    </div>
  );
}

export default Conversation;


*/