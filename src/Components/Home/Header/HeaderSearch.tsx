import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import React from "react";

const links = [
  { link: "/kategori", label: "Kategori" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Keranjang" },
];


export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link} // Gunakan 'to' agar bisa navigasi dengan react-router
      className="text-white hover:text-gray-300 px-4 py-2"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center p-4">
        {/* Toko Mandiri Steel */}
        <div className="text-lg font-semibold">Mandiri Steel</div>

        {/* Burger Menu for mobile */}
        <Group className="lg:hidden">
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>

        {/* Links and Search */}
        <Group className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4">{items}</div>
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
