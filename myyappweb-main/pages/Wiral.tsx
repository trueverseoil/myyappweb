
import React from 'react';
import { Gift, Video, Ticket, Users, TrendingUp, CheckCircle, Smartphone, User, Store, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Wiral: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <SEO 
        title="Wiral Short Video App Promotion - Get Instant Customers | Myyapp"
        description="Exclusive to Myyapp clients: Promote your business to 50,000+ active Indian users inside the Wiral short video app ecosystem. Gain real customers and viral traction instantly."
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
            <span className="text-pink-300 font-bold tracking-wider uppercase">Powered by Wiral Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Go Viral.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400">Grow Faster with Wiral.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            Exclusive to Myyapp clients: We promote your business directly inside the Wiral short video app to 50,000+ active creators and trend-seekers across India.
          </p>
          <button 
             onClick={() => navigate('/contact')}
             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/30"
          >
             List Your Business on Wiral
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">How Wiral Promotion Works</h2>
             <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">We use the power of short-form video and social engagement to drive real business results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center transition-transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Video className="h-8 w-8 text-cyan-600" />
               </div>
               <h3 className="text-xl font-bold mb-4 dark:text-white">Trending Videos</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Create viral video ads that creators use in their trends. Guaranteed visibility.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center transition-transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <User className="h-8 w-8 text-purple-600" />
               </div>
               <h3 className="text-xl font-bold mb-4 dark:text-white">Creator Talent</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Leverage local creators to showcase your talent or products to their followers.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center transition-transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Store className="h-8 w-8 text-orange-600" />
               </div>
               <h3 className="text-xl font-bold mb-4 dark:text-white">Shop Local</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Drive foot traffic to your physical store through hyper-local interactive map ads.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center transition-transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Megaphone className="h-8 w-8 text-pink-600" />
               </div>
               <h3 className="text-xl font-bold mb-4 dark:text-white">Get Popular</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Automated branding campaigns that keep your business in the spotlight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-black mb-8">Why Wiral App Integration is Essential</h2>
             <div className="space-y-6">
                {[
                  "Active short-form video consumer base",
                  "Creator-driven authentic brand trust",
                  "Location-aware promotional cards",
                  "Gamified 'Watch & Earn' user rewards",
                  "Integrated 'Get Started' conversion funnel"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-cyan-400 h-6 w-6" />
                    <span className="text-lg text-slate-300">{item}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="md:w-1/2 bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-2xl">
             <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
               <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Target Audience</span>
               <span className="font-bold text-white text-lg">India (Tier 1, 2 & 3)</span>
             </div>
             <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
               <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Verified Creators</span>
               <span className="font-bold text-white text-lg">50,000+</span>
             </div>
             <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
               <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Daily Impressions</span>
               <span className="font-bold text-white text-lg">1.5 Million+</span>
             </div>
             <div className="mt-8 text-center">
               <p className="text-sm text-slate-400 mb-6">Ready to reach the masses with short video?</p>
               <button 
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
               >
                 Start Viral Campaign
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
