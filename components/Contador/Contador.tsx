'use client';

import React, { useState, useEffect } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const saved = localStorage.getItem('count');
    if (saved) setCount(Number(saved));
  }, []);
  const atualizar = (novoValor: number) => {
    if (novoValor < 0 || novoValor > 10) return;

    setCount(novoValor);
    localStorage.setItem('count', String(novoValor));
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem('count', '0');
  };
  return (
    <div className="flex flex-col items-center gap-4 text-black">
      <h2 className="text-4xl font-bold">{count}</h2>

      <div className="flex gap-2">
        <button
          onClick={() => atualizar(count - 1)}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
        >
          Decrementar
        </button>

        <button
          onClick={() => atualizar(count + 1)}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
        >
          Incrementar
        </button>

        <button
          onClick={reset}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}