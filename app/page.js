'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Zap, Shield } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isRotating, setIsRotating] = useState(false);
  const [googleHovered, setGoogleHovered] = useState(false);
  const [googleClicked, setGoogleClicked] = useState(false);

  const handleLoginClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1500);
  };

  const handleRegister = () => {
    router.push("register");
  };
  return (
    <main className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <style>{`
        @keyframes googleIconBounce {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(15deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes googleClickBounce {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.1);
          }
          75% {
            transform: scale(0.98);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes googleClickPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(232, 68, 26, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(232, 68, 26, 0.1);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(232, 68, 26, 0);
          }
        }
        
        .google-btn-icon-animate {
          animation: googleIconBounce 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .google-btn-clicked {
          animation: googleClickBounce 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .google-btn-pulse {
          animation: googleClickPulse 800ms ease-out;
        }
      `}</style>
      {/* ── LEFT SIDE — untouched ── */}
      <section className="relative hidden overflow-hidden bg-linear-to-br from-[#1A1A1A] to-[#2D1A0E] lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:p-10 xl:p-14">
        <div className="relative z-10 mx-auto flex w-full max-w-140 flex-col justify-center">
          <h1 className="max-w-115 text-[72px] font-light leading-[0.96] tracking-[-0.03em] text-[#e6dfd7] xl:text-[90px]">
            Move fast.
            <br />
            Buy smart.
          </h1>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <ShoppingBag className="h-5 w-5" />
              <p className="text-[20px] font-medium">2M+ Shoppers</p>
            </div>

            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <Zap className="h-5 w-5" />
              <p className="text-[20px] font-medium">Fast Delivery</p>
            </div>

            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <Shield className="h-5 w-5" />
              <p className="text-[20px] font-medium">Secure Payments</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-10 z-10 flex items-center gap-6 xl:left-14">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl font-semibold text-gray-300">
            D
          </div>
          <p className="text-base text-gray-400">QuickSale © 2026</p>
        </div>
      </section>

   {/* ── RIGHT SIDE — Login Form ── */}
      <section style={{ background: '#F5F2ED', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '440px', padding: '0' }}>

          <h1 style={{ fontSize: '40px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 4px 0', fontFamily: 'Georgia, serif' }}>QuickSale</h1>

          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 48px 0', fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: '1.1' }}>Welcome back.</h1>

          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '8px', fontFamily: 'sans-serif' }}>Email address</label>
          <div style={{ position: 'relative', marginBottom: '28px' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>✉️</span>
            
            <input type="email" placeholder="you@example.com" style={{ width: '100%', boxSizing: 'border-box', padding: '13px 14px 13px 42px', fontSize: '15px', border: '1.5px solid #ddd', borderRadius: '10px', background: '#fff', color: '#1a1a1a', outline: 'none', fontFamily: 'sans-serif' }} />
          </div>

          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '8px', fontFamily: 'sans-serif' }}>Password</label>
          <div style={{ position: 'relative', marginBottom: '36px' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>🔒</span>
            <input type="password" defaultValue="mysecretpassword" style={{ width: '100%', boxSizing: 'border-box', padding: '13px 42px 13px 42px', fontSize: '15px', border: '1.5px solid #bcd0f7', borderRadius: '10px', background: '#EEF4FF', color: '#1a1a1a', outline: 'none', fontFamily: 'sans-serif' }} />
            <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '16px', color: '#888' }}>👁</span>
          </div>

          <button 
            onClick={handleLoginClick}
            disabled={isRotating}
            style={{ width: '100%', boxSizing: 'border-box', padding: '15px', background: '#D94F2B', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '16px', fontWeight: '600', cursor: isRotating ? 'not-allowed' : 'pointer', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px', opacity: isRotating ? 0.95 : 1 }}
            className={isRotating ? 'login-btn-loading' : ''}
            onMouseEnter={(e) => !isRotating && (e.target.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => !isRotating && (e.target.style.transform = 'scale(1)')}
          >
            {isRotating ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span className="btn-text">Log In</span>
                <span style={{ fontSize: '18px' }}>→</span>
              </>
            )}
          </button>

          <div style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginBottom: '16px', fontFamily: 'sans-serif' }}>or continue with</div>

          <button 
            onMouseEnter={() => setGoogleHovered(true)}
            onMouseLeave={() => setGoogleHovered(false)}
            onClick={() => {
              setGoogleClicked(true);
              setTimeout(() => setGoogleClicked(false), 800);
            }}
            style={{ 
              width: '100%', 
              boxSizing: 'border-box', 
              padding: '13px', 
              background: googleHovered ? '#FFF9F6' : '#fff', 
              border: googleHovered ? '1.5px solid #E8441A' : '1.5px solid #ddd', 
              borderRadius: '10px', 
              color: googleHovered ? '#E8441A' : '#1a1a1a', 
              fontSize: '15px', 
              fontWeight: '600', 
              cursor: 'pointer', 
              fontFamily: 'sans-serif', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px', 
              marginBottom: '24px',
              transition: 'all 300ms ease-out',
              transform: googleHovered ? 'scale(1.01)' : 'scale(1)',
              boxShadow: googleHovered ? '0 4px 12px rgba(232,68,26,0.15)' : 'none'
            }}
            className={googleClicked ? 'google-btn-clicked google-btn-pulse' : ''}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 48 48"
              className={googleHovered ? 'google-btn-icon-animate' : ''}
              style={{ transition: 'transform 450ms ease-in' }}
            >
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.8 6C12.4 13.2 17.8 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8C43.8 37.5 46.5 31.4 46.5 24.5z"/>
              <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.9-6z"/>
              <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2.1 1.4-4.7 2.3-7.7 2.3-6.2 0-11.5-3.7-13.5-9l-7.9 6C6.6 42.6 14.6 48 24 48z"/>
            </svg>
            Continue with Google
          </button>

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', margin: '0', fontFamily: 'sans-serif' }}>
            Don't have an account? <span onClick={handleRegister} style={{ color: '#1a1a1a', fontWeight: '600', cursor: 'pointer' }}>Create one</span>
          </p>

        </div>
      </section>
    </main>
  );
} 