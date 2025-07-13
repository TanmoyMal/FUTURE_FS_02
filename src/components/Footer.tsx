import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">ShopZone</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted online shopping destination. We offer quality products at competitive prices with exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Size Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Electronics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Home & Kitchen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Sports & Fitness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Best Sellers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Shopping Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@shopzone.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6 text-blue-400" />
              <div>
                <p className="font-medium text-sm">Free Shipping</p>
                <p className="text-gray-400 text-xs">On orders over ₹4,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-blue-400" />
              <div>
                <p className="font-medium text-sm">Secure Payment</p>
                <p className="text-gray-400 text-xs">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="h-6 w-6 text-blue-400" />
              <div>
                <p className="font-medium text-sm">Easy Returns</p>
                <p className="text-gray-400 text-xs">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 ShopZone. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;