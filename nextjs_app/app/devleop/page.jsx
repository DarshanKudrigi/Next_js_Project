'use client';

export default function Develop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Development</h1>
          <p className="text-xl text-indigo-600 font-semibold">Learn about our development process</p>
        </div>

        {/* Development Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Frontend Development */}
          <div className="bg-white rounded-xl p-8 border-2 border-indigo-300 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🎨</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frontend Development</h2>
            <ul className="text-gray-700 space-y-3 font-medium">
              <li>✓ <strong>React 19.2.3</strong> - Modern component-based UI</li>
              <li>✓ <strong>Next.js 16.1.7</strong> - Server and client rendering</li>
              <li>✓ <strong>Tailwind CSS 4</strong> - Utility-first styling</li>
              <li>✓ <strong>Responsive Design</strong> - Mobile-first approach</li>
              <li>✓ <strong>Modern JavaScript</strong> - ES6+ features</li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="bg-white rounded-xl p-8 border-2 border-indigo-300 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Tools</h2>
            <ul className="text-gray-700 space-y-3 font-medium">
              <li>✓ <strong>ESLint 9</strong> - Code quality & standards</li>
              <li>✓ <strong>PostCSS 4</strong> - CSS transformation</li>
              <li>✓ <strong>Babel React Compiler</strong> - Code optimization</li>
              <li>✓ <strong>Node.js</strong> - Runtime environment</li>
              <li>✓ <strong>npm Scripts</strong> - Build automation</li>
            </ul>
          </div>

        </div>

        {/* Project Structure */}
        <div className="bg-white rounded-xl p-10 border-2 border-indigo-400 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-indigo-300">Project Structure</h2>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre>{`nextjs_app/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.jsx       # About page
│   ├── contact/
│   │   └── page.jsx       # Contact page
│   └── devleop/
│       └── page.jsx       # Development page
├── public/                # Static assets
├── next.config.mjs        # Next.js config
├── tailwind.config.js     # Tailwind config
├── package.json           # Dependencies
└── eslint.config.mjs      # ESLint config`}</pre>
          </div>
        </div>

        {/* Available Scripts */}
        <div className="bg-white rounded-xl p-10 border-2 border-indigo-400 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-indigo-300">Available Scripts</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
              <p className="font-mono font-bold text-indigo-600 mb-2">npm run dev</p>
              <p className="text-gray-700">Starts development server on <strong>localhost:3000</strong></p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
              <p className="font-mono font-bold text-indigo-600 mb-2">npm run build</p>
              <p className="text-gray-700">Creates optimized production build</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
              <p className="font-mono font-bold text-indigo-600 mb-2">npm run start</p>
              <p className="text-gray-700">Runs the production build</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
              <p className="font-mono font-bold text-indigo-600 mb-2">npm run lint</p>
              <p className="text-gray-700">Runs ESLint to check code quality</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

