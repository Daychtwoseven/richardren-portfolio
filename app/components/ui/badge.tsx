import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1.5 text-sm font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20 mr-2 mb-2">
      {children}
    </span>
  );
}
