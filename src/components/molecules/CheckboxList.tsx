import React, { FC, PropsWithChildren } from "react";
import { Checkbox } from "@atoms/Checkbox";

export const CheckboxList: FC<PropsWithChildren<any>> = ({ contentLink }) => {
  const { todo } = contentLink;
  return (
    <div className='px-6 pb-5'>
      <fieldset className='space-y-5'>
        {todo.map(({ title, description, uuid }: any) => {
          return <Checkbox key={uuid} title={title} description={description} uuid={uuid} />;
        })}
      </fieldset>
    </div>
  );
};
