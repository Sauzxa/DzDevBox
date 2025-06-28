
import { Code, Smartphone, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${useScrollAnimation('services')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating modern digital solutions using the latest technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md ${useScrollAnimation('services', 100)}`}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Code className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Modern websites and web applications using Next.js, React, TypeScript, and Tailwind CSS
              </p>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md ${useScrollAnimation('services', 200)}`}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Smartphone className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-6">
                Cross-platform mobile applications using Flutter and modern mobile development practices
              </p>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md ${useScrollAnimation('services', 300)}`}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Brain className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-6">
                Intelligent solutions with agentic AI integration using modern backend technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
