import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "500",
        marginRight: "8px",
        marginBottom: "8px",
        border: "1px solid #334155",
      }}
    >
      {children}
    </span>
  );
}
