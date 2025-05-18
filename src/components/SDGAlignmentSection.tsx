import React, { useState } from 'react';

interface SDGData {
  id: number;
  name: string;
  description: string;
  color: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const SDGAlignmentSection: React.FC = () => {
  const [activeSDG, setActiveSDG] = useState<number | null>(null);
  
  const sdgs: SDGData[] = [
    {
      id: 7,
      name: "Affordable and Clean Energy",
      description: "Our technology contributes to the global transition to renewable energy by creating sustainable biofuels from agricultural waste.",
      color: "#FAC800",
      metrics: [
        { label: "Renewable Fuel Produced", value: "250M liters annually" },
        { label: "Fossil Fuel Displaced", value: "210M liters annually" },
        { label: "Energy Efficiency", value: "85% conversion efficiency" }
      ]
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      description: "We create quality jobs throughout the agricultural value chain while stimulating economic growth in rural communities.",
      color: "#A21942",
      metrics: [
        { label: "Direct Jobs Created", value: "200+ per facility" },
        { label: "Indirect Jobs Created", value: "3,000+ in supply chain" },
        { label: "Economic Value Added", value: "$75M per facility annually" }
      ]
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      description: "Our CAT-HTR technology represents breakthrough innovation in the biofuels sector, creating new industrial infrastructure.",
      color: "#FD6925",
      metrics: [
        { label: "R&D Investment", value: "$15M annually" },
        { label: "Process Patents", value: "12 secured, 8 pending" },
        { label: "Technology Transfer", value: "4 host countries" }
      ]
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      description: "We transform agricultural waste into valuable fuel, exemplifying circular economy principles and resource efficiency.",
      color: "#BF8B2E",
      metrics: [
        { label: "Waste Utilized", value: "250,000 tonnes annually" },
        { label: "Field Burning Avoided", value: "65% reduction in regions" },
        { label: "Water Usage", value: "45% lower than alternatives" }
      ]
    },
    {
      id: 13,
      name: "Climate Action",
      description: "Our fuels significantly reduce carbon emissions compared to fossil alternatives, contributing to climate change mitigation.",
      color: "#407F46",
      metrics: [
        { label: "CO₂ Reduction", value: "1.8M tonnes annually" },
        { label: "Carbon Intensity", value: "80% lower than fossil fuels" },
        { label: "Methane Avoidance", value: "15,000 tonnes CO₂e annually" }
      ]
    }
  ];

  return (
    <section id="sdg" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#16a34a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UN SDG Alignment</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our business model directly contributes to five United Nations Sustainable Development Goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Interactive SDG Wheel */}
          <div className="relative h-96 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Central circle */}
                <div className="absolute inset-1/4 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
                  <img 
                    src="https://images.pexels.com/photos/3768010/pexels-photo-3768010.jpeg" 
                    alt="Agri-BioFuels SDG Impact" 
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                
                {/* SDG circles */}
                {sdgs.map((sdg, index) => {
                  const angle = ((index * (360 / sdgs.length)) * Math.PI) / 180;
                  const radius = 120; // Distance from center
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  
                  return (
                    <button
                      key={sdg.id}
                      className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeSDG === sdg.id ? 'scale-125 z-10' : 'hover:scale-110'
                      }`}
                      style={{
                        backgroundColor: sdg.color,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                        left: '50%',
                        top: '50%'
                      }}
                      onClick={() => setActiveSDG(activeSDG === sdg.id ? null : sdg.id)}
                    >
                      <span className="text-white font-bold text-lg">
                        {sdg.id}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* SDG Details */}
          {activeSDG && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fadeIn">
              {sdgs.filter(sdg => sdg.id === activeSDG).map(sdg => (
                <div key={sdg.id}>
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">SDG {sdg.id}: {sdg.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{sdg.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sdg.metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                        <div className="font-semibold text-gray-800">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!activeSDG && (
            <div className="text-center text-gray-600">
              Click on any SDG icon to see how our work contributes to that goal
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SDGAlignmentSection;