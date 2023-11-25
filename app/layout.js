import localFont from "next/font/local";
import "./globals.css";

const projectFont = localFont({
  src: "./(fonts)/RussoOne-Regular.woff",
  variable: "--font-regular",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="W68SNiwZSSuBAfy8Q6z-ryho9JUrAgnQjvQr4_xs1PY"
      />
      <body className={projectFont.variable}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Oleksand Kostin | Web Developer Portfolio",
};
