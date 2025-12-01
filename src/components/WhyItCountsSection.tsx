import { Zap, Coins, Users, Shield, Link2 } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Fast, Low-Cost Trading',
    description: 'Cheaper and quicker than most decentralized exchanges.',
  },
  {
    icon: Coins,
    title: 'Real Utility for IBTC',
    description: 'IBTC becomes an active trading token, increasing demand.',
  },
  {
    icon: Users,
    title: 'Community Earnings',
    description: 'Liquidity providers earn consistent passive income.',
  },
  {
    icon: Shield,
    title: 'Transparent & Secure',
    description: 'Smart contract–driven swaps ensure safety and fairness.',
  },
  {
    icon: Link2,
    title: 'Ecosystem Integration',
    description: 'Swap ties into Launchpad, Marketplace, Metaverse, and Staking.',
  },
];

export default function WhyItCountsSection() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
          Why This Counts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full backdrop-blur-xl bg-slate-900/40 border border-amber-500/10 group-hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300 shadow-xl flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full blur-md"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-amber-500/20">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
