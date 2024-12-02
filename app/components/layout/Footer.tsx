import { Socials } from "../sections/Socials";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Melvin Teo. All rights reserved.
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
