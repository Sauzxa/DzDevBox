
import { Users, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${useScrollAnimation('team')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented Algerian developers behind DzDevVox
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((member, index) => (
            <Card key={member} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md ${useScrollAnimation('team', index * 100)}`}>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member {member}</h3>
                <p className="text-blue-600 mb-3">Full Stack Developer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Passionate developer from Algeria specializing in modern web technologies
                </p>
                <div className="flex justify-center space-x-3">
                  <Github className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" size={20} />
                  <Linkedin className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" size={20} />
                  <Twitter className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
