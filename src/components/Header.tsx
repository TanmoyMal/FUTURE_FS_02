import React from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: 'home' | 'products';
  onNavigate: (page: 'home' | 'products') => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onCartClick, 
  searchQuery, 
  onSearchChange, 
  currentPage, 
  onNavigate,
  onLoginClick,
  onSignupClick
}) => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              ShopZone
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'home'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'products'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>Products</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className={`hidden md:flex flex-1 max-w-lg mx-8 ${currentPage === 'home' ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                disabled={currentPage === 'home'}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={currentPage === 'home' ? 'Go to Products to search...' : 'Search products...'}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Auth Buttons */}
            <button 
              onClick={onLoginClick}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Login
            </button>
            <button 
              onClick={onSignupClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
            >
              Sign Up
            </button>
            
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Cart Button for Mobile */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                    currentPage === 'home'
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate('products');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                    currentPage === 'products'
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  Products
                </button>
              </div>
              
              {/* Mobile Search */}
              <div className={`relative ${currentPage === 'home' ? 'opacity-50 pointer-events-none' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  disabled={currentPage === 'home'}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder={currentPage === 'home' ? 'Go to Products to search...' : 'Search products...'}
                />
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    onLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-left border border-gray-300 rounded-lg hover:border-blue-300"
                >
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </div>
                </button>
                <button 
                  onClick={() => {
                    onSignupClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;