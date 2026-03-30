
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Zap, 
  Award, 
  Star, 
  Quote, 
  Play, 
  Wallet, 
  ShoppingCart, 
  CreditCard, 
  Headphones, 
  BarChart,
  MousePointer2,
  Bell,
  Search,
  Plus, 
  Briefcase,
  Globe,
  Video,
  User,
  Store,
  Megaphone,
  Rocket
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VisitorCounter } from '../components/VisitorCounter';
import { useAppContext } from '../context/AppContext';
import { SEO } from '../components/SEO';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&w=1600&q=80",
    title: "Next-Gen AI Intelligence",
  },
  {
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=80",
    title: "Futuristic Digital Infrastructure",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    title: "Global Neural Connectivity",
  }
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner",
      company: "Spice Villa Restaurant",
      content: "Myyapp didn't just build my website, they brought customers through Wiral. We saw a 40% increase in dine-in customers within the first month.",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Priya Kumar",
      role: "Founder",
      company: "StyleStreet Boutique",
      content: "I was struggling with online sales. Their e-commerce solution is so easy to use, and the local promotion feature helped me target customers in my area.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Amit Patel",
      role: "CEO",
      company: "TechFlow Startups",
      content: "Best development team in Bangalore. They understood our MVP requirements perfectly and delivered on time. The Wiral integration is a bonus!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const whyChooseUsData = [
    {
      title: 'Affordable Pricing',
      desc: 'Premium digital solutions shouldn\'t break the bank. We offer flexible payment plans tailored for Indian MSMEs and growing startups.',
      icon: <CreditCard className="h-7 w-7" />,
      color: 'blue'
    },
    {
      title: 'Fast Delivery',
      desc: 'In the digital world, speed is everything. We deliver high-quality websites in 7-10 days and apps in weeks, not months.',
      icon: <Zap className="h-7 w-7" />,
      color: 'purple'
    },
    {
      title: 'Local Support',
      desc: 'Based in Bangalore with a pan-India vision. We understand local market nuances and provide support in multiple Indian languages.',
      icon: <Headphones className="h-7 w-7" />,
      color: 'pink'
    },
    {
      title: 'Results Driven',
      desc: 'We don\'t just build code; we build growth. Our focus is on ROI, lead generation, and converting visitors into loyal customers.',
      icon: <BarChart className="h-7 w-7" />,
      color: 'green'
    }
  ];

  const statsData = [
    { label: 'stat_clients', value: '500+', icon: <Users className="h-6 w-6" />, color: 'from-blue-600 to-blue-400' },
    { label: 'stat_projects', value: '250+', icon: <Briefcase className="h-6 w-6" />, color: 'from-purple-600 to-purple-400' },
    { label: 'stat_users', value: '50k+', icon: <Globe className="h-6 w-6" />, color: 'from-pink-600 to-pink-400' },
    { label: 'stat_growth', value: '240%', icon: <TrendingUp className="h-6 w-6" />, color: 'from-green-600 to-green-400' },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Myyapp - Build. Grow. Go Viral. | #1 Growth Partner for Indian MSMEs"
        description="Empowering Indian businesses with premium websites, mobile apps, and 360° digital marketing integrated with the exclusive Wiral Reward ecosystem."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-12 pb-20 overflow-hidden bg-slate-900 transition-colors duration-300">
        
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-60' : 'opacity-0'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover transform transition-transform duration-[10s] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
            </div>
          ))}
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            {t('hero_badge')}
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 transition-colors opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero_title')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {t('hero_title_highlight')}
            </span>
          </h1>
          
          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed transition-colors opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            {t('hero_desc')}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => navigate('/wiral')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-md border border-white/10 flex items-center justify-center gap-2"
            >
              <Zap className="h-5 w-5 text-yellow-400" /> Promote Your Business
            </button>
          </div>
          
          <div 
            className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <VisitorCounter 
              className="bg-white/10 backdrop-blur-md border-white/20 text-white" 
              showIcon={true} 
            />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-10 bg-blue-500' : 'w-2 bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Modern Stats Bar Section */}
      <section className="relative -mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-8 lg:p-12 transition-all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center lg:items-start text-center lg:text-left pt-6 sm:pt-0 lg:px-8 first:pt-0 lg:first:pl-0 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
              >
                <div className={`mb-4 p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                   {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className={`text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
                    {t(stat.label)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchant Dashboard Showcase - Attractive Platform Preview */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                Live Platform Preview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Control Your Business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth Dashboard</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Experience the power of a single dashboard to manage your sales, customer data, and marketing campaigns. No more juggling between multiple apps.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all cursor-default group">
                   <div className="p-3 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform">
                      <BarChart className="h-6 w-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-white">Real-time Analytics</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400">Track visitors, orders, and revenue as it happens.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all cursor-default group">
                   <div className="p-3 rounded-xl bg-purple-600 text-white group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-white">Wiral Integration</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400">Manage your Wiral rewards and promotional campaigns directly.</p>
                   </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
              >
                Book a Live Demo <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="lg:w-1/2 relative group">
               {/* 3D Dashboard Mockup */}
               <div className="relative w-full aspect-[16/10] bg-white dark:bg-slate-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden transform group-hover:rotate-1 group-hover:-translate-y-2 transition-all duration-500">
                  {/* Top Bar */}
                  <div className="h-12 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:flex">
                         <Layout className="h-3 w-3" /> Merchant Center
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <Search className="h-4 w-4 text-slate-400" />
                       <Bell className="h-4 w-4 text-slate-400" />
                       <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                    </div>
                  </div>

                  {/* Sidebar + Content */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-16 sm:w-20 border-r border-slate-100 dark:border-slate-700 p-4 flex flex-col items-center gap-6">
                       <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center"><Layout className="h-4 w-4" /></div>
                       <div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700"><BarChart className="h-4 w-4" /></div>
                       <div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700"><Users className="h-4 w-4" /></div>
                       <div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700"><Zap className="h-4 w-4" /></div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 bg-slate-50/30 dark:bg-slate-900/10">
                       <div className="flex justify-between items-end mb-8">
                          <div>
                            <h5 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h5>
                            <p className="text-[10px] text-slate-400">Last updated: Just now</p>
                          </div>
                          <div className="flex gap-2">
                             <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-lg shadow-blue-600/20 cursor-pointer">
                                <Plus className="h-3 w-3" /> New Campaign
                             </div>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                             <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Sales</p>
                             <div className="text-lg font-bold text-slate-900 dark:text-white">₹4,25,000</div>
                             <div className="text-[10px] text-green-500 font-bold">↑ 12.5%</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                             <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">New Users</p>
                             <div className="text-lg font-bold text-slate-900 dark:text-white">1,248</div>
                             <div className="text-[10px] text-blue-500 font-bold">↑ 8.2%</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                             <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Wiral Reach</p>
                             <div className="text-lg font-bold text-slate-900 dark:text-white">45.2k</div>
                             <div className="text-[10px] text-purple-500 font-bold">↑ 24.1%</div>
                          </div>
                       </div>

                       {/* Mock Chart Area */}
                       <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 h-32 relative flex items-end justify-between gap-2">
                          {[40, 70, 45, 90, 65, 80, 55, 100, 75, 60, 85, 95].map((h, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-sm opacity-80" 
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                          <div className="absolute top-2 left-4 text-[10px] font-bold text-slate-400">GROWTH ANALYTICS</div>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Floating elements for extra "attractiveness" */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
               
               {/* Tiny Floating Badges */}
               <div className="absolute top-1/4 -right-4 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce transition-transform hidden sm:block">
                  <TrendingUp className="h-5 w-5 text-green-500" />
               </div>
               <div className="absolute bottom-1/4 -left-4 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce animation-delay-2000 hidden sm:block">
                  <Users className="h-5 w-5 text-blue-500" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-slate-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Why Indian Businesses Choose <span className="text-blue-600">Myyapp</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We understand the unique challenges of the Indian market. Our platform is built to provide maximum value with minimum friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 
                  ${item.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                  ${item.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                  ${item.color === 'pink' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' : ''}
                  ${item.color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : ''}
                `}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Complete Digital Growth Engine</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to transform your business from offline to online, and from hidden to viral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Stunning, high-performance websites and e-commerce stores tailored for Indian markets.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> E-commerce Ready</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> SEO Optimized</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                POPULAR
              </div>
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mobile Apps</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Native Android & iOS apps or blazing fast PWAs. Put your shop in your customer's pocket.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Flutter Technology</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Easy Admin Panel</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">360° Marketing</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                From Google Ads to Social Media reels, we handle it all. Plus, exclusive Wiral integration.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Google & Meta Ads</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Influencer Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wiral Integration Highlight - REDESIGNED */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-6">
                EXCLUSIVE FEATURE
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Promote your business on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Wiral short video app</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Most agencies build your app and leave you to find customers. Not us. 
                Myyapp integrates your business directly into the Wiral ecosystem, giving you instant visibility through engaging short-form video content and a rewarding user journey.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Video className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Viral Video Marketing Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Target 50,000+ Active Creators</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-lg">Hyper-Local Branding Tools</span>
                </li>
              </ul>
              <button 
                onClick={() => navigate('/wiral')}
                className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors"
              >
                Explore Wiral Platform
              </button>
            </div>
            
            {/* Phone Mockup Section - NEW DESIGN BASED ON IMAGE */}
            <div className="lg:w-1/2 relative flex justify-center scale-90 sm:scale-100">
               <div className="relative w-[320px] h-[640px] bg-white rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border-[10px] border-slate-100 flex flex-col overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="h-10 bg-white flex justify-between items-center px-10 shrink-0">
                       <div className="text-xs text-slate-900 font-bold">9:41</div>
                       <div className="flex gap-1.5 items-center">
                           <div className="w-4 h-2 bg-slate-200 rounded-sm"></div>
                           <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                       </div>
                  </div>
                  
                  {/* App UI - Light Mode matching the image */}
                  <div className="flex-1 bg-gradient-to-b from-slate-50 to-white relative px-6 py-12 flex flex-col items-center">
                      
                      {/* Logo Section */}
                      <div className="relative mb-8 text-center flex flex-col items-center">
                          {/* Rocket Logo Icon */}
                          <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#3b82f6] to-[#d946ef] flex items-center justify-center shadow-xl shadow-blue-500/20 mb-4 transition-transform hover:rotate-3">
                              <Rocket className="h-14 w-14 text-white" />
                          </div>
                          
                          {/* WIRAL Text Title */}
                          <h3 className="text-6xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#d946ef]">
                             WIRAL
                          </h3>
                          <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                             GO VIRAL • GROW FASTER
                          </p>
                      </div>

                      {/* 2x2 Grid Cards */}
                      <div className="grid grid-cols-2 gap-4 w-full mb-10">
                          {/* Card 1: Videos */}
                          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center group cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                              <div className="w-10 h-10 rounded-2xl bg-slate-50 text-cyan-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <Smartphone className="h-5 w-5" />
                              </div>
                              <span className="text-slate-900 text-sm font-black mb-0.5">Videos</span>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">WATCH TRENDS</span>
                          </div>

                          {/* Card 2: Creator */}
                          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center group cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                              <div className="w-10 h-10 rounded-2xl bg-slate-50 text-purple-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <User className="h-5 w-5" />
                              </div>
                              <span className="text-slate-900 text-sm font-black mb-0.5">Creator</span>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">SHOW TALENT</span>
                          </div>

                          {/* Card 3: Shops */}
                          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center group cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                              <div className="w-10 h-10 rounded-2xl bg-slate-50 text-orange-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <Store className="h-5 w-5" />
                              </div>
                              <span className="text-slate-900 text-sm font-black mb-0.5">Shops</span>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">SHOP LOCAL</span>
                          </div>

                          {/* Card 4: Branding */}
                          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center group cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                              <div className="w-10 h-10 rounded-2xl bg-slate-50 text-pink-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <Megaphone className="h-5 w-5" />
                              </div>
                              <span className="text-slate-900 text-sm font-black mb-0.5">Branding</span>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">GET POPULAR</span>
                          </div>
                      </div>

                      {/* Get Started Button */}
                      <button className="w-full h-16 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#9d50bb] flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
                          <span className="text-white font-black text-lg tracking-wider">GET STARTED</span>
                          <ArrowRight className="h-6 w-6 text-white" />
                      </button>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="h-8 bg-white flex items-center justify-center">
                       <div className="h-1 w-1/4 bg-slate-200 rounded-full"></div>
                  </div>
               </div>

               {/* Extra Decorative floating elements */}
               <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Indian Businesses</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it. Here is what our partners have to say.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative group transition-all hover:shadow-2xl">
                <Quote className="h-10 w-10 text-blue-100 dark:text-blue-900/40 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-md transition-transform group-hover:scale-110" 
                  />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10">Join 500+ merchants growing with Myyapp today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button 
               onClick={() => navigate('/contact')}
               className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
             >
               Start Your Project
             </button>
             <button 
               onClick={() => navigate('/pricing')}
               className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-colors border border-blue-500"
             >
               View Plans
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
