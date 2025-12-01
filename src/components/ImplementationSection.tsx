import { Shield, Zap, DollarSign, TrendingUp } from 'lucide-react';

const implementations = [
  {
    icon: Shield,
    title: 'Smart Contract–Based Swapping',
    description: 'Trades execute automatically and transparently via secure smart contracts.',
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'BNB Smart Chain ensures ultra-low gas fees for every transaction.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Optimized routing guarantees fast, smooth swaps with accurate pricing.',
  },
  {
    icon: TrendingUp,
    title: 'Reward-Enabled Liquidity',
    description: 'LP providers earn passive rewards from swap fees.',
  },
];

export default function ImplementationSection() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
          How MiniBitcoin Implements the Swap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {implementations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-6 group">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors shadow-xl">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
