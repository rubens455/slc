import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // wrapper to change page and scroll to top to avoid preserving scroll position
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // ensure top-left position; use instant behavior for route-like jumps
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'aboutus':
        return <AboutPage />;
      case 'contactus':
        return <ContactPage />;
      case 'book':
        return <BookPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen">
  <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;