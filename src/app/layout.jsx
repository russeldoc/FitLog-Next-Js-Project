import "./globals.css";

export const metadata = {
    title: "FitLog — Workout Library",
    description:
        "A dark, no-nonsense workout library for tracking your training.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}