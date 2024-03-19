import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/header.component";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Doctor Appointment Booking",
    description: "Book your appointment and visit the doc",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <div className="md:px-20">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
