// ctrl / for comments
// npm run dev for display project
// align code: ctrl k, ctrl f

// non-export functions would not work with "@/", would need brackets instead { Header }
import Header from "@/components/header"; 
import "./globals.css";
import { Quicksand } from "next/font/google";
import Footer from "@/components/footer"
import Toaster from "react-hot-toast";

const quick = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Ferhan | Personal Portfolio',
  description: 'Frontend developer and TMU Graduate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${quick.className} bg-gray-50 text-gray-950 relative pt-[7rem] sm:pt-[8rem] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:[#676394]"></div>
          <Header/>
          {children}
          <Footer/>
          {/* <Toaster position="bottom-right"/> */}
      </body>
    </html>
  )
}
