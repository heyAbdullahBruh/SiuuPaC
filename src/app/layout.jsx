import Navber from "@/component/nav/Nav";
import "./globals.css";

export const metadata = {
  title: "HotleX",
  description: "The site is HotelX Web site ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navber/>
        </nav>

        <main>
             {children}
        </main>

        <footer>
          <h1>Foooo</h1>
        </footer>


      </body>
    </html>
  );
}
