import { NavLink } from '../ui/nav-link';
import { Home, Package, Settings } from 'lucide-react';

export function Sidebar() {
    return (
        <aside className="w-60 min-h-screen bg-slate-900 flex flex-col px-4 py-6 shrink-0">
            <div className="mb-8 px-2">
                <span className="text-white font-bold text-xl tracking-tight">SaaS Core</span>
            </div>
            <nav className="flex flex-col gap-1">
                <NavLink href="/">
                    <Home size={18} />
                    Dashboard
                </NavLink>
                <NavLink href="/products">
                    <Package size={18} />
                    Produtos
                </NavLink>
                <NavLink href="/settings">
                    <Settings size={18} />
                    Configurações
                </NavLink>
            </nav>
        </aside>
    );
}
