'use client';

import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: '👩‍💼',
      date: 'March 19, 2026',
      content: 'This platform is absolutely incredible! The user interface is so intuitive and the performance is lightning fast. Highly recommended!',
      rating: 5,
      helpful: 120,
      },
    {
      id: 2,
      author: 'Michael Chen',
      avatar: '👨‍💻',
      date: 'March 18, 2026',
      content: 'Great experience overall. The responsive design works perfectly on all devices. Looking forward to more features!',
      rating: 5,
      helpful: 98,
    },
    {
      id: 3,
      author: 'Emma Williams',
      avatar: '👩‍🎓',
      date: 'March 17, 2026',
      content: 'The modern tech stack (React, Next.js, Tailwind) makes development smooth. Documentation is clear and well-organized.',
      rating: 5,
      helpful: 87,
    },
    {
      id: 4,
      author: 'David Martinez',
      avatar: '👨‍🎨',
      date: 'March 16, 2026',
      content: 'Beautiful design combined with excellent functionality. The attention to detail in the UI/UX is commendable.',
      rating: 4,
      helpful: 76,
    },
    {
      id: 5,
      author: 'Lisa Anderson',
      avatar: '👩‍🔬',
      date: 'March 15, 2026',
      content: 'Seamless navigation and fast load times. The development team has done an amazing job with this project!',
      rating: 5,
      helpful: 112,
    },
    {
      id: 6,
      author: 'James Wilson',
      avatar: '👨‍🏫',
      date: 'March 14, 2026',
      content: 'Impressive implementation of modern web technologies. Perfect for learning best practices in Next.js development.',
      rating: 5,
      helpful: 95,
    },
  ]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? 'text-white drop-shadow-lg' : 'text-white/40'}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-6xl font-black bg-gradient-to-r from-white via-blue-50 to-cyan-50 bg-clip-text text-transparent mb-4 drop-shadow-lg">💬 User Comments</h1>
          <p className="text-xl text-white font-bold drop-shadow-md">See what users think about our platform</p>
          <p className="text-blue-100 mt-2">Total Comments: <span className="font-black text-yellow-300 text-2xl">{comments.length}</span></p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 text-center border-2 border-white/30">
            <p className="text-4xl font-black text-white">{comments.length}</p>
            <p className="text-blue-100 font-bold mt-2">Total Reviews</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 text-center border-2 border-white/30">
            <p className="text-4xl font-black text-white">★ 4.8</p>
            <p className="text-yellow-900 font-bold mt-2">Average Rating</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 text-center border-2 border-white/30">
            <p className="text-4xl font-black text-white">98%</p>
            <p className="text-emerald-900 font-bold mt-2">Satisfied Users</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-6">
          {comments.map((comment) => {
            const ratingColors = {
              5: 'from-emerald-300 to-green-400 border-emerald-300',
              4: 'from-blue-300 to-cyan-400 border-blue-300',
              3: 'from-yellow-300 to-orange-400 border-yellow-300',
              2: 'from-orange-300 to-red-400 border-orange-300',
              1: 'from-red-300 to-rose-400 border-red-300',
            };
            const bgGradient = ratingColors[comment.rating] || ratingColors[5];
            return (
            <div
              key={comment.id}
              className={`bg-gradient-to-r ${bgGradient} rounded-2xl p-8 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/40 shadow-lg`}
            >
              {/* Comment Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{comment.avatar}</div>
                  <div>
                    <h3 className="text-2xl font-black text-white drop-shadow-md">{comment.author}</h3>
                    <p className="text-sm text-white/80 font-semibold">{comment.date}</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur">
                <div className="flex gap-1 text-2xl">
                  {renderStars(comment.rating)}
                </div>
                <span className="text-white font-bold text-lg">{comment.rating}/5</span>
              </div>

              {/* Comment Content */}
              <p className="text-white text-lg leading-relaxed mb-6 font-medium drop-shadow-sm">
                "{comment.content}"
              </p>

              {/* Helpful Section */}
              <div className="flex items-center justify-between pt-6 border-t-2 border-white/30">
                <button className="flex items-center gap-2 px-6 py-2 bg-white/30 hover:bg-white/50 backdrop-blur rounded-full transition-all duration-300 text-white font-bold transform hover:scale-105">
                  👍 Helpful ({comment.helpful})
                </button>
                <span className="text-sm text-white/80 font-semibold">Comment #{comment.id}</span>
              </div>
            </div>
          );
          })}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16 pb-8">
          <button className="px-12 py-4 bg-white/25 hover:bg-white/40 backdrop-blur-md text-white font-black text-xl rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl border-2 border-white">
            ✨ Load More Comments ✨
          </button>
        </div>

      </div>
    </div>
  );
}
