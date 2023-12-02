import { LinkIcon } from "@heroicons/react/24/outline";
import React, { FC, PropsWithChildren } from "react";
import { Card } from "@atoms/Card/Card";
import { CheckboxList } from "@molecules/CheckboxList";

export const Link: FC<PropsWithChildren<any>> = ({ contentLink }) => {
  const { path, description, name, todo } = contentLink;
  return (
    <div
      className={
        todo ? "relative flex-col items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm" : ""
      }
    >
      <div
        className='hover:border-gray-400, relative flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:bg-gray-50'
        style={
          todo
            ? {
                borderWidth: "0px",
                borderBottomWidth: "1px",
              }
            : {}
        }
      >
        <Card.Link path={path} title={description}>
          <Card.Content title={name} subtitle={description} customIcon={<LinkIcon className='h-6 w-6 text-blue' />} />
        </Card.Link>
      </div>

      {todo && <CheckboxList contentLink={contentLink} />}
    </div>
  );
};
