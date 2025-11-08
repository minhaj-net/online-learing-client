import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-green-500 text-xl font-bold mb-2">ViserLead</h1>
          <p className="text-gray-400 text-sm">
            ViserLead is an AI-powered SaaS platform designed to help small businesses generate verified leads effortlessly. Grow business faster with vislead.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-white font-semibold mb-3">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h2 className="text-white font-semibold mb-3">Policy Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Security Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact Info</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Blue Street, London, United Kingdom</li>
            <li>Email: <a href="mailto:support@viserlead.com" className="hover:text-white">support@viserlead.com</a></li>
            <li>Phone: <a href="tel:+52300000000" className="hover:text-white">+523-00000000</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © ViserLead 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
