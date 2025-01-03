import Navbar from "app/components/Navbar";
import { Suspense } from "react";
import Wait from "./Wait";





export default function ClientLayout({ children }) {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <section>
                <Suspense fallback={<Wait />}>
                    {children}
                </Suspense>
            </section>

        </>

    );
}