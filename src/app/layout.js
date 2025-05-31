import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: "400",
  subsets: ["latin"],
});


export const metadata = {
  title: "Oussama Mansour",
  keywords: [
    "Oussama Mansour",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [
    {
      name: "Oussama Mansour",
      url: "https://oussamamansour.de",
    },
  ],
  description: "Oussama Mansour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
