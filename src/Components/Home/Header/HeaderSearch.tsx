import { Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";

const links = [
  { link: "/kategori", label: "Kategori" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Keranjang" },
];

export function HeaderSearch() {
  const items = links.map((link) => (
    <Link
      className="text-white hover:text-gray-300 px-2 py-2"
      key={link.label}
      to={link.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-semibold">Mandiri Steel</div>

        {/* Link Navigasi lebih rapat & geser ke kiri */}
        <div className="flex space-x2 translate-x-40">{items}</div>

        {/* Tombol Daftar/Login lebih terpisah */}
        <Group className="flex items-center space-x-3">
          <Link to = "/Login">
        <Button className=" whitespace-nowrap bg-gradient-to-tr from-blue-900 to-emerald-500 text-white border-2 border-blue-900 font-semibold py-2 px-6 text-sm rounded-full transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-emerald-400 hover:shadow-lg cursor-pointer">
          Login
        </Button>
          </Link>

        <Button className=" whitespace-nowrap bg-gradient-to-r from-purple-900 to-pink-500 text-white border-2 border-purple-900 font-semibold py-2 px-6 text-sm rounded-full transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-pink-400 hover:shadow-lg cursor-pointer">
          Sign Up
        </Button>
      </Group>

      </div>
    </header>
  );
}
