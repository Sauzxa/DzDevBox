
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const TechStack = () => {
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter',
    'Go', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Docker'
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${useScrollAnimation('tech-stack')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver exceptional results
          </p>
        </div>

        <div className={`relative ${useScrollAnimation('tech-stack', 100)}`}>
          <div className="flex animate-scroll-left">
            <div className="flex items-center space-x-8 mx-8">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-full whitespace-nowrap">
                  <span className="text-blue-600 font-semibold text-lg">{tech}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 mx-8">
              {technologies.map((tech) => (
                <div key={`${tech}-duplicate`} className="flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-full whitespace-nowrap">
                  <span className="text-blue-600 font-semibold text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
