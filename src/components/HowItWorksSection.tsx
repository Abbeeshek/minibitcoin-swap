import { ArrowLeftRight, Droplet, Network, Zap } from 'lucide-react';

const features = [
  {
    icon: ArrowLeftRight,
    title: 'Instant Token Swaps',
    description: 'Exchange IBTC with supported tokens in seconds using automated liquidity pools.',
  },
  {
    icon: Droplet,
    title: 'Liquidity Pools',
    description: 'Users provide liquidity and earn rewards from swap fees and volume incentives.',
  },
  {
    icon: Network,
    title: 'Cross-Chain Compatibility (Future)',
    description: 'The swap expands to BNB, Polygon, Ethereum L2, and future partner networks.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized smart contracts ensure near-instant execution with minimal slippage.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
          How MiniBitcoin Swap Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full backdrop-blur-xl bg-slate-900/40 border border-amber-500/10 group-hover:border-amber-500/30 rounded-xl p-8 transition-all duration-300 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg blur-md"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-amber-500/20">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
