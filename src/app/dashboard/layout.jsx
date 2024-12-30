'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export default function DashboardLayout({ children }) {
  const router = useRouter(); 
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/login"); 
    } else {
      try {
        const decodedToken = jwtDecode(token);
        console.log("decodedToken", decodedToken.role);
        if(decodedToken.role !== "admin") router.push('/offers')
      } catch (error) {
        console.error("Invalid token", error);
        router.push("/login");
      }
    }
  }, [token, router]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
