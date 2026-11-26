import React, { useState } from 'react';

type Tarefa = { id: number; texto: string };
export default function InputPage() {
    const [texto, setTexto] = useState('');
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Input</h1>
    </main>
  );
}
