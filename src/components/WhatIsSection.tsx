export default function WhatIsSection() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
          What is MiniBitcoin Swap?
        </h2>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 rounded-2xl blur-xl"></div>

          <div className="relative backdrop-blur-xl bg-slate-900/40 border border-amber-500/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                MiniBitcoin Swap is a fast, decentralized, low-fee exchange platform that allows users to instantly swap IBTC with other supported cryptocurrencies.
              </p>

              <p>
                Built entirely on smart contracts, it delivers seamless, secure, and transparent token conversions—without intermediaries, delays, or centralized risks.
              </p>

              <p>
                Designed for usability and speed, the platform gives users the simplicity of a modern DEX with lower fees and faster execution.
              </p>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
