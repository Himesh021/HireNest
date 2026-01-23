import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Hire<span className="text-[#00A264]">NEST</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Connecting talent with opportunities. Find your dream job or
              discover the perfect candidate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/PrivacyPolicy"}
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/TermsofServices"}
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A264] transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A264] transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A264] transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A264] transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A264] transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with the latest job opportunities and career tips.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 HireNEST. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#00A264] text-sm transition"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-[#00A264] text-sm transition"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-[#00A264] text-sm transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
