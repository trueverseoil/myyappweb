
import React from 'react';
import { Code, Smartphone, Megaphone, Palette, Check, ArrowRight, MousePointer2, Settings, Zap, Shield, BarChart3, Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

const ServiceSection: React.FC<{
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  imageUrl: string;
  features: string[];
  process: string[];
  benefits: string;
  reverse?: boolean;
}> = ({ id, title, desc, icon, imageUrl, features, process, benefits, reverse }) => {
  const navigate = useNavigate();
  return (
    <div id={id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 py-24 border-b border-slate-100 dark:border-slate-800 last:border-0 transition-all duration-500`}>
      <div className="lg:w-1/2 w-full sticky top-32">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 right-6 z-20">
             <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white shadow-xl">
                {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" })}
             </div>
          </div>
          <div className="absolute bottom-6 left-6 z-20 right-6">
            <div className="p-4 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 text-white text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="font-bold uppercase tracking-wider text-[10px]">Guaranteed Benefit</span>
              </div>
              <p className="text-slate-200 italic">"{benefits}"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
             {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
          </div>
          <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Premium Service</h3>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">{title}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          {desc}
        </p>

        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" /> Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  </div>
                  <span className="font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-purple-500" /> Our Process
            </h4>
            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-6">
              {process.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Step {i + 1}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigate('/contact')}
          className="group mt-12 flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25"
        >
          Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const jumpLinks = [
    { label: 'Web Dev', id: 'web-development', icon: <Code className="w-4 h-4" /> },
    { label: 'Mobile Apps', id: 'mobile-apps', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Marketing', id: 'marketing', icon: <Megaphone className="w-4 h-4" /> },
    { label: 'Creative', id: 'branding', icon: <Palette className="w-4 h-4" /> },
  ];

  return (
    <div className="pt-24 pb-20 dark:bg-slate-900 transition-colors">
      <SEO 
        title="Premium Web & Mobile App Development Services in India | Myyapp"
        description="Expert web development, Android/iOS app creation, and 360° digital marketing services tailored for the Indian market and MSMEs. Build your online presence with Myyapp."
      />
      
      {/* Services Header */}
      <div className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-600/10 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Expert solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Our <span className="text-blue-500">Expertise</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            From world-class development to viral marketing, we provide a complete 
            ecosystem to help your business dominate the digital landscape.
          </p>

          {/* Anchor Nav */}
          <div className="flex flex-wrap justify-center gap-4">
             {jumpLinks.map((link) => (
               <a 
                key={link.id} 
                href={`#${link.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold transition-all hover:-translate-y-1"
               >
                 {link.icon}
                 {link.label}
               </a>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceSection
          id="web-development"
          title="Web Development"
          desc="We build ultra-fast, high-converting websites using modern frameworks. Our focus is on SEO, load speed, and user experience to ensure your site isn't just a digital brochure, but a sales machine designed for results."
          icon={<Code />}
          benefits="Experience up to 70% faster load times and significantly higher conversion rates through our performance-first engineering."
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
          features={[
            "Next.js & React Applications",
            "High-Performance E-commerce",
            "Advanced SEO Optimization",
            "Secure Cloud Hosting",
            "Responsive Modern Design",
            "Custom Admin Dashboards"
          ]}
          process={[
            "Strategy & Research: We analyze your competitors and target audience to define a unique value proposition.",
            "UX/UI Wireframing: Designing intuitive user paths and pixel-perfect interfaces before any code is written.",
            "Agile Development: Building with React/Next.js for modular, scalable, and ultra-fast web experiences.",
            "QA & Optimization: Rigorous testing for bugs, speed bottlenecks, and cross-browser compatibility.",
            "Launch & Support: Deployment on secure cloud infrastructure with 24/7 monitoring and updates."
          ]}
        />
        
        <ServiceSection
          id="mobile-apps"
          title="Mobile App Development"
          desc="Take your business everywhere with custom mobile applications. We specialize in cross-platform development that delivers native performance on both iOS and Android from a single codebase, reducing time-to-market."
          icon={<Smartphone />}
          reverse
          benefits="Directly engage customers through push notifications and personalized experiences that increase retention by 45%."
          imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
          features={[
            "Flutter & React Native",
            "Native Android & iOS Apps",
            "Offline First Capabilities",
            "Push Notification Systems",
            "Secure Payment Integration",
            "Blazing Fast PWA"
          ]}
          process={[
            "Concept Ideation: Defining core functionality and user personas to ensure the app solves a real problem.",
            "Prototyping: Creating interactive mockups to test the user flow and get early feedback.",
            "Cross-Platform Dev: Engineering high-performance apps using Flutter for seamless iOS and Android parity.",
            "Internal Beta Testing: Stress-testing features in real-world scenarios before the public release.",
            "App Store Deployment: Managing the entire submission process for Google Play and Apple App Store."
          ]}
        />

        <ServiceSection
          id="marketing"
          title="360° Digital Marketing"
          desc="Don't just exist online—be seen by the right people. Our marketing strategies are data-driven and ROI-focused. We leverage Google Ads, Meta Ads, and our exclusive Wiral Network to drive quality traffic that converts."
          icon={<Megaphone />}
          benefits="Leverage our proprietary Wiral Reward App data to lower your Cost Per Acquisition (CPA) by up to 30%."
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          features={[
            "Performance Marketing",
            "Local & National SEO",
            "Social Media Strategy",
            "Exclusive Wiral Ad Network",
            "Lead Generation Funnels",
            "Email & WhatsApp Automation"
          ]}
          process={[
            "Deep Audit: Analyzing your current digital footprint and identifying low-hanging growth opportunities.",
            "Funnel Strategy: Building multi-stage campaigns from awareness to conversion and retention.",
            "Creative Production: Crafting high-impact visuals and copy that resonate with the Indian consumer.",
            "Campaign Launch: Multi-channel deployment including Google, Meta, and the Wiral Reward ecosystem.",
            "Daily Optimization: Real-time monitoring and A/B testing to maximize every rupee of your ad spend."
          ]}
        />

        <ServiceSection
          id="branding"
          title="Branding & Creative"
          desc="Visual identity is the soul of your business. We craft premium brand identities that command respect and build trust instantly. Our creatives are designed to capture attention in under 3 seconds in a crowded digital world."
          icon={<Palette />}
          reverse
          benefits="A professional brand identity increases consumer trust and allows for premium pricing power in your niche."
          imageUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
          features={[
            "Logo & Identity Design",
            "UI/UX Visual Design",
            "Motion Graphics & Reels",
            "Brand Style Guides",
            "Packaging Design",
            "Professional Video Ads"
          ]}
          process={[
            "Brand Discovery: Understanding your vision, values, and the story you want to tell the world.",
            "Visual Research: Creating moodboards to explore typography, color psychology, and aesthetic directions.",
            "Identity Design: Developing a core logo and visual system that works across all digital and physical touchpoints.",
            "Asset Creation: Producing business cards, social media templates, and marketing materials.",
            "Brand Implementation: Ensuring consistency across your website, app, and all marketing campaigns."
          ]}
        />
      </div>

      {/* Trust Banner */}
      <div className="mt-20 py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="inline-flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-blue-500 animate-spin-slow" />
              <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Tech Stack</span>
           </div>
           <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">We use industry leading technologies</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold hover:text-blue-500 transition-colors cursor-default">React</span>
              <span className="text-2xl font-bold hover:text-blue-400 transition-colors cursor-default">Flutter</span>
              <span className="text-2xl font-bold hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">Next.js</span>
              <span className="text-2xl font-bold hover:text-green-500 transition-colors cursor-default">Node.js</span>
              <span className="text-2xl font-bold hover:text-blue-700 transition-colors cursor-default">PostgreSQL</span>
              <span className="text-2xl font-bold hover:text-orange-500 transition-colors cursor-default">AWS</span>
           </div>
        </div>
      </div>
    </div>
  );
};
