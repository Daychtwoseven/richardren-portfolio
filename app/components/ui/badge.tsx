import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        color: "#38bdf8",
        padding: "8px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        marginRight: "10px",
        marginBottom: "10px",
        border: "1px solid rgba(6, 182, 212, 0.3)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.2)";
        e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.1)";
        e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
      }}
    >
      {children}
    </span>
  );
}
