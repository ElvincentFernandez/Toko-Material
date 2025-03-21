import { useState } from "react";
import { Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import ikon hamburger

const links = [
  { link: "/kategori", label: "Kategori" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Keranjang" },
];

export function HeaderSearch() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-semibold">Mandiri Steel</div>

        {/* Menu besar (Desktop), sembunyikan di bawah 850px */}
        <div className="hidden max-[850px]:hidden min-[850px]:flex space-x-6">
          {links.map((link) => (
            <Link
              className="text-white hover:text-gray-300 px-3 py-2"
              key={link.label}
              to={link.link}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Tombol Login & Signup (Desktop) */}
        <Group className="hidden max-[850px]:hidden min-[850px]:flex items-center space-x-3">
          <Link to="/Login">
            <Button className="whitespace-nowrap bg-gradient-to-tr from-blue-900 to-emerald-500 text-white border-2 border-blue-900 font-semibold px-6 py-2 text-sm rounded-full hover:from-blue-700 hover:to-emerald-400">
              Login
            </Button>
          </Link>
          <Link to="/Register">
            <Button className="whitespace-nowrap bg-gradient-to-r from-purple-900 to-pink-500 text-white border-2 border-purple-900 font-semibold px-6 py-2 text-sm rounded-full hover:from-purple-700 hover:to-pink-400">
              Sign Up
            </Button>
          </Link>
        </Group>

        {/* Tombol Menu Hamburger (Mobile, Muncul di bawah 850px) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-[850px]:hidden text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Dropdown (Mobile) */}
      {menuOpen && (
        <div className="min-[850px]:hidden flex flex-col bg-blue-900 w-full p-4 space-y-3 items-center">
          {links.map((link) => (
            <Link
              className="text-white hover:text-gray-300 block py-2"
              key={link.label}
              to={link.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/Login">
            <Button className="w-full mt-2 bg-gradient-to-tr from-blue-900 to-emerald-500 text-white border-2 border-blue-900 font-semibold px-6 py-2 text-sm rounded-full hover:from-blue-700 hover:to-emerald-400">
              Login
            </Button>
          </Link>
          <Link to="/Register">
            <Button className="w-full mt-2 bg-gradient-to-r from-purple-900 to-pink-500 text-white border-2 border-purple-900 font-semibold px-6 py-2 text-sm rounded-full hover:from-purple-700 hover:to-pink-400">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
