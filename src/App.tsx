import React, { useState, useMemo } from 'react';
import { CartProvider } from './contexts/CartContext';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortBy, setSortBy] = useState('name');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // name
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleNavigate = (page: 'home' | 'products') => {
    setCurrentPage(page);
    if (page === 'home') {
      setSearchQuery('');
      setSelectedCategory('');
      setPriceRange([0, 20000]);
      setSortBy('name');
    }
  };

  const handleShopNowClick = () => {
    setCurrentPage('products');
  };

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLoginClick={() => setIsLoginOpen(true)}
          onSignupClick={() => setIsSignupOpen(true)}
        />
        
        {currentPage === 'home' ? (
          <HomePage onShopNowClick={handleShopNowClick} />
        ) : (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <Filters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </aside>
              
              {/* Main Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Products {filteredProducts.length > 0 && `(${filteredProducts.length})`}
                  </h2>
                  {searchQuery && (
                    <p className="text-gray-600 mt-1">
                      Showing results for "{searchQuery}"
                    </p>
                  )}
                </div>
                
                <ProductList products={filteredProducts} />
              </div>
            </div>
          </main>
        )}

        {/* Cart Sidebar */}
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckoutClick={handleCheckoutClick}
        />

        {/* Checkout Modal */}
        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Login Modal */}
        <LoginPage
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToSignup={handleSwitchToSignup}
        />

        {/* Signup Modal */}
        <SignupPage
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
          onSwitchToLogin={handleSwitchToLogin}
        />

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;