
import React from 'react';
import { Check, Info, Smartphone, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  isApp?: boolean;
}> = ({ title, price, features, recommended, isApp }) => {
  const navigate = useNavigate();
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl ${recommended ? 'bg-slate-900 text-white shadow-2xl scale-105 border-2 border-blue-500 z-10' : 'bg-white text-slate-900 border border-slate-200 shadow-lg'} transition-all hover:shadow-2xl duration-300`}>
      {recommended && (
        <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          {isApp && <Smartphone className={`h-4 w-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`} />}
          <h3 className={`text-xl font-bold ${recommended ? 'text-blue-400' : 'text-slate-900'}`}>{title}</h3>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-sm opacity-70">/project</span>}
        </div>
      </div>
      <ul className="flex-1 space-y-4 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${recommended ? 'text-green-400' : 'text-blue-600'}`} />
            <span className={`text-sm leading-tight ${recommended ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => navigate('/contact')}
        className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${recommended ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <SEO 
        title="Affordable Web & Mobile App Pricing Plans | Myyapp"
        description="Transparent pricing for website development, mobile apps, and digital marketing packages designed for Indian small businesses and startups. Start growing today."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Investment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Clear, transparent, and ROI-focused pricing designed specifically for the Indian MSME ecosystem.
          </p>
        </div>

        {/* Website Packages */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-l-4 border-blue-600 pl-4">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Website Packages</h2>
            <Info className="h-5 w-5 text-slate-400 cursor-help" title="One-time development cost" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Business Starter"
              price="₹14,999"
              features={[
                "5 Page Responsive Website",
                "Contact Form Integration",
                "Social Media Links",
                "1 Year Free Hosting",
                "Basic SEO Setup",
                "Mobile Responsive Design"
              ]}
            />
            <PricingCard
              title="Professional Growth"
              price="₹29,999"
              recommended
              features={[
                "10-15 Pages Website",
                "CMS (Manage Content Easily)",
                "WhatsApp Chat Integration",
                "Advanced SEO Optimization",
                "Speed Optimization",
                "1 Month Wiral Promotion FREE",
                "Google Analytics Setup"
              ]}
            />
            <PricingCard
              title="E-Commerce Pro"
              price="₹49,999"
              features={[
                "Complete Online Store",
                "Payment Gateway Integration",
                "Product Management System",
                "Order Tracking & SMS",
                "Customer Login Portal",
                "Priority Technical Support",
                "Inventory Management"
              ]}
            />
          </div>
        </div>

        {/* Mobile App Packages */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 border-l-4 border-purple-600 pl-4">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Mobile App Packages</h2>
            <Zap className="h-5 w-5 text-yellow-500 fill-current" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-3xl">
            Put your business in the pockets of millions. Our mobile apps are built for speed, offline reliability, and maximum conversion using industry-standard Flutter technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              isApp
              title="Business Starter App"
              price="₹99,000"
              features={[
                "Flutter Hybrid Android App",
                "Basic Product/Service Listing",
                "WhatsApp Order Button",
                "User Profile & History",
                "Basic Push Notifications",
                "Play Store Launch Support",
                "Secure Backend Database"
              ]}
            />
            <PricingCard
              isApp
              title="Professional App"
              price="₹4,99,999"
              recommended
              features={[
                "Android & iOS Apps (Hybrid)",
                "Advanced SuperAdmin Panel",
                "Integrated Payment Gateway",
                "Real-time Order Tracking",
                "Google & FB Social Login",
                "App Analytics Dashboard",
                "Custom UI/UX Experience",
                "3 Months Maintenance"
              ]}
            />
            <PricingCard
              isApp
              title="E-Commerce Pro App"
              price="₹9,99,999"
              features={[
                "Scalable Android & iOS Apps",
                "Advanced Multi-role Admin",
                "Military-grade Security",
                "Inventory & Vendor Management",
                "Advanced Loyalty Points System",
                "Cloud Auto-Scaling Architecture",
                "24/7 Dedicated Support",
                "API Integration (ERP/CRM)"
              ]}
            />
          </div>

          {/* Special App CTA Section */}
          <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Smartphone className="w-64 h-64 rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-4 h-4" /> Customized App Solutions
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Need a specialized app for your unique business?</h3>
                <p className="text-blue-100 text-lg">
                  From custom Fintech platforms to complex logistics apps, our expert engineering team in Bangalore is ready to build your vision. Let's discuss your custom requirements.
                </p>
              </div>
              <div className="shrink-0">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl"
                >
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Packages */}
        <div className="mb-10 mt-24">
          <div className="flex items-center gap-3 mb-10 border-l-4 border-pink-600 pl-4">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Digital Marketing</h2>
            <Info className="h-5 w-5 text-slate-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Social Starter"
              price="₹10,000"
              features={[
                "8 Social Media Creatives",
                "Facebook & Insta Page Mgmt",
                "Monthly Performance Report",
                "Keyword & Hashtag Strategy",
                "Ad Account Setup"
              ]}
            />
            <PricingCard
              title="Performance Booster"
              price="₹25,000"
              recommended
              features={[
                "15 Social Media Posts",
                "4 Reels/Video Creatives",
                "Google Ads Setup & Mgmt",
                "Facebook/Meta Ads Mgmt",
                "₹2,000 Wiral Ad Credits",
                "Lead Tracking Dashboard"
              ]}
            />
            <PricingCard
              title="Viral Domination"
              price="Custom"
              features={[
                "Complete 360° Management",
                "Influencer Collaborations",
                "Advanced Video Production",
                "Dedicated Growth Manager",
                "Aggressive Wiral Promotion",
                "Brand Strategy Consulting"
              ]}
            />
          </div>
        </div>

        {/* Comparison Disclaimer */}
        <div className="mt-16 p-6 bg-blue-50 dark:bg-slate-900 rounded-2xl border border-blue-100 dark:border-slate-800 text-center">
           <p className="text-sm text-slate-600 dark:text-slate-400">
             * All prices are exclusive of GST. Domain & Server costs are included for the first year in Website packages. 
             Mobile App Store publishing fees (Apple Developer & Google Console) are to be paid directly to the platforms.
           </p>
        </div>
      </div>
    </div>
  );
};
