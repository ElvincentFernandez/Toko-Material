import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="text-white hover:text-gray-300 px-4 py-2"
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center p-4">
        {/* Toko Mandiri Steel */}
        <div className="text-lg font-semibold">
          Mandiri Steel
        </div>

        {/* Burger Menu for mobile */}
        <Group className="lg:hidden">
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>

        {/* Links and Search */}
        <Group className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4">
            {items}
          </div>
          <Autocomplete
            className="w-full sm:w-auto"
            placeholder="Search"
            visibleFrom="xs"
          />
        </Group>

        {/* Mobile Menu */}
        {opened && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-blue-900 p-4 space-y-4">
            {items}
            <Autocomplete
              className="w-full"
              placeholder="Search"
              leftSection={<IconSearch size={16} stroke={1.5} />}
            />
          </div>
        )}
      </div>
    </header>
  );
}
