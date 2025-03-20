import { Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <Link to="/" className="inline-block">
          </Link>
        </div>

        <div className="flex flex-row justify-between">
          {/* Use Cases */}
          <div className="w-1/5">
            <h3 className="font-medium text-lg mb-4">Use Cases</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Admin panels</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Firebase GUI</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">MongoDB GUI</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">GraphQL GUI</Link></li>
            </ul>
          </div>

          {/* Integrations */}
          <div className="w-1/5">
            <h3 className="font-medium text-lg mb-4">Integrations</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">PostgreSQL</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">MySQL</Link></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="w-1/5">
            <h3 className="font-medium text-lg mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Changelog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-1/5">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Contact Support</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Community home</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-1/5">
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Customers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-row justify-between items-center">
          <div className="text-gray-400">© Mandiri Steel, Inc.</div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition">Security</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition"><Linkedin className="w-5 h-5" /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-5 h-5" /></Link>
            <Link to="#" className="text-gray-400 hover:text-white transition"><Github className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
