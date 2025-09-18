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
  title: "India Nippon Electricals Ltd",
  description: "Leading automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions for two-wheelers and commercial vehicles.",
  metadataBase: new URL('https://indianippon.com'),
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#0b2545',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
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
