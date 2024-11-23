import Header from "@/components/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import{shadesOfPurple} from '@clerk/themes'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Scrum",
  description: "Project management",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={
      {
        baseTheme: shadesOfPurple,
        variables:{
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6"
        },
        elements: {
          formButtonPrimary: "text-white",
          card: "bg-gray"
        }
      }
    }>

      <html lang="en">
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-14 text-center text-gray-200"></div>
              <p>Made with jayesh malviya</p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
