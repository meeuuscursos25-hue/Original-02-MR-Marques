import React from 'react';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-200 to-white pb-20 pt-8 px-4 overflow-hidden flex flex-col items-center">
      
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-20">

        {/* 1. Mobile Logo (Visible only on mobile - Order 1) */}
        <div className="order-1 lg:hidden mb-6 z-10">
          <Logo />
        </div>

        {/* 2. Text Content (Order 3 on Mobile, Order 1 on Desktop) */}
        <div className="order-3 lg:order-1 text-center lg:text-left max-w-2xl lg:max-w-[50%] z-10 flex flex-col gap-6 items-center lg:items-start">
           
           {/* Desktop Logo (Visible only on Desktop inside text column) */}
           <div className="hidden lg:block mb-4">
              <Logo />
           </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#E31C25] leading-[1.15] lg:leading-[1.1]">
            Uniformes industriais e corporativos do básico ao premium:{' '}
            <span className="text-black">
              vista sua equipe com conforto e profissionalismo.
            </span>
          </h1>

          <p className="text-[#E31C25] text-base md:text-xl font-medium max-w-lg lg:max-w-full lg:mx-0 mx-auto leading-relaxed">
            Entendemos o seu negócio. Personalizamos do seu jeito. Enviamos no seu prazo.
          </p>

          {/* CTA Button & Minimum Order */}
          <div className="mt-4 w-full flex flex-col items-center lg:items-start gap-4">
            <button 
              className="group relative w-full max-w-md lg:w-auto lg:px-12 bg-[#E31C25] hover:bg-[#c4151d] transition-all duration-300 text-white font-black text-sm md:text-lg py-4 px-6 rounded-2xl shadow-[0_4px_14px_0_rgba(227,28,37,0.39)] flex items-center justify-center gap-3 uppercase tracking-wide transform hover:-translate-y-1"
              onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
            >
              <span>Personalize pelo WhatsApp</span>
              <MessageCircle size={24} className="fill-current" />
            </button>
            
            <p className="text-gray-900 font-bold text-sm md:text-lg tracking-wide uppercase">
              Pedido mínimo de 10 unidades
            </p>
          </div>
        </div>

        {/* 3. Image Composition (Order 2 on Mobile, Order 2 on Desktop) */}
        <div className="order-2 lg:order-2 relative w-full max-w-[340px] md:max-w-[450px] lg:max-w-[650px] aspect-square flex items-center justify-center mb-8 lg:mb-0 z-10">
          
          {/* Background "Swoosh" Shapes */}
          {/* Red Swoosh - Matches the red shirt */}
          <div className="absolute top-10 left-[-20px] lg:left-0 w-[120%] h-[60%] bg-[#E31C25] transform -rotate-12 rounded-[50px] opacity-90 z-0 shadow-lg"></div>
          {/* Black Swoosh - Matches the black shirt details */}
          <div className="absolute bottom-10 right-[-30px] lg:right-[-20px] w-[100%] h-[50%] bg-black transform rotate-6 rounded-[50px] z-0 shadow-lg"></div>
          
          {/* Main Product Image */}
          <img 
            src="https://i.postimg.cc/htnYtsqY/8e7a484f-4b93-4b55-937e-c85bf48165cd.png" 
            alt="Uniformes MR Marques" 
            className="relative z-10 w-full h-auto drop-shadow-2xl object-contain transform scale-105"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;