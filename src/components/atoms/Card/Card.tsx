import { BookmarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useAppContext } from "@/context/AppContextProvider";

const Link = ({ uuid, path, title, children }: any) => {
  const { addLink } = useAppContext();
  const handleAddLink = (uuid: any) => {
    addLink(uuid);
  };

  return (
    <div className='min-w-0 flex-1'>
      <span className='absolute inset-0' />
      <a
        href={path}
        target='_blank'
        className=' focus:outline-none'
        title={title}
        onClick={() => {
          handleAddLink(uuid);
        }}
        onContextMenu={() => {
          handleAddLink(uuid);
        }}
        rel='noreferrer'
      >
        {children}
      </a>
    </div>
  );
};

const Wrapper = ({ path, subtitle, children, uuid }: any) => (
  <Link uuid={uuid} path={path} title={subtitle}>
    <div className='relative flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 hover:border-gray-400 hover:bg-gray-50'>
      {children}
    </div>
  </Link>
);

const Content = ({ title, subtitle, path, uuid = null, customIcon = null, icon = true }: any) => {
  const { linkExists } = useAppContext();

  const isExist = linkExists(uuid);
  return (
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
        {isExist && (
          <div className='absolute left-[3px] top-[0px]'>
            <div
              className={
                "inline-flex items-baseline rounded-full bg-green-100 p-0.5 text-sm font-medium text-green-800"
              }
            >
              <CheckIcon className='h-3 w-3 text-green-500' />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

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
