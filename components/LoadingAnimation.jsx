'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if loading has already been shown in this session
    const loadingShown = sessionStorage.getItem('loadingAnimationShown');
    
    if (loadingShown) {
      setIsVisible(false);
      return;
    }

    // Mark that loading animation has been shown
    sessionStorage.setItem('loadingAnimationShown', 'true');

    // 5 seconds for slower, smooth animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Navigate to login page after animation completes
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1A1A1A 0%, #2D1A0E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .loading-container {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-wrapper {
          animation: fadeInDown 1.5s ease-out;
          margin-bottom: 10px;
        }

        .logo-text {
          font-size: 56px;
          font-weight: 700;
          color: #e6dfd7;
          font-family: 'Georgia', serif;
          letter-spacing: 2px;
          margin: 0;
          text-shadow: 0 4px 20px rgba(217, 79, 43, 0.3);
        }

        .tagline {
          animation: slideInUp 1.5s ease-out 0.3s both;
          font-size: 18px;
          color: #D1D5DB;
          font-family: 'Nunito', sans-serif;
          letter-spacing: 1px;
          margin: 0;
          font-weight: 300;
        }

        .loading-bars-wrapper {
          animation: scaleUp 1s ease-out 0.8s both;
          margin-top: 30px;
        }

        .loading-bars {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 8px;
          height: 60px;
        }

        .bar {
          width: 8px;
          background: linear-gradient(180deg, #D94F2B 0%, #e6dfd7 100%);
          border-radius: 4px;
          animation: pulse 1.2s ease-in-out infinite;
        }

        .bar:nth-child(1) {
          height: 30px;
          animation-delay: 0s;
        }

        .bar:nth-child(2) {
          height: 45px;
          animation-delay: 0.15s;
        }

        .bar:nth-child(3) {
          height: 35px;
          animation-delay: 0.3s;
        }

        .bar:nth-child(4) {
          height: 50px;
          animation-delay: 0.45s;
        }

        .bar:nth-child(5) {
          height: 40px;
          animation-delay: 0.6s;
        }

        .progress-bar {
          animation: slideInUp 1.5s ease-out 1.2s both;
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 20px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #D94F2B, #e6dfd7);
          border-radius: 2px;
          animation: shimmer 3s ease-in-out infinite;
          background-size: 200% 100%;
        }

        .loading-text {
          animation: slideInUp 1.5s ease-out 1.5s both;
          font-size: 13px;
          color: #888;
          font-family: 'Nunito', sans-serif;
          letter-spacing: 2px;
          margin-top: 15px;
          text-transform: uppercase;
        }

        .dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #D94F2B;
          border-radius: 50%;
          animation: pulse 1.8s ease-in-out infinite;
          margin-left: 3px;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        .corner-accent {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(217, 79, 43, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .corner-accent.top-left {
          top: -100px;
          left: -100px;
        }

        .corner-accent.bottom-right {
          bottom: -100px;
          right: -100px;
        }
      `}</style>

      <div className="corner-accent top-left"></div>
      <div className="corner-accent bottom-right"></div>

      <div className="loading-container">
        <div className="logo-wrapper">
          <h1 className="logo-text">QuickSale</h1>
        </div>

        <p className="tagline">Move fast. Buy smart.</p>

        <div className="loading-bars-wrapper">
          <div className="loading-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p className="loading-text">
          Loading
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </p>
      </div>
    </div>
  );
}
