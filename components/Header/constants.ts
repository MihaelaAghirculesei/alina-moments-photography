export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Über Mich", href: "#about" },
  { name: "Studio", href: "#studio" },
  { name: "Monatsaktion", href: "#monthly" },
  { name: "Preise", href: "#pricing" },
  { name: "Kontakt", href: "#contact" },
];

export const MOBILE_BREAKPOINT = 840;
export const TABLET_BREAKPOINT = 950;
export const DESKTOP_BREAKPOINT = 1100;

export const MOBILE_MENU_TOP_SCROLLED = 275;
export const MOBILE_MENU_TOP_DEFAULT = 325;

export const GAP_MOBILE = { menu: 20, social: 6 };
export const GAP_TABLET = { menu: 24, social: 10 };
export const GAP_DESKTOP = { menu: 32, social: 16 };

export const BRAND_PINK = 'rgba(246, 122, 196, 0.98)';
export const BRAND_PINK_SOLID = 'rgb(246, 122, 196)';

export const SCROLL_THRESHOLD = 50;
