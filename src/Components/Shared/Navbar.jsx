"use client";
import React, { useState } from "react";
import Navbar from "./Navbar"; // Tomar file path thik kore niyo
import { Button } from "@heroui/react";

export default function App() {
  // Login state handle korar jonno (Prokrity project-e eti Auth context theke ashbe)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Navigation items array
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <main>
      <Navbar
        brand={<p className="font-bold text-inherit">MY LOGO</p>}
        items={navItems}
        rightContent={
          <div className="flex gap-3">
            {isLoggedIn ? (
              // User login thakle Logout button dekhabe
              <Button
                color="danger"
                variant="flat"
                onClick={() => setIsLoggedIn(false)}
              >
                Log Out
              </Button>
            ) : (
              // User login na thakle Login button dekhabe
              <Button color="primary" onClick={() => setIsLoggedIn(true)}>
                Login
              </Button>
            )}
          </div>
        }
      />

      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <p className="mt-4">
          Current Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
        </p>
      </div>
    </main>
  );
}
