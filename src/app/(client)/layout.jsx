import { Suspense } from "react";
import Navbar from "../components/Navbar";





export default function ClientLayout({ children }) {
  return (
    <main className="">
      {/* <Navbar/> */}
      {children}
    </main>

  );
}
