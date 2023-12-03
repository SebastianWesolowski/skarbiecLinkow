import React, { FC, PropsWithChildren } from "react";
import { Link } from "@molecules/Link";

export const ContentSection: FC<PropsWithChildren<any>> = ({ contentObject, children }) => {
  const content: any[] = contentObject.groupedByCategory;
  return (
    <>
      {Object.keys(content).map((categoryName) => {
        // @ts-ignore
        const categoryDescription = contentObject.meta[categoryName];
        return (
          <div key={categoryName} className='space-y-6 pb-4 lg:col-span-2 lg:col-start-1'>
            <section aria-labelledby='applicant-information-title'>
              <div className='py-5 '>
                <h2 id='applicant-information-title' className='text-lg font-medium leading-6 text-gray-900'>
                  {categoryName}
                </h2>
                {categoryDescription && <p className='mt-1 max-w-2xl text-sm text-gray-500'>{categoryDescription}</p>}
              </div>
              <div className='border-t border-gray-200 py-5 '>
                <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
                  {content[categoryName].map((contentLink: any) => {
                    return <Link key={contentLink.uuid} contentLink={contentLink} uuid={contentLink.uuid} />;
                  })}
                </dl>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};
