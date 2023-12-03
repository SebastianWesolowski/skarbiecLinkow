import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContextProvider";

export const Checkbox: FC<PropsWithChildren<any>> = ({ title, description, uuid }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { addTask, taskExists } = useAppContext();
  const handleCheckboxChange = (uuid: any) => {
    addTask(uuid);
    setIsChecked((prevState: any) => !prevState);
  };

  useEffect(() => {
    setIsChecked(taskExists(uuid));
  }, [setIsChecked, taskExists, uuid]);

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
            checked={isChecked}
            onChange={() => {
              handleCheckboxChange(uuid);
            }}
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
