import { ArrowLeftRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="relative w-full max-w-2xl aspect-square md:aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-blue-500/5 to-transparent rounded-3xl blur-3xl"></div>

            <div className="relative h-full flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>

                <div className="relative flex items-center justify-center gap-8 md:gap-16">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-amber-500/30 shadow-2xl">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">IBTC</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-amber-500/20 shadow-xl">
                      <ArrowLeftRight className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-blue-500/30 shadow-2xl">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                MiniBitcoin Swap
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Instant, secure, low-fee crypto swaps powered by decentralized smart contracts.
            </p>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold text-slate-900 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105">
                <span className="relative z-10">Start Swapping</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
