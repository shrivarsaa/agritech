import React, { useState } from 'react';
import { ArrowRight, Download, Info } from 'lucide-react';
import Button from './ui/Button';

const TechnologySection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Biomass Processing",
      description: "Advanced processing of agricultural waste into high-quality biocrude",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      stats: {
        efficiency: "85-90%",
        capacity: "250,000 tonnes/year",
        output: "High-grade SAF & SMF"
      }
    },
    {
      title: "Catalytic Conversion",
      description: "Innovative catalytic technology for optimal conversion rates",
      image: "https://images.pexels.com/photos/2478338/pexels-photo-2478338.jpeg",
      stats: {
        efficiency: "95% catalyst recovery",
        temperature: "350-400°C",
        pressure: "200-250 bar"
      }
    },
    {
      title: "Clean Energy Process",
      description: "Environmentally conscious processing with minimal emissions",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      stats: {
        emissions: "80% reduction",
        water: "45% recycled",
        waste: "Near-zero"
      }
    }
  ];

  // Compare technologies data
  const compareTechnologies = [
    {
      name: 'CAT-HTR (Our Technology)',
      efficiency: '85-90%',
      feedstock: 'Wide range of agricultural waste',
      output: 'High-quality SAF & SMF',
      carbon: 'Up to 80% reduction',
      highlight: true
    },
    {
      name: 'Pyrolysis',
      efficiency: '60-75%',
      feedstock: 'Limited feedstock range',
      output: 'Lower quality, needs upgrading',
      carbon: '40-60% reduction',
      highlight: false
    },
    {
      name: 'Gasification',
      efficiency: '65-80%',
      feedstock: 'Requires dry feedstock',
      output: 'Syngas, requires processing',
      carbon: '45-65% reduction',
      highlight: false
    },
    {
      name: 'Fermentation',
      efficiency: '40-55%',
      feedstock: 'Sugars and starches',
      output: 'Primarily ethanol',
      carbon: '35-50% reduction',
      highlight: false
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our CAT-HTR Technology</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Catalytic Hydrothermal Reactor technology converts biomass into high-quality renewable fuels through an innovative liquefaction process.
          </p>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
              
              {/* Stats Overlay */}
              <div className={`absolute inset-0 bg-green-900/90 rounded-xl p-6 flex flex-col justify-center transform transition-all duration-300 ${
                activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <h4 className="text-xl font-semibold text-white mb-4">{feature.title} Stats</h4>
                {Object.entries(feature.stats).map(([key, value], i) => (
                  <div key={i} className="mb-3">
                    <div className="text-green-200 text-sm mb-1 capitalize">{key}</div>
                    <div className="text-white font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-green-800 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Technology Comparison</h3>
            <p className="text-green-100">See how CAT-HTR stacks up against alternative biofuel technologies</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Efficiency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedstock Flexibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Quality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Reduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {compareTechnologies.map((tech, index) => (
                  <tr 
                    key={index} 
                    className={tech.highlight ? "bg-green-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${tech.highlight ? "text-green-800" : "text-gray-900"}`}>
                            {tech.name}
                            {tech.highlight && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Our Technology
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.efficiency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.feedstock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.output}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.carbon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Biomass to Fuel Conversion Process</h3>
          
          <div className="relative py-12">
            <div className="max-w-5xl mx-auto">
              {/* Process Steps */}
              <div className="grid grid-cols-4 gap-8 relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-600 transform -translate-y-1/2" style={{ width: '100%' }} />
                </div>

                {/* Step Boxes */}
                {[
                  { title: "Biomass Collection", icon: "🌾" },
                  { title: "CAT-HTR Processing", icon: "⚗️" },
                  { title: "Refinement", icon: "🔬" },
                  { title: "SAF & SMF Production", icon: "⛽" }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-lg p-4 border-2 border-green-600 text-center relative z-10">
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <h4 className="font-medium text-green-800">{step.title}</h4>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "ISO 14001",
                image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
                description: "Environmental Management"
              },
              {
                name: "ISO 9001",
                image: "https://images.pexels.com/photos/3943715/pexels-photo-3943715.jpeg",
                description: "Quality Management"
              },
              {
                name: "ISCC",
                image: "https://images.pexels.com/photos/3943717/pexels-photo-3943717.jpeg",
                description: "Sustainability Certification"
              },
              {
                name: "RSB",
                image: "https://images.pexels.com/photos/3943718/pexels-photo-3943718.jpeg",
                description: "Roundtable on Sustainable Biomaterials"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-sm text-center text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;