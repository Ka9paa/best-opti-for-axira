export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-blue-500 mb-4">Axira Optimizer</h3>
            <p className="text-gray-400">
              Professional game optimization tool for maximum FPS and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Axira Optimizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
