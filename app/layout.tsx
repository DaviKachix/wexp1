import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "WeXP Limited | Event Planning & Safari Experiences",
  description:
    "WeXP Limited is a premium event planning, travel, and logistics company based in Arusha, Tanzania. We create seamless, memorable experiences across Africa.",
  icons: {
    icon: "/images/wexp.jpg",
  },
  openGraph: {
    title: "WeXP Limited",
    description:
      "Premium event planning, safari experiences, and logistics services across Africa.",
    url: "https://wexp.co.tz",
    siteName: "WeXP Limited",
    images: [
      {
        url: "/images/wexp.jpg",
        width: 800,
        height: 600,
        alt: "WeXP Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#0356c2',
                      accent: '#f97316'
                    }
                  }
                }
              }
            `,
          }}
        />

        {/* Favicon fallback (extra safety) */}
        <link rel="icon" href="/images/wexp.jpg" />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme Color (mobile browser UI) */}
        <meta name="theme-color" content="#0359c9" />
      </head>

      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}