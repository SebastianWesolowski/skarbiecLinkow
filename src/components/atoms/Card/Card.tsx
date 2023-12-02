import { BookmarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const Link = ({ path, title, children }: any) => (
  <div className='min-w-0 flex-1'>
    <span className='absolute inset-0' />
    <a href={path} className=' focus:outline-none' title={title}>
      {children}
    </a>
  </div>
);

const Wrapper = ({ path, subtitle, children }: any) => (
  <Link path={path} title={subtitle}>
    <div className='relative flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 hover:border-gray-400 hover:bg-gray-50'>
      {children}
    </div>
  </Link>
);

const Content = ({ title, subtitle, path, customIcon = null, icon = true }: any) => (
  <>
    <div className='flex flex-row'>
      {icon && (
        <div className='m-auto shrink-0 pr-2'>
          {customIcon !== null ? customIcon : <BookmarkIcon className='h-6 w-6 text-blue' />}
        </div>
      )}
      <div className='min-w-0 flex-1'>
        <span className='absolute inset-0' />
        <p className='text-sm font-medium text-gray-900'>{title}</p>
        {subtitle && <p className='truncate text-sm text-gray-500'>{subtitle}</p>}
      </div>
    </div>
  </>
);

const CombinedCard = ({ title, subtitle, path }: any) => (
  <Wrapper path={path} subtitle={subtitle}>
    <Content title={title} subtitle={subtitle} />
  </Wrapper>
);

export const Card = {
  Content,
  Wrapper,
  CombinedCard,
  Link,
};
