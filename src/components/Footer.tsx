
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">DzDevVox</h3>
          <p className="text-gray-400 mb-6">
            Crafting digital experiences with passion from Algeria
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 DzDevVox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
