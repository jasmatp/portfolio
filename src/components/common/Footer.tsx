import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMailBulk } from "react-icons/fa";
import type { ElementType, ReactElement } from "react";
import { SocialIconProps } from "../types/types";

const FaMailBulkIcon = FaMailBulk as unknown as () => ReactElement;
// const FaCodeIcon = FaFileCode as unknown as () => ReactElement;

export const iconMap: Record<string, ElementType> = {
  FaFacebookF: FaFacebookF as ElementType,
  FaTwitter: FaTwitter as ElementType,
  FaLinkedinIn: FaLinkedinIn as ElementType,
  FaInstagram: FaInstagram as ElementType,
};

const Footer: React.FC<SocialIconProps> = ({ socialIconData }) => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
        {/* Logo + Copyright */}
        <div>
          <div className="flex items-center justify-center md:justify-start text-[#4a9fd8] space-x-2">
            {/* <img src="/logo.svg" alt="Thames Logo" className="w-6 h-6" /> */}
            {/* <FaCodeIcon />
            <span className="text-xl text-black font-semibold">Freelance</span> */}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            All rights reserved <span className="font-medium"></span> © 2025
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg text-black font-semibold mb-2">Newsletter</h3>
          <form className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs">
              <input
                type="email"
                placeholder="Submit your email"
                className="w-full py-2 px-4 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <span className="absolute right-3 top-2.5 text-[#4a9fd8] text-sm">
                <FaMailBulkIcon />
              </span>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg text-black font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-3">
            {socialIconData.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  // target="_blank"
                  className={`text-white p-2 rounded-full hover:scale-110 transform transition bg-[#4a9fd8] ${social.color}`}
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
