interface MemberProps {
  name: string;
  role: string;
  github: string;
  escuro: boolean;
}

export function MemberCard({ name, role, github, escuro }: MemberProps) {
  return (
    <div className={`p-4 border rounded-lg transition-colors ${escuro ? "border-slate-800 hover:border-blue-500" : "border-slate-300 hover:border-blue-400"}`}>
      <h3 className={`text-xl font-bold ${escuro ? "text-white" : "text-slate-900"}`}>{name}</h3>
      <p className={`${escuro ? "text-slate-400" : "text-slate-500"}`}>{role}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-sm mt-3 inline-block"
      >
        GitHub →
      </a>
    </div>
  );
}
