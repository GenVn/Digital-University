import "@/styles/globals.css";
import localFont from "next/font/local";

const fontSegoeUI = localFont({
  src: "../assets/fonts/Segoe-UI.ttf",
});

export const metadata = {
  title: "Digital University",
  description: "Mạng xã hội đa nền tảng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontSegoeUI.className}>{children}</body>
    </html>
  );
}
