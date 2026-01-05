
import React from 'react';
import { Store, Utensils, Rocket, Briefcase, ShoppingBag, Globe, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

const SolutionCard: React.FC<{
    title: string;
    desc: string;
    features: string[];
    icon: React.ReactNode;
    colorClass: string;
}> = ({ title, desc, features, icon, colorClass }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col h-full">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 mb-6 flex-grow">{desc}</p>
            <div className="space-y-3 mb-8">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => navigate('/contact')}
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
                Get Solution <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
};

export const Solutions: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50">
            <SEO 
              title="Digital Solutions for Local Shops, Restaurants & Startups | Myyapp"
              description="Tailored digital growth strategies for Indian local businesses, D2C brands, and tech startups. Take your offline shop online and grow with Myyapp's ecosystem."
            />
            
            <div className="bg-slate-900 text-white py-20 mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Every Industry</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Tailored digital strategies designed for specific Indian market needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SolutionCard
                        title="Local Shops"
                        desc="Take your offline dukaan online. Get orders on WhatsApp and manage inventory easily."
                        features={[
                            "Digital Catalog / Menu",
                            "WhatsApp Order Integration",
                            "Local SEO (Google Maps)",
                            "QR Code for Store"
                        ]}
                        icon={<Store className="h-7 w-7 text-blue-600" />}
                        colorClass="bg-blue-100"
                    />
                    <SolutionCard
                        title="Restaurants"
                        desc="A complete food delivery and table booking system for your restaurant or cafe."
                        features={[
                            "Online Food Ordering App",
                            "Table Reservation System",
                            "Digital Menu with Photos",
                            "Zomato/Swiggy Integration"
                        ]}
                        icon={<Utensils className="h-7 w-7 text-orange-600" />}
                        colorClass="bg-orange-100"
                    />
                    <SolutionCard
                        title="Startups"
                        desc="Launch your MVP fast. We handle the tech while you focus on investor pitches."
                        features={[
                            "MVP Development (Web+App)",
                            "Pitch Deck Design",
                            "User Acquisition Strategy",
                            "Scalable Cloud Architecture"
                        ]}
                        icon={<Rocket className="h-7 w-7 text-purple-600" />}
                        colorClass="bg-purple-100"
                    />
                    <SolutionCard
                        title="Service Providers"
                        desc="For salons, clinics, consultants, and repair services. Automate your bookings."
                        features={[
                            "Appointment Booking System",
                            "Staff Management",
                            "SMS/WhatsApp Reminders",
                            "Payment Gateway"
                        ]}
                        icon={<Briefcase className="h-7 w-7 text-teal-600" />}
                        colorClass="bg-teal-100"
                    />
                    <SolutionCard
                        title="E-commerce Brands"
                        desc="Direct-to-Consumer (D2C) stores that look premium and convert visitors."
                        features={[
                            "Shopify / WooCommerce Setup",
                            "Inventory Management",
                            "Shipping Integration",
                            "Instagram Shop Setup"
                        ]}
                        icon={<ShoppingBag className="h-7 w-7 text-pink-600" />}
                        colorClass="bg-pink-100"
                    />
                    <SolutionCard
                        title="Enterprises"
                        desc="Custom software solutions for large scale operations and process automation."
                        features={[
                            "ERP & CRM Systems",
                            "Custom Dashboard",
                            "Employee App",
                            "Data Analytics"
                        ]}
                        icon={<Globe className="h-7 w-7 text-indigo-600" />}
                        colorClass="bg-indigo-100"
                    />
                </div>
            </div>
        </div>
    );
};
