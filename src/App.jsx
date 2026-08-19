import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import JerseyCarousel from './components/JerseyCarousel';
import JerseyLab from './components/JerseyLab';
import RetroArchive from './components/RetroArchive';
import CommunityWall from './components/CommunityWall';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import OrderFailModal from './components/OrderFailModal';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { MASTER_STORE_DATA as DEFAULT_SPORTS } from './data/sportsData';

export default function App() {
  const [activeSport, setActiveSport] = useState('football');
  
  // Load from localStorage if available, otherwise default master catalog
  const [sportsCatalog, setSportsCatalog] = useState(() => {
    try {
      const saved = localStorage.getItem('jh_sports_catalog');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading localStorage:', e);
    }
    return DEFAULT_SPORTS;
  });

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewJersey, setQuickViewJersey] = useState(null);
  const [checkoutSummary, setCheckoutSummary] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [failedOrderError, setFailedOrderError] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Add Item to Cart
  const handleAddToCart = (jersey, size = 'L', customization = null) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item => item.jersey.id === jersey.id && 
                item.size === size && 
                item.customization?.customName === (customization?.customName || '')
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [...prev, { jersey, size, customization, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  // Update Quantity
  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(index);
      return;
    }

    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = newQuantity;
      return updated;
    });
  };

  // Remove Item
  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  // Proceed to Checkout
  const handleProceedToCheckout = (summary) => {
    setCheckoutSummary(summary);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Complete Order
  const handleOrderComplete = (orderData) => {
    setConfirmedOrder(orderData);
    setIsCheckoutOpen(false);
    setCartItems([]);
  };

  const handleOrderFail = (errorMessage) => {
    setFailedOrderError(errorMessage || 'Payment transaction failed. Please try again.');
    setIsCheckoutOpen(false);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative">
      
      {/* 1. Header & Hero Section */}
      <section className="w-full bg-[#F7F6F2] flex justify-center border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-8 py-2 flex flex-col">
          <HeaderNav 
            activeSport={activeSport} 
            onSelectSport={setActiveSport} 
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
          <HeroSection 
            activeSport={activeSport}
            sportsCatalog={sportsCatalog}
            onSelectSport={setActiveSport}
            onExploreClick={handleExploreClick}
          />
        </div>
      </section>

      {/* 2. Matchday Lookbook Filmstrip */}
      <section className="w-full bg-[#E9E6DF] flex justify-center border-b border-black/[0.08]">
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-8">
          <JerseyCarousel 
            activeSport={activeSport}
            sportsCatalog={sportsCatalog}
            onQuickView={setQuickViewJersey}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* 3. The Jersey Lab Studio — Auto Synced with Active Sport & Store Catalog! */}
      <section className="w-full bg-[#161616] text-white flex justify-center border-b border-black/[0.1]">
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-8">
          <JerseyLab 
            activeSport={activeSport}
            sportsCatalog={sportsCatalog}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* 4. Retro Archives & Concept Vault */}
      <section className="w-full bg-[#FAF7F2] flex justify-center border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-8">
          <RetroArchive 
            sportsCatalog={sportsCatalog}
            onAddToCart={handleAddToCart}
            onQuickView={setQuickViewJersey}
          />
        </div>
      </section>

      {/* 5. Community Matchday Wall */}
      <section className="w-full bg-[#E6E8EA] flex justify-center border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-8">
          <CommunityWall sportsCatalog={sportsCatalog} />
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="w-full bg-[#111111] text-white flex justify-center">
        <div className="w-full max-w-[1400px]">
          <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
        </div>
      </footer>

      {/* Slide-over Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Quick View Customization Modal */}
      {quickViewJersey && (
        <QuickViewModal 
          jersey={quickViewJersey}
          onClose={() => setQuickViewJersey(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Complete Nepal Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          checkoutSummary={checkoutSummary}
          cartItems={cartItems}
          onOrderComplete={handleOrderComplete}
          onOrderFail={handleOrderFail}
        />
      )}

      {/* Order Confirmed Celebration Receipt Modal */}
      {confirmedOrder && (
        <OrderSuccessModal 
          orderDetails={confirmedOrder}
          onClose={() => setConfirmedOrder(null)}
        />
      )}

      {/* Order Failure Modal */}
      {failedOrderError && (
        <OrderFailModal 
          errorMessage={failedOrderError}
          onRetry={() => {
            setFailedOrderError(null);
            setIsCheckoutOpen(true);
          }}
          onClose={() => setFailedOrderError(null)}
        />
      )}

      {/* Store Owner No-Code Admin Panel Modal */}
      {isAdminOpen && (
        <AdminPanel 
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          sportsCatalog={sportsCatalog}
          onUpdateSportsCatalog={setSportsCatalog}
        />
      )}

    </div>
  );
}
