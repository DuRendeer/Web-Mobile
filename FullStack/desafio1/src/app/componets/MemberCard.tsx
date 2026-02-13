interface MemberProps {
name: string;
role: string;
}

export function MemberCard({ name, role }: MemberProps) {
return (
    <div className= "p-4 border border-slate-800 rounded-lg hover:border-blue-500 transition-colors">
    <h3 className=  "text-xl font-bold text-white">{name}</h3><p className="text-slate-400">{role}</p>
    </div>
)
}