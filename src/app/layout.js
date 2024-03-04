import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const { UserId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <h1>Auth App Demo</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/public-page">This is a public page</Link>
            <Link href="/restricted-page">This is a restricted page</Link>
            {UserId ? <UserButton /> : <SignInButton />}
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
