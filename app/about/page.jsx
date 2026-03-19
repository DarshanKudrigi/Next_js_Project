export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About This Project</h1>
        
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">File Information</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>File:</strong> app/about/page.jsx</li>
            <li><strong>Project Name:</strong> nextjs_app</li>
            <li><strong>Version:</strong> 0.1.0</li>
            <li><strong>Status:</strong> Private</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">Core Dependencies</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Next.js</strong> 16.1.7 - React framework for production</li>
                <li>• <strong>React</strong> 19.2.3 - UI library</li>
                <li>• <strong>React-DOM</strong> 19.2.3 - React rendering</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">Dev Dependencies</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Tailwind CSS</strong> 4 - Utility-first styling</li>
                <li>• <strong>ESLint</strong> 9 - Code linting</li>
                <li>• <strong>Babel React Compiler</strong> 1.0.0 - Compiler optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}