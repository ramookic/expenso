import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./theme-provider";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Expenso",
    default: "Welcome | Expenso",
  },
  description:
    "A simple and efficient tool for managing your personal finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
