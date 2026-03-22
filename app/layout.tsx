import "./globals.css";
import Navbar from "./navbar";
import TextSnake from "./comps/TextSnake";

export const metadata = {
  title: "Anant Patel | The Developer of Seven Code Kingdoms",
  description: "Fantasy themed developer portfolio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        
         
        {children}</body>
    </html>
  );
}