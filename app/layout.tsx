import type { ReactNode } from "react";

export const metadata = {
  title: "Richardren Escol | Technical Virtual Assistant",
  description:
    "Technical Virtual Assistant specializing in automation, CRM systems, and backend workflow support.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#0f172a",
          color: "#e2e8f0",
        }}
      >
        {children}
      </body>
    </html>
  );
}
