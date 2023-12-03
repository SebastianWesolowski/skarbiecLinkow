import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { Container } from "@atoms";

export const Header: FC = (): JSX.Element => (
  <header className='py-10'>
    <Container>
      <nav className='relative z-50 text-sm'>
        <ul className='flex items-center'>
          <li>
            <Link href='/'>
              <div className={"flex flex-row"}>
                <span className='sr-only'>Home</span>
                <CurrencyDollarIcon className='h-10 w-auto' style={{ marginLeft: "-3px" }} />
                <div className='mx-auto'>
                  <h1 className='text-3xl font-bold leading-tight text-gray-900'>Skarbiec Linków</h1>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);
