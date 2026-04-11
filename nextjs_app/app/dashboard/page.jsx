'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function PerfectTicketDashboard() {
  // Track navbar scroll state for sticky effect
  const [scrolled, setScrolled] = useState(false);
  // Track currently selected navbar item (Movies, Plays, Events, Sports)
  const [activeNav, setActiveNav] = useState('Movies');
  // Track currently selected category filter
  const [activeCategory, setActiveCategory] = useState('All');
  // Track selected location and dropdown visibility
  const [selectedLocation, setSelectedLocation] = useState('Karnataka');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef(null);

  const indiaLocations = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry'
  ].sort((a, b) => a.localeCompare(b));

  // Update navbar appearance when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close location dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#231A16] selection:bg-[#E85D33] selection:text-white">
      {/* ── DESIGN SYSTEM: Global styles and color variables ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --orange: #E85D33;
          --espresso: #231A16;
          --paper: #F7F4EF;
          --border: #E5E1DA;
        }

        body { 
          font-family: 'Inter', sans-serif; 
          background-color: var(--paper);
        }

        .serif { font-family: 'Instrument Serif', serif; }

        /* Orange button styling with hover effects */
        .btn-orange {
          background: #E85D33;
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-orange:hover {
          background: #D44D26;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(232, 93, 51, 0.2);
        }

        /* Dashboard-matched CTA and location chip styling */
        .btn-sign {
          background: #231A16;
          color: #F7F4EF;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-sign:hover {
          background: #3A322F;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(35, 26, 22, 0.2);
        }

        .btn-location {
          color: #3A322F;
          background: #EFE9DF;
          border: 1px solid #D8CFC2;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-location:hover {
          color: #231A16;
          background: #E7DECF;
          border-color: #C9B9A2;
          transform: translateY(-1px);
        }

        .location-menu {
          background: #fff;
          border: 1px solid #E5E1DA;
          box-shadow: 0 16px 36px rgba(35, 26, 22, 0.12);
          transform-origin: top right;
          animation: dropdownIn 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .location-option {
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .location-option:hover {
          transform: translateX(3px);
        }

        /* Card styling with shadow and border transition */
        .card-shadow {
          transition: all 0.4s ease;
          border: 1px solid var(--border);
        }

        .card-shadow:hover {
          background: white;
          border-color: transparent;
          box-shadow: 0 20px 40px rgba(35, 26, 22, 0.06);
          transform: translateY(-4px);
        }

        /* Hide scrollbar for horizontal scrolling elements */
        .no-scrollbar::-webkit-scrollbar { display: none; }

        /* Smooth animation for underline appearance */
        @keyframes slideInUnderline {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        /* Animation for nav underline */
        .animate-in {
          animation: slideInUnderline 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* ══ NAVIGATION: Fixed navbar with scroll effect and large spacing ══ */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E1DA] py-3 shadow-lg' : 'bg-white/95 py-5 border-b border-[#E5E1DA]'
      }`}>
        {/* Navbar container with max-width and centered alignment */}
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Left side: Logo and navigation links */}
          <div className="flex items-center gap-16 lg:gap-20">
            {/* Branding: TicketPoint logo */}
            <span className="serif text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap text-[#231A16]">TicketPoint<span className="text-[#E85D33]">.</span></span>
            {/* Desktop navigation menu with proper spacing and underline indicator */}
            <div className="hidden lg:flex items-center gap-10 xl:gap-14 border-b-2 border-transparent">
              {['Movies', 'Plays', 'Events', 'Sports'].map(item => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`relative py-2 text-[13px] font-semibold uppercase tracking-widest transition-all duration-300 pb-3 ${
                    activeNav === item 
                      ? 'text-[#E85D33] font-bold' 
                      : 'text-[#6B635F] hover:text-[#231A16]'
                  }`}
                >
                  {item}
                  {/* Animated orange underline that appears when active */}
                  {activeNav === item && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#E85D33] rounded-full animate-in fade-in duration-300"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Location and Sign In button */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Location selector with full India states and UTs */}
            <div ref={locationRef} className="hidden sm:block relative">
              <button
                onClick={() => setIsLocationOpen((prev) => !prev)}
                className="text-base font-semibold px-6 py-3.5 rounded-full btn-location min-w-64 text-left"
                aria-haspopup="listbox"
                aria-expanded={isLocationOpen}
              >
                {selectedLocation}, IN
              </button>
              {isLocationOpen && (
                <div className="location-menu absolute right-0 mt-3 w-80 max-h-80 overflow-y-auto rounded-2xl p-2 z-50">
                  {indiaLocations.map((state) => (
                    <button
                      key={state}
                      onClick={() => {
                        setSelectedLocation(state);
                        setIsLocationOpen(false);
                      }}
                      className={`location-option w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
                        selectedLocation === state
                          ? 'bg-[#231A16] text-white'
                          : 'text-[#3A322F] hover:bg-[#F3EEE6]'
                      }`}
                      role="option"
                      aria-selected={selectedLocation === state}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Sign In CTA button with hover animation */}
            <button className="btn-sign px-8 md:px-11 py-3.5 rounded-full text-base font-bold">Sign In</button>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION: Main heading with search and featured content ══ */}
      <section className="pt-40 md:pt-44 pb-24 md:pb-28 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Two-column layout: Left content, Right featured image */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column with headline and search */}
          <div>
            {/* Badge label above headline */}
            <div className="inline-block px-4 py-2 rounded-full border border-[#E85D33] text-[#E85D33] text-[10px] font-bold uppercase tracking-widest mb-8">
              Exclusive Access 2026
            </div>
            {/* Main headline with orange accent */}
            <h1 className="serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-10">
              Buy Fast<br/>
              <span className="text-[#E85D33]">Buy smart.</span>
            </h1>
            {/* Subheading description with proper spacing */}
            <p className="text-lg text-[#6B635F] max-w-md leading-relaxed mb-12">
              The premium marketplace for entertainment. Experience the finest cinema, theater, and live sports with a single touch.
            </p>
            
            {/* Search bar with input and button */}
            <div className="relative max-w-lg">
              <input 
                type="text" 
                placeholder="Search by movie, artist or venue..."
                className="w-full h-16 pl-8 pr-32 rounded-2xl bg-white border border-[#E5E1DA] focus:border-[#E85D33] focus:outline-none transition-all shadow-sm text-[#231A16]"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 btn-orange rounded-xl text-sm font-bold">
                Find Now
              </button>
            </div>
          </div>

          {/* Right column: Featured image section (hidden on mobile) */}
          <div className="relative hidden lg:block lg:mt-12">
            {/* Featured card with gradient overlay */}
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-[#231A16] shadow-2xl relative group">
                {/* Dark gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#231A16] via-transparent to-transparent opacity-60" />
                {/* Featured content text overlay */}
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[#E85D33] font-bold text-sm mb-3 uppercase tracking-tighter">Featured Today</p>
                  <h2 className="serif text-5xl leading-tight">Dhurandhar: The Revenge</h2>
                  <p className="mt-5 text-white/70 max-w-xs text-base">Now playing in IMAX 4K across all major screens in Mysuru.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATEGORY FILTER: Horizontal scrollable category buttons ══ */}
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16 md:mb-20">
        {/* Scrollable container with category options */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {['All', 'Trending', 'Cinematic', 'Live Music', 'Stage Plays', 'Football'].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat ? 'bg-[#231A16] text-white' : 'bg-white border border-[#E5E1DA] hover:border-[#E85D33]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══ CONTENT GRID: Recommended shows in 4-column layout ══ */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-28 md:mb-36">
        {/* Section header with title and explore link */}
        <div className="flex items-end justify-between mb-14 md:mb-16">
          <h2 className="serif text-4xl md:text-5xl">Recommended <span className="text-[#E85D33]">Experiences</span></h2>
          <a href="#" className="font-bold text-sm border-b-2 border-[#231A16] hover:text-[#E85D33] transition-colors">Explore All</a>
        </div>

        {/* Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <ShowCard title="Project Hail Mary" genre="Sci-Fi / Drama" rating="9.0" color="#3A322F" />
          <ShowCard title="Love Mocktail 3" genre="Romance / Family" rating="9.2" color="#4D443F" />
          <ShowCard title="The Biker" genre="Action / Sports" rating="8.8" color="#231A16" />
          <ShowCard title="Vaazha 2" genre="Comedy / Drama" rating="9.6" color="#5C504A" />
        </div>
      </section>

      {/* ══ TRENDING STRIP: Dark section showcasing trending items ══ */}
      <section className="bg-[#231A16] py-24 md:py-28 text-white overflow-hidden relative">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
          {/* Header with title and action button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
            <div>
              <p className="text-[#E85D33] font-bold tracking-widest uppercase text-xs mb-4">Fast Selling</p>
              <h2 className="serif text-5xl md:text-6xl">Trending in Mysuru</h2>
            </div>
            {/* View schedule button with hover effect */}
            <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-[#231A16] transition-all font-bold text-sm">
              View Schedule
            </button>
          </div>

          {/* Trending items list with proper vertical spacing */}
          <div className="space-y-6 md:space-y-8">
            <TrendingItem rank="01" title="Border 2" type="Action / History" meta="IMAX • 2D • 4D" />
            <TrendingItem rank="02" title="Mysuru Music Festival" type="Concert" meta="Open Grounds • Starts 6 PM" />
            <TrendingItem rank="03" title="The Great Indian Circus" type="Live Show" meta="Family • Weekend Special" />
          </div>
        </div>
      </section>

      {/* ══ FOOTER: Company info, links, and support sections ══ */}
      <footer className="py-20 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto grid md:grid-cols-4 gap-12 md:gap-16 border-t border-[#E5E1DA] mt-20 md:mt-28">
        {/* Company description and branding */}
        <div className="col-span-2">
          <span className="serif text-3xl font-bold mb-8 block">QuickSale<span className="text-[#E85D33]">.</span></span>
          <p className="text-[#6B635F] max-w-sm leading-relaxed">
            The world's most intuitive ticket booking platform. Built for speed, designed for the smart shopper.
          </p>
        </div>
        {/* Company navigation links */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-5 text-sm text-[#6B635F]">
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">Careers</a></li>
          </ul>
        </div>
        {/* Support and legal links */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-5 text-sm text-[#6B635F]">
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">Safety</a></li>
            <li><a href="#" className="hover:text-[#E85D33] transition-colors">Terms</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

/* ShowCard Component: Individual ticket/show card with hover animation */
function ShowCard({ title, genre, rating, color }) {
  return (
    <div className="group cursor-pointer">
      {/* Card image container with hover effects and gradient overlay */}
      <div 
        className="aspect-[2/3] rounded-[32px] mb-6 overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
        style={{ backgroundColor: color }}
      >
        {/* Recommended badge in top-left corner */}
        <div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
          Recommended
        </div>
        {/* Gradient overlay appears on hover with book button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
           <button className="w-full py-4 btn-orange rounded-2xl font-bold text-sm">Book Tickets</button>
        </div>
      </div>
      {/* Card metadata: title, genre, and rating */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg mb-2 group-hover:text-[#E85D33] transition-colors">{title}</h3>
          <p className="text-sm text-[#6B635F]">{genre}</p>
        </div>
        {/* Star rating in top right */}
        <div className="flex items-center gap-1 text-[#E85D33] font-bold">
          <span className="text-sm">★</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}

/* TrendingItem Component: List item for trending shows with arrow button */
function TrendingItem({ rank, title, type, meta }) {
  return (
    <div className="group flex items-center p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white hover:text-[#231A16] transition-all duration-500 cursor-pointer">
      {/* Ranking number with large serif font */}
      <span className="serif text-5xl md:text-6xl font-bold text-white/10 group-hover:text-[#E85D33] w-20 md:w-24 transition-colors">
        {rank}
      </span>
      {/* Item details: title and type */}
      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-bold mb-1">{title}</h4>
        <p className="text-sm opacity-60 group-hover:opacity-100">{type}</p>
      </div>
      {/* Metadata (venue/mode info) shown on desktop */}
      <div className="hidden md:block text-right mr-12">
        <p className="text-xs uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100">{meta}</p>
      </div>
      {/* Arrow icon button with border and hover effect */}
      <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#E85D33] flex items-center justify-center group-hover:bg-[#E85D33] group-hover:text-white transition-all">
        →
      </div>
    </div>
  );
}