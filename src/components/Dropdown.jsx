'use client'

import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Factory from '@/data/factory';

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('Options');

  return (
    <Menu as="div" className="relative inline-block text-right w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedOption}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {Factory.map((factory) => (
            <MenuItem key={factory.id}>
              {({ active }) => (
                <a
                  href={factory.planta}
                  className={`block px-4 py-2 text-sm text-center ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  onClick={() => setSelectedOption(factory.planta)}
                >
                  {factory.planta}
                </a>
              )}
            </MenuItem>
          ))}
          <form action="#" method="POST">
            <MenuItem>
              {({ active }) => (
                <button
                  type="submit"
                  className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                >
                  Sign out
                </button>
              )}
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}