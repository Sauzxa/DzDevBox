import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Services = () => {
  const servicesAnimation = useScrollAnimation('services');

  // Define services with their images and titles
  const services = [
    {
      //hello
      title: "web\ndevelopment",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      animationDelay: 100
    },
    {
      title: "graphic\ndesign",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      animationDelay: 200
    },
    {
      title: "Mobile\nApps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      animationDelay: 300
    },
    {
      title: "SEO &\nContent writing",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      animationDelay: 400
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* White background with CSS-based dotted pattern */}
      <div className="absolute inset-0 bg-white"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '10px 10px',
          opacity: 0.15
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${servicesAnimation}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating modern digital solutions using the latest technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${useScrollAnimation('services', service.animationDelay)}`}
              style={{ height: '290px', width: '100%', maxWidth: '215px', margin: '0 auto' }}
            >
              {/* Image layer */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-gray-800"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Black overlay layer */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text layer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
