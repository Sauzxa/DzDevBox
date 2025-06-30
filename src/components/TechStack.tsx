import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const TechStack = () => {
  // Define technologies with their icon URLs
  const technologies = [
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'Node.js', icon: '/icons/nodejs.png' },
    { name: 'Go', icon: '/icons/go.png' },
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'TypeScript', icon: '/icons/ts.png' },
    { name: 'Redis', icon: '/icons/redis.png' },
    { name: 'Firebase', icon: '/icons/firebase.png' },
    { name: 'PostgreSQL', icon: '/icons/postgrase.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Tailwind', icon: '/icons/tailwaand.png' },
    { name: 'npm', icon: '/icons/npm.png' },
    { name: 'Python Manager', icon: '/icons/pyManage.png' },
    { name: 'Dart', icon: '/icons/dart.png' },
    { name: 'Supabase', icon: '/icons/supabase.png' },
    { name: 'Flutter', icon: '/icons/Flutter.png' },
    { name: 'Java', icon: '/icons/Java.png' },
    { name: 'JavaScript', icon: '/icons/Javascript.png' },
    { name: 'Linux', icon: '/icons/Linux.png' },
    { name: 'Python', icon: '/icons/Python.png' },
    { name: 'VS Code', icon: '/icons/Visual Studio Code.png' }
  ];

  return (
    <section id="tech-stack" className="bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative w-full overflow-hidden">
          {/* Marquee container */}
          <div className="w-[200%] flex">
            {/* First set of icons */}
            <div className="w-1/2 flex justify-around items-center animate-marquee">
              {technologies.map((tech, index) => (
                <div
                  key={`tech-1-${index}`}
                  className="flex items-center justify-center mx-2"
                  style={{ height: '60px', width: '60px', minWidth: '60px', minHeight: '60px' }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-[60px] w-[60px] object-contain"
                    title={tech.name}
                    style={{ maxHeight: '60px', maxWidth: '60px' }}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set - this is what creates the seamless effect */}
            <div className="w-1/2 flex justify-around items-center animate-marquee">
              {technologies.map((tech, index) => (
                <div
                  key={`tech-2-${index}`}
                  className="flex items-center justify-center mx-2"
                  style={{ height: '60px', width: '60px', minWidth: '60px', minHeight: '60px' }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-[60px] w-[60px] object-contain"
                    title={tech.name}
                    style={{ maxHeight: '60px', maxWidth: '60px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
