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
        <html lang="en" data-theme="dark" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var theme=localStorage.getItem('blueray-theme');document.documentElement.dataset.theme=theme==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
