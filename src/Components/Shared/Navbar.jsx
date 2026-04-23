"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const usePathName = usePathname();

  return (
    <section>
      <div className="bg-background/70 backdrop-blur-lg border-b border-separator">
        <nav className="container mx-auto sticky top-0 z-40 w-full">
          <header className=" flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <div>Navbar</div>
            </div>
            <ul className="hidden items-center gap-4 md:flex">
              <li>
                <Link href="/">
                  <Button variant={usePathName === "/" ? "secondary" : ""}>
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Button variant={usePathName === "" ? "secondary" : ""}>
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Button variant={usePathName === "" ? "secondary" : ""}>
                    Blog
                  </Button>
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-5">
              <Link href="/auth/signin">
                <Button
                  variant={usePathName === "/auth/signin" ? "secondary" : ""}
                >
                  SignIn
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  variant={usePathName === "/auth/signup" ? "secondary" : ""}
                >
                  SignUp
                </Button>
              </Link>
            </div>
          </header>
          {isMenuOpen && (
            <div className="border-t border-separator md:hidden">
              <ul className="flex flex-col gap-2 p-4">
                <li>
                  <Link href="/">
                    <Button variant={usePathName === "/" ? "secondary" : ""}>
                      Home
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Button variant={usePathName === "" ? "secondary" : ""}>
                      About
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Button variant={usePathName === "" ? "secondary" : ""}>
                      Blog
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
