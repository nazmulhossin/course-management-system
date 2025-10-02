"use client";
import { LogIn, Menu, UserPlus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bgPrimary/80 backdrop-blur border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Brand Logo */}
          <Link href="/">
            <div className="flex items-center font-bold">
              <span className="size-8 bg-primary hover:bg-primary/90 text-white text-[1.2rem] rounded-[6px] flex justify-center items-center">C</span>
              <span className="ml-2 text-primary hover:text-primary/90 text-2xl">CPS Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu*/}
          <nav className="hidden lg:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="#courses" className="hover:text-primary transition">Courses</Link>
            <Link href="#why-us" className="hover:text-primary transition">Why Us</Link>
            <Link href="#faq" className="hover:text-primary transition">FAQ</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline"><LogIn />Login</Button>
            <Button><UserPlus />Register</Button>
          </div>

          {/* Mobile Menu Show-Hide Button */}
          <button className="lg:hidden p-2 rounded-lg border border-borderColor cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col items-center space-y-4 mb-6 font-medium">
              <Link href="#home" className="hover:text-primary transition">Home</Link>
              <Link href="#home" className="hover:text-primary transition">Courses</Link>
              <Link href="#home" className="hover:text-primary transition">Why Us</Link>
              <Link href="#home" className="hover:text-primary transition">FAQ</Link>
              <Button variant="outline"><LogIn />Login</Button>
              <Button><UserPlus />Register</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};