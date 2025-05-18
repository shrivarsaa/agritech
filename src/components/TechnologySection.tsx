import React, { useState } from 'react';
import { ArrowRight, Download, Info } from 'lucide-react';
import Button from './ui/Button';

const TechnologySection: React.FC = () => {
  // State for the interactive 3D model (simplified for this implementation)
  const [modelRotation, setModelRotation] = useState({ x: 0, y: 0 });
  
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

  // Handle 3D model interaction (simplified)
  const handleModelDrag = (e: React.MouseEvent) => {
    setModelRotation({
      x: modelRotation.x + e.movementY * 0.5,
      y: modelRotation.y + e.movementX * 0.5
    });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Interactive 3D Model (simplified as a rotating div) */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-96 flex items-center justify-center relative overflow-hidden group">
            <div 
              className="w-64 h-64 relative transition-transform duration-500"
              style={{ 
                transform: `rotateX(${modelRotation.x}deg) rotateY(${modelRotation.y}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseDown={() => document.addEventListener('mousemove', handleModelDrag as any)}
              onMouseUp={() => document.removeEventListener('mousemove', handleModelDrag as any)}
            >
              {/* Simplified 3D model representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-full opacity-70" 
                style={{ transform: 'translateZ(-32px)' }} />
              <div className="absolute inset-4 bg-gradient-to-tr from-green-600 to-blue-500 rounded-full opacity-80" 
                style={{ transform: 'translateZ(-16px)' }} />
              <div className="absolute inset-8 bg-gradient-to-r from-green-700 to-blue-400 rounded-full opacity-90" 
                style={{ transform: 'translateZ(0px)' }} />
              <div className="absolute inset-16 bg-gradient-to-b from-green-800 to-blue-300 rounded-full" 
                style={{ transform: 'translateZ(16px)' }} />
              <div className="absolute inset-24 bg-gradient-to-t from-green-900 to-blue-200 rounded-full" 
                style={{ transform: 'translateZ(32px)' }} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
              <div className="text-white bg-black/50 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Drag to rotate
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How CAT-HTR Works</h3>
            <p className="text-gray-600 mb-6">
              The Catalytic Hydrothermal Reactor (CAT-HTR) technology uses supercritical water to convert agricultural waste into high-quality biocrude oil, which is then refined into sustainable aviation fuel (SAF) and sustainable maritime fuel (SMF).
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Collection & Preparation</h4>
                  <p className="text-gray-600">Agricultural waste is collected, cleaned, and processed to prepare it for conversion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Hydrothermal Processing</h4>
                  <p className="text-gray-600">Biomass is processed at high temperature and pressure in the presence of water and catalysts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Refinement</h4>
                  <p className="text-gray-600">The biocrude oil is refined into high-quality fuels that meet international standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Distribution</h4>
                  <p className="text-gray-600">The sustainable fuels are distributed to aviation and maritime partners.</p>
                </div>
              </div>
            </div>

            <Button 
              variant="primary" 
              icon={<Download size={18} />}
            >
              Request Technical Whitepaper
            </Button>
          </div>
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
          
          <div className="relative">
            {/* Process flow diagram - simplified for this implementation */}
            <div className="max-w-4xl mx-auto h-64 relative">
              {/* Step boxes with connector lines */}
              <div className="absolute left-0 top-0 w-1/4 h-full flex items-center justify-center">
                <div className="w-full max-w-xs bg-green-100 rounded-lg p-4 text-center">
                  <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                  <h4 className="font-medium text-green-800">Biomass Collection</h4>
                </div>
              </div>
              
              <div className="absolute left-1/4 top-0 w-1/4 h-full flex items-center justify-center">
                <div className="w-full max-w-xs bg-green-100 rounded-lg p-4 text-center">
                  <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                  <h4 className="font-medium text-green-800">CAT-HTR Processing</h4>
                </div>
              </div>
              
              <div className="absolute left-2/4 top-0 w-1/4 h-full flex items-center justify-center">
                <div className="w-full max-w-xs bg-green-100 rounded-lg p-4 text-center">
                  <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                  <h4 className="font-medium text-green-800">Refinement</h4>
                </div>
              </div>
              
              <div className="absolute left-3/4 top-0 w-1/4 h-full flex items-center justify-center">
                <div className="w-full max-w-xs bg-green-100 rounded-lg p-4 text-center">
                  <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                  <h4 className="font-medium text-green-800">SAF & SMF Production</h4>
                </div>
              </div>
              
              {/* Connecting arrows */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="75%" y1="50%" x2="95%" y2="50%" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Arrow heads */}
                <polygon points="47%,48% 50%,50% 47%,52%" fill="#16a34a" />
                <polygon points="72%,48% 75%,50% 72%,52%" fill="#16a34a" />
                <polygon points="92%,48% 95%,50% 92%,52%" fill="#16a34a" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;