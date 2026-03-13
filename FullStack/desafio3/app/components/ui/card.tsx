import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={cn("bg-white dark:bg-card border border-slate-200 dark:border-border rounded-xl shadow-sm overflow-hidden", className)}>
    {children}
  </div>
);

export const CardHeader = ({ title, description }: { title: string, description?: string }) => (
  <div className="p-4 border-b border-slate-100 dark:border-border">
    <h3 className="text-lg font-bold text-slate-800 dark:text-card-foreground">{title}</h3>
    {description && <p className="text-sm text-slate-700 dark:text-muted-foreground">{description}</p>}
  </div>
);

export const CardContent = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={cn("p-4", className)}>{children}</div>
);
