import React from 'react';
import { TreePine, Map, ArrowRight, Globe2, FileCheck, BarChart as ChartBar, Leaf, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1A0F] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A0F] to-[#0A1A0F]/90"></div>
        </div>
        
        <div className="relative">
          <div className="container mx-auto px-4">
            <nav className="py-6">
              <div className="flex items-center gap-2">
                <TreePine className="text-green-400" size={32} />
                <span className="font-bold text-xl">EUDR Monitor</span>
              </div>
            </nav>
          </div>

          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full text-green-400 text-sm font-medium mb-6">
                <Leaf size={16} />
                EU Deforestation Regulation Compliance
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Sustainable Coffee Farming Through
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Advanced Monitoring</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Empowering Muringato Catchment farmers with cutting-edge Web-GIS technology for EUDR compliance and sustainable agriculture.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Launch Application
                  <ExternalLink size={20} />
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-[#0F2515]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4%</div>
              <p className="text-gray-400">Net Tree Cover Loss</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1.34%</div>
              <p className="text-gray-400">Annual Conversion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2025</div>
              <p className="text-gray-400">EUDR Deadline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#0A1A0F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Monitoring Features</h2>
            <p className="text-gray-400">
              Our Web-GIS application provides comprehensive tools for tracking and maintaining EUDR compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#132B1A] to-[#0F2515] p-8 rounded-2xl border border-green-900/50">
              <div className="bg-green-500/10 p-4 rounded-xl w-fit mb-6">
                <Globe2 className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earth Engine Integration</h3>
              <p className="text-gray-400">
                Real-time monitoring of land use changes using Google Earth Engine API.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#132B1A] to-[#0F2515] p-8 rounded-2xl border border-green-900/50">
              <div className="bg-green-500/10 p-4 rounded-xl w-fit mb-6">
                <Map className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satellite Tracking</h3>
              <p className="text-gray-400">
                High-precision farm detection using NRT satellite imagery.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#132B1A] to-[#0F2515] p-8 rounded-2xl border border-green-900/50">
              <div className="bg-green-500/10 p-4 rounded-xl w-fit mb-6">
                <ChartBar className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-400">
                Comprehensive analytics and reporting for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F2515] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ensure Your EUDR Compliance?
            </h2>
            <p className="text-gray-400 mb-8">
              Join coffee farmers in Muringato Catchment who are already using our platform to maintain EU market access.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A1A0F] border-t border-green-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <TreePine className="text-green-400" size={24} />
              <span className="font-bold">EUDR Monitor</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 EUDR Compliance Web-GIS Application. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;