import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { TikTokIcon, WhatsAppIcon } from "./icons";

interface SocialIconsProps {
  variant?: 'desktop' | 'mobile';
}

export const SocialIcons = ({ variant = 'desktop' }: SocialIconsProps) => {
  const isDesktop = variant === 'desktop';
  const IconWrapper = isDesktop ? motion.a : 'a';
  const iconProps = isDesktop ? { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } } : {};

  return (
    <>
      <IconWrapper
        {...iconProps}
        href="https://www.instagram.com/alinamoments.photography/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Besuchen Sie unsere Instagram-Seite"
        className="text-rose-300 transition-colors hover:text-rose-200"
      >
        <Instagram size={20} />
      </IconWrapper>

      <IconWrapper
        {...iconProps}
        href="https://www.facebook.com/profile.php?id=61577377904490"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Besuchen Sie unsere Facebook-Seite"
        className="text-blue-300 transition-colors hover:text-blue-200"
      >
        <Facebook size={20} />
      </IconWrapper>

      <IconWrapper
        {...iconProps}
        href="https://www.tiktok.com/@alinamoments.photography?_t=ZN-90kwTzVBq0E&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Besuchen Sie unsere TikTok-Seite"
        className="text-cyan-300 transition-colors hover:text-cyan-200"
      >
        <TikTokIcon size={20} />
      </IconWrapper>

      <IconWrapper
        {...iconProps}
        href="https://wa.me/4917387123877"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktieren Sie uns über WhatsApp"
        className="text-green-300 transition-colors hover:text-green-200"
      >
        <WhatsAppIcon size={20} />
      </IconWrapper>
    </>
  );
};
