import "./globals.css";

export const metadata = {
  title: "Chad Escol | Technical Virtual Assistant",
  description: "Technical Virtual Assistant specializing in automation, CRM systems, and backend workflow support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif", backgroundColor: "#0f172a", color: "#e2e8f0" }}>
        {children}
      </body>
    </html>
  );
}
