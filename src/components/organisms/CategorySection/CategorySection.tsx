import React, { FC, PropsWithChildren } from "react";
import { Card } from "@atoms/Card/Card";

export const CategorySection: FC<PropsWithChildren<any>> = ({ contentObject }) => {
  const content = contentObject.groupedByCategory;
  return (
    <>
      <div className='mx-auto pb-4'>
        <h1 className='text-2xl font-bold leading-tight text-gray-900'>Kategorie</h1>
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
