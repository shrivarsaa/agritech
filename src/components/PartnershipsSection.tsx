import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import Button from './ui/Button';

const PartnershipsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Partner logos (would normally be imported images)
  const partners = [
    { 
      name: "AirGreen Airlines", 
      type: "Aviation", 
      logo: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg"
    },
    { 
      name: "OceanShip Lines", 
      type: "Maritime", 
      logo: "https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg"
    },
    { 
      name: "GreenTech Energy", 
      type: "Technology", 
      logo: "https://images.pexels.com/photos/996156/pexels-photo-996156.jpeg"
    },
    { 
      name: "AgriGrow Cooperative", 
      type: "Agricultural", 
      logo: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
    },
    { 
      name: "Sustainable Aviation Group", 
      type: "Aviation", 
      logo: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
    },
    { 
      name: "CleanShip Maritime", 
      type: "Maritime", 
      logo: "https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg"
    }
  ];
  
  // Certification badges
  const certifications = [
    { 
      name: "ISO 14001 Environmental Management", 
      logo: "https://images.pexels.com/photos/5157102/pexels-photo-5157102.jpeg"
    },
    { 
      name: "Carbon Trust Standard", 
      logo: "https://images.pexels.com/photos/5157107/pexels-photo-5157107.jpeg"
    },
    { 
      name: "Sustainable Biomass Program", 
      logo: "https://images.pexels.com/photos/5157082/pexels-photo-5157082.jpeg"
    },
    { 
      name: "GHG Protocol Certified", 
      logo: "https://images.pexels.com/photos/5157062/pexels-photo-5157062.jpeg"
    }
  ];
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const scrollLeft = carouselRef.current.scrollLeft;
    
    carouselRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  // Certification animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const certifications = document.querySelectorAll('.certification-badge');
    certifications.forEach((cert) => observer.observe(cert));
    
    return () => {
      certifications.forEach((cert) => observer.unobserve(cert));
    };
  }, []);

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Partnerships & Certifications</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders in aviation, maritime shipping, agriculture, and sustainability.
          </p>
        </div>
        
        {/* Partners Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Strategic Partners</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollCarousel('left')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md overflow-hidden group relative"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-4 text-white text-center">
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-gray-300">{partner.type} Partner</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="primary" 
              icon={<Link size={18} />}
            >
              Join as Strategic Partner
            </Button>
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications & Standards</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="certification-badge opacity-0 bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center text-center transform translate-y-10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;