import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 backdrop-blur-lg bg-white/5 border-t border-white/10 text-white px-6 py-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo or Name */}
        <div className="text-xl font-semibold tracking-wide">
          © {new Date().getFullYear()} <span className="text-white/90">Arpan Bera</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-white/70">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-white/70">
          <a
            href="https://github.com/mickeybera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/share/156RPFq9mw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/developer_mickey?utm_source=qr&igsh=eHlzenEwd2FkaGpw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/arpanbera475?t=5VJwn6WYxz-SzqwhE6SRqA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-100 transition" 
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
