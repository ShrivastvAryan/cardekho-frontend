import "./globals.css";
import { Providers } from './providers'
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export const metadata = {
  title: "CarDekho",
  description: "Find your right car now",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang='en'>
      <body className="bg-white-500 font-sans overflow-x-hidden">
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
         </Providers>
      </body>
    </html>
    </>
  );
}
