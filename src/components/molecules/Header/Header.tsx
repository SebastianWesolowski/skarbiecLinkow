import Link from "next/link";
import { FC } from "react";
import MinimalLogo from "@assets/svg/MinimalLogo";
import { ButtonLink, Container } from "@atoms";

import { MobileNavigation } from "./MobileNavigation";

export const Header: FC = (): JSX.Element => (
  <header className='py-10'>
    <Container>
      <nav className='relative z-50 text-sm'>
        <ul className='flex items-center'>
          <li>
            <Link href='/'>
              <span className='sr-only'>Home</span>
              <MinimalLogo className='h-10 w-auto' />
            </Link>
          </li>
          <li className='ml-12 hidden md:block'>
            <Link
              href='#features'
              className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              Features
            </Link>
          </li>
          <li className='ml-6 hidden md:block'>
            <Link
              href='#testimonials'
              className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              Testimonials
            </Link>
          </li>
          <li className='ml-6 hidden md:block'>
            <Link
              href='#pricing'
              className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              Pricing
            </Link>
          </li>
          <li className='ml-auto hidden md:block'>
            <Link href='/login' className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
              Sign in
            </Link>
          </li>
          <li className='ml-auto md:ml-8'>
            <ButtonLink href='/wesolowski' color='yellow'>
              <span>
                Get started<span className='hidden lg:inline'> today</span>
              </span>
            </ButtonLink>
          </li>
          <li className='-mr-1 ml-5 md:hidden'>
            <MobileNavigation />
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);
