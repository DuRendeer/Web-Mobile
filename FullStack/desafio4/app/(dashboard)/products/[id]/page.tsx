'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  return (
    <div>
      <h1>Detalhes do Produto</h1>

      <p>Você está visualizando o produto: {id}</p>

      <button onClick={() => router.back()}>
        Voltar
      </button>
    </div>
  );
}