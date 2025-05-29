
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-industryspan-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/14f81410-34ba-45e7-9aae-69eee7d368e3.png" 
              alt="IndustrySpan Consulting" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Linking Local Business to Global Success. Your Glocal Partner for technical sales consulting and digital visibility.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-industryspan-green transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://wa.me/31631185610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-industryspan-green transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-industryspan-green transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-industryspan-green transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-industryspan-green transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-industryspan-green transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Eindhoven, Netherlands</p>
              <p>
                <a 
                  href="mailto:info@amolpalve.com" 
                  className="hover:text-industryspan-green transition-colors duration-200"
                >
                  info@amolpalve.com
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/31631185610" 
                  className="hover:text-industryspan-green transition-colors duration-200"
                >
                  +31 631185610
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 IndustrySpan Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
