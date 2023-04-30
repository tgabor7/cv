import React from 'react';
import Button from './button';
import { api } from '~/utils/api';

const Card: React.FC = () => {

  const addSkill = api.example.addSkill.useMutation();
  return (
    <div className='bg-white rounded p-2 drop-shadow-sm min-w-1500'>
      <div className='flex'>
        <h2 className='text-3xl mr-3 border-b-2 border-indigo-500'>
          Experience
        </h2>
        <Button
          onClick={() => addSkill.mutate({ name: 'test' })}
        >
          Add
        </Button>
      </div>
      <div className='pt-2'>
        <h3 className='text-2xl pb-2 border-b-2 border-indigo-500'>
          Company0
        </h3>
        <h3 className='text-2xl pb-2 border-b-2 border-indigo-500'>
          Company1
        </h3>
        <h3 className='text-2xl pb-2 border-b-2 border-indigo-500'>
          Company2
        </h3>
        <h3 className='text-2xl pb-2 border-b-2 border-indigo-500'>
          Company3
        </h3>
      </div>
    </div>
  );
}

export default Card;
