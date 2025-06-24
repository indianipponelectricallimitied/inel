import "./globals.css";
import Navbar from "./components/Common/navbar";
import Footer from "./components/Common/footer";
import localFont from "next/font/local";


const aeonik = localFont({
  src: [
    {
      path: '../public/font/Aeonik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Aeonik-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/Aeonik-Bold.ttf', 
      weight: '700',
      style: 'normal',
    },

  ],
  variable: '--font-aeonik',
})



export const metadata = {
  title: "Indian Nippon Electricals Ltd",
  description: "Your trusted partner in electrical solutions",
  robots: "noindex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" content="noindex, nofollow">
    
      <body
        className={`${aeonik.variable} antialiased`}
      >  
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
