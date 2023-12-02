/* This example requires Tailwind CSS v2.0+ */
import { FC, PropsWithChildren } from "react";

const items = [
  { id: 1 },
  // More items...
];

export const Category: FC<PropsWithChildren<any>> = ({}) => {
  return (
    <ul role='list' className='space-y-3'>
      {items.map((item) => (
        <li key={item.id} className='overflow-hidden bg-white p-4 shadow sm:rounded-md sm:px-6'>
          {/* Your content */}
        </li>
      ))}
    </ul>
  );
};
