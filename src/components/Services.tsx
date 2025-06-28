import { 
  Code, 
  Palette, 
  Layout, 
  FileSearch, 
  BarChart3, 
  Building2 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Services = () => {
  const servicesAnimation = useScrollAnimation('services');
  
  // Pre-calculate animation classes for each service item
  const animationClass1 = useScrollAnimation('services', 100);
  const animationClass2 = useScrollAnimation('services', 200);
  const animationClass3 = useScrollAnimation('services', 300);
  const animationClass4 = useScrollAnimation('services', 400);
  const animationClass5 = useScrollAnimation('services', 500);
  const animationClass6 = useScrollAnimation('services', 600);
  
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      name: "Website Development",
      animationClass: animationClass1
    },
    {
      icon: <Palette className="h-10 w-10" />,
      name: "Graphic Designing",
      animationClass: animationClass2
    },
    {
      icon: <Layout className="h-10 w-10" />,
      name: "UI/UX Web Designing",
      animationClass: animationClass3
    },
    {
      icon: <FileSearch className="h-10 w-10" />,
      name: "SEO and Content Writing",
      animationClass: animationClass4
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      name: "Digital Market Planning",
      animationClass: animationClass5
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      name: "Business Management",
      animationClass: animationClass6
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${servicesAnimation}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating modern digital solutions using the latest technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl border-0 shadow-md overflow-hidden ${service.animationClass}`}
            >
              {/* Semi-circle background with secondary color */}
              <div className="absolute top-0 inset-x-0 h-32 bg-secondary/20 rounded-[100%_100%_0_0] -translate-y-1/2"></div>
              
              <CardContent className="p-8 flex flex-col items-center justify-center text-center relative h-64">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:bg-primary transition-colors duration-300">
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
