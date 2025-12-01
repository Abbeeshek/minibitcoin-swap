import { ArrowLeftRight, Droplet, Zap, Shield, TrendingUp, Coins, Network, DollarSign, Users, Link2 } from 'lucide-react';
import HeroSection from './components/HeroSection';
import WhatIsSection from './components/WhatIsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImplementationSection from './components/ImplementationSection';
import WhyItCountsSection from './components/WhyItCountsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <ImplementationSection />
      <WhyItCountsSection />
      <Footer />
    </div>
  );
}

export default App;
