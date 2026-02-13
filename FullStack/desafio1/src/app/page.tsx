"use client";

import Image from "next/image";
import { useState } from "react";
import { MemberCard } from "@/componets/MemberCard";

const integrantes = [
  { name: "Du Sochodolak", role: "Tech Lead", github: "https://github.com/DuRendeer" },
  { name: "Jorlan Matheus Pedroso da Silva", role: "Front-end Lead", github: "https://github.com/JohannMatheusDev" },
];

export default function Home() {
  const [escuro, setEscuro] = useState(true);

  return (
    <div className={`min-h-screen font-sans transition-colors ${escuro ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>
      <header className="flex flex-col items-center gap-4 pt-16 pb-10 relative">
        <button
          onClick={() => setEscuro(!escuro)}
          className={`absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${escuro ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}
        >
          {escuro ? "Claru" : "Escuru"}
        </button>
        <Image src="/capdev.png" alt="capidevs logo" width={160} height={160} priority />
        <h1 className="text-4xl font-bold tracking-tight">CapiDevs</h1>
        <p className={`text-lg ${escuro ? "text-slate-400" : "text-slate-500"}`}>Time de Engenharia</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {integrantes.map((membro) => (
            <MemberCard
              key={membro.name}
              name={membro.name}
              role={membro.role}
              github={membro.github}
              escuro={escuro}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
