import "@/styles/globals.css";
import { GridGuide } from "@/components/GridGuide/index";
import { Sora } from "next/font/google";
import { Header } from "@/components/Header/index";
const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} bg-gray-950 text-gray-50 antialiased`}
      >
        <Header />
        <main className="flex min-h-svh flex-col">{children}</main>
        <GridGuide />
      </body>
    </html>
  );
}
