import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Litness",
  description: "Track workouts, sleep, and to-do tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
