import React from 'react'

export default function CaracteristicasPage() {
  const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
  ]

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Características do React e Next.js
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
    </main>
  )
}
