import Script from "next/script";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Viewport } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata = {
  metadataBase: new URL("https://thelexbot.com"),

  title: {
    default: "Paraplex – AI Powered Legal Research Assistant",
    template: "%s | Paraplex",
  },
  description:
    "Paraplex is an AI-powered legal research assistant helping lawyers, judges, and legal professionals find judgments, analyze case law, and draft legal documents faster and more accurately.",

  alternates: {
    canonical: "https://thelexbot.com",
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://thelexbot.com",
    siteName: "Paraplex",
    title: "Paraplex – AI Powered Legal Research Assistant",
    description:
      "AI-powered legal intelligence platform for faster, smarter legal research and drafting.",
    images: [
      {
        url: "https://thelexbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paraplex – AI Legal Research Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Paraplex – AI Powered Legal Research Assistant",
    description:
      "AI-powered legal research and drafting platform for modern legal professionals.",
    images: ["https://thelexbot.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={dmSans.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THQW2JSM');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THQW2JSM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <div className="px-4 md:px-6 lg:px-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
