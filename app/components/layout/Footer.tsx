export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Add your social media links here */}
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
