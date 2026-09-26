import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

export const metadata = {
    title: "FitLog — Workout Library",
    description:
        "A dark, no-nonsense workout library for tracking your training.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <FitLogProvider>
                    <Navbar />

                    {children}

                    <Footer />
                </FitLogProvider>
            </body>
        </html>
    );
}