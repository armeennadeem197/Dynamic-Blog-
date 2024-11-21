'use client'
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    { name: "LinkedIn", src: "/linkedin.svg", link: "https://www.linkedin.com" },
    { name: "Twitter", src: "/twitter.svg", link: "https://www.twitter.com" },
    { name: "Facebook", src: "/facebook.svg", link: "https://www.facebook.com" },
    { name: "Instagram", src: "/instagram.svg", link: "https://www.instagram.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white text-black py-10 mt-20"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16 px-7">
        <div className="flex flex-col lg:flex-row gap-16 lg:px-0">
          {/* Left Section: Logo, Description and Social Icons */}
          <div className="flex flex-col gap-4 lg:w-[30%]">
            <div className="flex items-center">
              <h4 className="text-2xl font-bold">CodeMaster</h4>
            </div>
            <p className="text-black">
              Empowering sustainable through technology and innovation.
            </p>
            <div className="flex gap-4 mt-4">
              {socialIcons.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="flex flex-col gap-4 pt-10 lg:pt-0 lg:w-[30%]">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="space-y-2">
              <li><a href="/about" className="text-black hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-black hover:underline">Contact</a></li>
              <li><a href="/privacy" className="text-black hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-black hover:underline">Terms of Use</a></li>
            </ul>
          </div>

          {/* Right Section: Newsletter Subscription */}
          <div className="flex flex-col gap-4 pt-10 lg:pt-0 lg:w-[30%]">
            <h1 className="text-xl font-semibold">Subscribe to Our Newsletter</h1>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-black"
            />
            <button className="bg-black text-white px-6 py-2 mt-2 rounded hover:bg-black">Subscribe</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-evenly pt-10 border-t border-gray-700 mt-8 flex-col lg:flex-row">
          <p className="text-center lg:text-left">&copy; 2024 CodeMaster. All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
}
