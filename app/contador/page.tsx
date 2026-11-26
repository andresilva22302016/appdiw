import React from 'react';
import Contador from '@/components/Contador/Contador'; 

export default function ContadorPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Contador</h1>
      <Contador />
    </main>
  );
}