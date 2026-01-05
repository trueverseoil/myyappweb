
import React from 'react';
import { Target, Heart, Shield, Users, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors">
             <SEO 
               title="About Myyapp - Empowering Indian Business with Technology"
               description="Learn how Myyapp is helping 100,000+ Indian merchants go digital and viral. Our mission is to bridge the gap between building technology and acquiring customers."
             />
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Empowering Indian <span className="text-blue-600">Business</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Myyapp was founded with a single mission: To provide MSMEs and startups with world-class digital tools. 
                        We believe that building a website is just the first step. The real challenge is growth. 
                        That's why we combined top-tier development with our exclusive Wiral Reward Ecosystem.
                    </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl text-center border border-transparent dark:border-blue-900/20 shadow-sm">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                            <Target className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Our Mission</h3>
                        <p className="text-slate-600 dark:text-slate-400">To help 100,000 Indian merchants go digital and viral by 2026.</p>
                    </div>
                    <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-2xl text-center border border-transparent dark:border-purple-900/20 shadow-sm">
                         <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400">
                            <Heart className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Client First</h3>
                        <p className="text-slate-600 dark:text-slate-400">We don't just deliver code; we deliver business outcomes and sales.</p>
                    </div>
                    <div className="p-8 bg-green-50 dark:bg-green-900/10 rounded-2xl text-center border border-transparent dark:border-green-900/20 shadow-sm">
                         <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Transparency</h3>
                        <p className="text-slate-600 dark:text-slate-400">No hidden costs. Clear pricing. Authentic marketing data.</p>
                    </div>
                    <div className="p-8 bg-orange-50 dark:bg-orange-900/10 rounded-2xl text-center border border-transparent dark:border-orange-900/20 shadow-sm">
                         <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 dark:text-orange-400">
                            <Users className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Community</h3>
                        <p className="text-slate-600 dark:text-slate-400">Building a robust ecosystem where merchants support merchants via Wiral.</p>
                    </div>
                </div>

                {/* Story Section - Redesigned without the image */}
                <div className="relative group max-w-5xl mx-auto">
                    {/* Background Decorative Element */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    
                    <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8 lg:p-20 text-center overflow-hidden">
                        {/* Subtle Floating Sparkle Icon */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
                            <Sparkles className="h-3 w-3" /> Our Journey Since 2021
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight max-w-3xl mx-auto">
                            From a Garage Idea to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Revolution</span>
                        </h2>

                        <div className="space-y-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            <p>
                                We noticed a critical gap in the Indian market. Local agencies were charging lakhs for complex websites that sat idle, while merchants had incredible products but zero digital visibility.
                            </p>
                            
                            <p className="font-medium italic border-y border-slate-100 dark:border-slate-800 py-8 text-slate-900 dark:text-slate-200">
                                Myyapp was born to solve the "Visibility Problem". By integrating premium development with our proprietary Wiral Reward App, we finally gave merchants what they actually wanted: <span className="text-blue-600 dark:text-blue-400 font-bold">Customers, not just clicks.</span>
                            </p>

                            <p>
                                Based in the heart of Bangalore's tech hub, HSR Layout, we are a dedicated team of over 20+ engineers and growth marketers committed to scaling Indian MSMEs into the giants of tomorrow.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-col items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1,2,3,4,5,6].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/150?u=about_${i}`} alt="team member" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Join 500+ Indian Merchants</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Empowering the local economy with global technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};
