"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Über Mich", href: "#about" },
  { name: "Studio", href: "#studio" },
  { name: "Monatsaktion", href: "#monthly" },
  { name: "Preise", href: "#pricing" },
  { name: "Kontakt", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.burger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "py-4 shadow-2xl" : "py-6"
        }`}
      >
        {/* Pure Black Background */}
        <div className="absolute inset-0 bg-black backdrop-blur-2xl" />

        {/* Top Border */}
        <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        <div className="relative container mx-auto px-4">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center gap-3">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/logo.png.jpeg"
                  alt="Galina Pfefer Photography"
                  width={isScrolled ? 150 : 200}
                  height={isScrolled ? 75 : 100}
                  className="transition-all duration-500"
                  priority
                />
              </motion.div>
            </Link>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-center font-serif tracking-wider text-amber-100/90 italic transition-all duration-500 ${
                isScrolled ? "text-sm" : "text-base md:text-lg"
              }`}
            >
              Fotografie mit Herz und Gefühl
            </motion.p>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden items-center justify-center gap-8 md:flex"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-5 py-2 transition-all duration-300"
                  >
                    <span className="text-sm font-medium tracking-wider text-amber-100/80 uppercase transition-colors group-hover:text-amber-200">
                      {item.name}
                    </span>

                    {/* Pink gradient underline with fade */}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              {/* Social Icons */}
              <div className="ml-6 flex items-center gap-4 border-l border-amber-400/30 pl-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/alinamoments.photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 transition-colors hover:text-rose-200"
                >
                  <Instagram size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/profile.php?id=61577377904490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 transition-colors hover:text-blue-200"
                >
                  <Facebook size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.tiktok.com/@alinamoments.photography?_t=ZN-90kwTzVBq0E&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  <TikTokIcon size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/4917387123877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 transition-colors hover:text-green-200"
                >
                  <WhatsAppIcon size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/alinamoments.photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577377904490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@alinamoments.photography?_t=ZN-90kwTzVBq0E&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300"
                >
                  <TikTokIcon size={20} />
                </a>
                <a
                  href="https://wa.me/4917387123877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300"
                >
                  <WhatsAppIcon size={20} />
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Burger Button - Fixed position */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="burger-button text-amber-100 fixed right-[10px] z-50 md:hidden"
            style={{ top: isScrolled ? '135px' : '170px' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Bottom Border */}
          <div
            className="absolute bottom-[-5px] left-0 h-[1px] w-full"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(246, 122, 196, 1), transparent)'
            }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="mobile-menu fixed right-[10px] z-40 bg-black/95 backdrop-blur-xl md:hidden shadow-2xl border-2 rounded-l-lg min-w-[140px]"
          style={{ top: isScrolled ? '180px' : '230px', borderColor: 'rgba(246, 122, 196, 0.98)' }}
        >
          <div className="flex flex-col gap-2 px-8 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative inline-block py-3 text-center text-lg font-light tracking-wide text-amber-100/90 transition-colors hover:text-amber-200 mx-auto"
              >
                <span className="relative">
                  {item.name}
                  {/* Pink gradient underline with fade */}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
