import React from "react";
import { Rocket, Play, Menu, MapPin, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-base relative min-h-screen w-full  overflow-hidden pt-24 lg:pt-24">
      <div className="h-20 absolute bg-linear-to-b from-transparent -bottom-1 left-0 w-full z-20 via-white to-white  "></div>

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Text Content - Simplified */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            Create Immersive <br className="hidden md:block" />
            <span className="text-grad-primary">360° Virtual Tours</span>
          </h1>

          <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            The Ultimate WordPress Plugin for Interactive Virtual Tours.
            Transform your spaces into engaging experiences that captivate
            visitors.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="group w-full sm:w-auto bg-linear-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
              Free 14 Days Standard Trial
            </button>
            <button className="w-full sm:w-auto grad-primary hover:grad-secondary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
              <Rocket size={20} className="fill-current" />
              Start Free Trial
            </button>

            <button className="w-full sm:w-auto bg-white text-foreground border border-gray-200 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 hover:border-gray-300 shadow-sm">
              <Play size={20} className="text-primary fill-primary" />
              View Demo
            </button>
          </div>
        </div>

        {/* Image Showcase - Clean Hover Effect */}
        <div className="w-full max-w-5xl relative group/monitor">
          {/* Subtle Glow behind monitor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500 rounded-full opacity-10 blur-[100px] -z-10 transition-opacity duration-700"></div>

          {/* Monitor Container - Removed 3D Tilt, Added Clean Lift */}
          <div className="transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.01]">
            {/* Frame */}
            <div className="bg-primary rounded-4xl md:rounded-[3rem] p-3 md:p-4 border-t  border-b border-black/20 backdrop-blur-sm relative z-10 shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              {/* Screen */}
              <div className="relative bg-gray-900 rounded-3xl md:rounded-[2.5rem] overflow-hidden aspect-video shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] ring-1 ring-black/20">
                {/* Internal UI Elements (Unchanged) */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 hidden md:block">
                  <button className="glass-panel hover:bg-blue-400/30 text-white px-5 py-2.5 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 text-sm font-semibold flex items-center gap-3 transition-all">
                    <Menu size={18} />
                    Menu
                  </button>
                </div>

                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 hidden md:block">
                  <button className="glass-panel p-3 rounded-2xl shadow-lg backdrop-blur-xl bg-black/20 border border-white/10 text-white/90 hover:bg-black/30 transition-all">
                    <div className="w-5 h-5 border-[2.5px] border-current rounded-md"></div>
                  </button>
                </div>

                <img
                  src="./image/hero2.png"
                  alt="360 Tour Demo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/monitor:scale-105"
                />

                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 lg:w-80 glass-panel p-4 rounded-3xl shadow-2xl hidden lg:block backdrop-blur-xl bg-black/40 border border-white/10">
                  <div className="flex gap-4 items-start">
                    <div className="h-16 w-16 md:h-20 md:w-20 bg-gray-200 rounded-2xl overflow-hidden shrink-0 shadow-inner border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80"
                        className="w-full h-full object-cover opacity-80"
                        alt="Thumb"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base ">
                        College Garden
                      </h4>
                      <p className="text-sm text-white/70 mt-2 leading-relaxed font-medium">
                        Explore the lush greenery and open spaces of our campus
                        center.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements - Static (No Animation) */}
          <div className="absolute top-[20%] hidden lg:block -left-12 xl:-left-24 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] -rotate-6 z-20 transition-transform hover:-translate-y-2 duration-300">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <Navigation size={36} className="text-primary fill-primary" />
            </div>
          </div>

          <div className="absolute hidden lg:block bottom-[20%] -right-12 xl:-right-24 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rotate-6 z-20 transition-transform hover:-translate-y-2 duration-300">
            <div className="bg-green-50 p-3 rounded-2xl">
              <MapPin size={36} className="text-secondary fill-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
