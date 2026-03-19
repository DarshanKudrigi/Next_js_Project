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
      helpful: 124,
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
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4">💬 User Comments</h1>
          <p className="text-xl text-indigo-600 font-semibold">See what users think about our platform</p>
          <p className="text-gray-600 mt-2">Total Comments: <span className="font-bold text-indigo-600">{comments.length}</span></p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 shadow-md text-center">
            <p className="text-3xl font-black text-indigo-600">{comments.length}</p>
            <p className="text-gray-700 font-semibold mt-1">Total Reviews</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 shadow-md text-center">
            <p className="text-3xl font-black text-yellow-400">★ 4.8</p>
            <p className="text-gray-700 font-semibold mt-1">Average Rating</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 shadow-md text-center">
            <p className="text-3xl font-black text-green-600">98%</p>
            <p className="text-gray-700 font-semibold mt-1">Satisfied Users</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white rounded-xl p-8 border-2 border-indigo-200 hover:border-indigo-400 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Comment Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{comment.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{comment.author}</h3>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1 text-2xl">
                  {renderStars(comment.rating)}
                </div>
                <span className="text-gray-600 font-semibold">{comment.rating}/5</span>
              </div>

              {/* Comment Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                "{comment.content}"
              </p>

              {/* Helpful Section */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-indigo-100 rounded-lg transition-all duration-300 text-gray-700 font-semibold">
                  👍 Helpful ({comment.helpful})
                </button>
                <span className="text-sm text-gray-500">Comment #{comment.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Comments
          </button>
        </div>

      </div>
    </div>
  );
}
