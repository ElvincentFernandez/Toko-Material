import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import React from 'react';

export function Hero() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/mandiri.png)', height: '60vh' }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className="relative py-16 md:py-24 px-4 mx-auto" size="md">
        <Title className="text-4xl font-bold text-white">Toko Material Lengkap Dengan Harga Terjangkau</Title>
        <Text className="text-xl text-white mt-8">
          Toko material dengan berbagai pilihan, siap mendukung proyek Anda dengan produk-produk terbaik dan 
          <span className="text-blue-900 font-extrabold">harga yang ramah</span> di kantong.
        </Text>
      </Container>

      <Button className="ml-3 pb-3 bg-blue-900 text-white border-2 border-blue-900 cursor-pointer w-50 py-3 px-4 text-sm rounded-full">
          Mulai Belanja
      </Button>
    </div>
  );
}
