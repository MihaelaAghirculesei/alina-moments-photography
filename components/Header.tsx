"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SocialIcons } from "./Header/SocialIcons";
import {
  navItems,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  MOBILE_MENU_TOP_SCROLLED,
  MOBILE_MENU_TOP_DEFAULT,
  GAP_MOBILE,
  GAP_TABLET,
  GAP_DESKTOP,
  BRAND_PINK,
  BRAND_PINK_SOLID,
  SCROLL_THRESHOLD,
} from "./Header/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuGap, setMenuGap] = useState(GAP_DESKTOP.menu);
  const [socialGap, setSocialGap] = useState(GAP_DESKTOP.social);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const timer = setTimeout(() => {
      const menuElement = document.querySelector<HTMLElement>('.mobile-menu');
      if (!menuElement) return;

      const focusableElements = menuElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e: KeyboardEvent) => {
        const activeElement = document.activeElement;
        const isInMenu = menuElement.contains(activeElement);

        if (!isInMenu) return;

        const focusedElement = activeElement as HTMLElement;
        const focusedIndex = Array.from(focusableElements).indexOf(focusedElement);

        if (e.key === 'Tab') {
          e.preventDefault();

          if (e.shiftKey) {
            if (focusedIndex <= 0) {
              lastElement?.focus();
            } else {
              focusableElements[focusedIndex - 1]?.focus();
            }
          } else {
            if (focusedIndex >= focusableElements.length - 1) {
              firstElement?.focus();
            } else {
              focusableElements[focusedIndex + 1]?.focus();
            }
          }
        }
        else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (focusedIndex >= focusableElements.length - 1) {
            firstElement?.focus();
          } else {
            focusableElements[focusedIndex + 1]?.focus();
          }
        }
        else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (focusedIndex <= 0) {
            lastElement?.focus();
          } else {
            focusableElements[focusedIndex - 1]?.focus();
          }
        }
        else if (e.key === 'Enter') {
          e.preventDefault();
          focusedElement?.click();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen && burgerButtonRef.current && isMobile) {
      setTimeout(() => {
        burgerButtonRef.current?.focus();
      }, 50);
    }
  }, [isMobileMenuOpen, isMobile]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width < MOBILE_BREAKPOINT);

    if (width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT) {
      setMenuGap(GAP_MOBILE.menu);
      setSocialGap(GAP_MOBILE.social);
    } else if (width >= TABLET_BREAKPOINT && width < DESKTOP_BREAKPOINT) {
      setMenuGap(GAP_TABLET.menu);
      setSocialGap(GAP_TABLET.social);
    } else if (width >= DESKTOP_BREAKPOINT) {
      setMenuGap(GAP_DESKTOP.menu);
      setSocialGap(GAP_DESKTOP.social);
    }
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.burger-button')) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsClient(true);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen, handleClickOutside, handleEscapeKey]);

  const desktopNavItems = useMemo(() => (
    navItems.map((item, index) => (
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
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent transition-all duration-300 group-hover:w-full" />
        </Link>
      </motion.div>
    ))
  ), []);

  const mobileNavItems = useMemo(() => (
    navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="group relative inline-block py-3 text-center text-lg font-light tracking-wide text-amber-100/90 transition-colors hover:text-amber-200 mx-auto"
        tabIndex={0}
      >
        <span className="relative">
          {item.name}
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    ))
  ), []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "py-4 shadow-2xl" : "py-6"
        }`}
      >
        <div className="absolute inset-0 bg-black backdrop-blur-2xl" />

        <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        <div className="relative max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col items-center gap-3">
            <Link href="/" className="group">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/logo.png.jpeg"
                  alt="Alina Moments Photography"
                  width={isScrolled ? 150 : 200}
                  height={isScrolled ? 75 : 100}
                  className="transition-all duration-500"
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </motion.div>
            </Link>

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

          <nav aria-label="Primary navigation">
            {/* Desktop Navigation */}
            {isClient && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center justify-between"
                style={{ paddingTop: '30px' }}
              >
                <div className="flex-1" />

                <div className="flex items-center justify-center" style={{ gap: `${menuGap}px` }}>
                  {desktopNavItems}
                </div>

                <div className="flex flex-1 items-center justify-end" style={{ paddingRight: '10px', gap: `${socialGap}px` }}>
                  <SocialIcons variant="desktop" />
                </div>
              </motion.div>
            )}

            {/* Mobile Menu */}
            {isClient && isMobile && (
              <div className="flex items-center justify-between" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '30px' }}>
                <div className="flex gap-4">
                  <SocialIcons variant="mobile" />
                </div>

                <button
                  ref={burgerButtonRef}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="burger-button text-amber-100"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation-menu"
                  aria-haspopup="true"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            )}
          </nav>

        </div>

        <div
          className="absolute bottom-[-5px] left-0 h-[1px] w-full"
          style={{
            background: `linear-gradient(to right, transparent, ${BRAND_PINK_SOLID}, transparent)`
          }}
        />
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu fixed right-[20px] z-40 bg-black/95 backdrop-blur-xl shadow-2xl border-2 rounded-l-lg min-w-[140px]"
            style={{ top: isScrolled ? `${MOBILE_MENU_TOP_SCROLLED}px` : `${MOBILE_MENU_TOP_DEFAULT}px`, borderColor: BRAND_PINK }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-2 px-8 py-6">
              {mobileNavItems}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
