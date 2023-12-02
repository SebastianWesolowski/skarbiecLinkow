import React, { FC, PropsWithChildren } from "react";
import { Card } from "@atoms/Card/Card";
/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Leslie Alexander",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export const CategorySection: FC<PropsWithChildren<any>> = ({ contentObject }) => {
  const content = contentObject.groupedByCategory;
  return (
    <>
      <div className='mx-auto pb-4'>
        <h1 className='text-3xl font-bold leading-tight text-gray-900'>Kategorie</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {Object.keys(content).map((category, index) => {
          const description = contentObject.meta[category];
          return (
            <div key={category}>
              <Card.CombinedCard title={category} subtitle={description} />
            </div>
          );
        })}
      </div>
    </>
  );
};
