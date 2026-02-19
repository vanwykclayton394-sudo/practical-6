import React from 'react';

const HeroScreen = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6 inline-block">
          v2.0 is now live
        </span>

        {/* The Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Elevate Your Workflow with <span className="text-blue-600">Seamless Precision.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Build faster, scale smarter, and deliver exceptional user experiences 
          with our modular React architecture.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all">
            View Documentation
          </button>
        </div>
      </div>

      {/* Visual Placeholder */}
      <div className="mt-16 w-full max-w-5xl aspect-video bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center text-white/20 font-bold text-4xl border border-white/10">
        [ Dashboard Preview ]
      </div>
    </div>
  );
};

export default HeroScreen;