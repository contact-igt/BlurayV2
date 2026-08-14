import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BLUERAY | NDT & Industrial Inspection Services in Abu Dhabi",
    description: "BLUERAY Oil and Gas Field Pipeline Inspection L.L.C. provides non-destructive testing and industrial inspection services from Abu Dhabi, UAE.",
    icons: {
        icon: "/images/blueray-logo-final-approved-display.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{document.documentElement.dataset.theme='light';localStorage.setItem('blueray-theme','light');}catch(e){document.documentElement.dataset.theme='light';}})();`,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
