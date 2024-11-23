import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-cera px-32">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
