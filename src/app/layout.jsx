import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hootum",
  description: "Generated by create next app",
};

// Import Space Grotesk font
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("", dmSans.className)}>
      <Toaster position="top-center" reverseOrder={false} />
        <NextTopLoader
          color="#5E17EB"
          initialPosition={0.08}
          crawlSpeed={400}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
