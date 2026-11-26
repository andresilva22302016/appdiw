import React from 'react';
import Image from 'next/image';
import tecnologias from '@/app/Data/tecnologias.json';

interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiasPage() {
  const listaTecnologias: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Tecnologias Exploradas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listaTecnologias.map((tec, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >

            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <Image
                src={`/tecnologias/${tec.image}`}
                alt={`Logotipo de ${tec.title}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Nome da Tecnologia */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              {tec.title}
            </h3>

            {/* Breve Descrição */}
            <p className="text-sm text-gray-600 text-center mb-4">
              {tec.description}
            </p>

            {/* Rating (Estrelas) */}
            <div className="mt-auto pt-2 border-t border-gray-100 w-full text-center">
              <span className="text-sm font-medium text-gray-700">
                Rating:{' '}
              </span>
              <span className="text-yellow-500 text-lg">
                {'★'.repeat(tec.rating)}
                {'☆'.repeat(5 - tec.rating)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}