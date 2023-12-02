import { FC, PropsWithChildren } from "react";

export const Checkbox: FC<PropsWithChildren<any>> = ({ title, description, uuid }) => {
  return (
    <>
      <legend className='sr-only'>{uuid}</legend>
      <div className='relative flex items-start'>
        <div className='flex h-5 items-center'>
          <input
            id='comments'
            aria-describedby='comments-description'
            name='comments'
            type='checkbox'
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor='comments' className='font-medium text-gray-700'>
            {title}
          </label>
          <p id='comments-description' className='text-gray-500'>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
