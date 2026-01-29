import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-40 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Visual Brand Identity */}
        <div className="flex flex-col items-center lg:items-center justify-center relative">
          {/* Abstract Shape Behind Logo */}
          <div className="absolute inset-0 bg-white/60 rounded-full blur-3xl transform scale-75"></div>
          
          <div className="relative z-10 flex flex-col items-center">
             {/* Stylized Giant Logo Construction */}
             <div className="relative mb-4">
                <span className="text-[#E31C25] font-black text-[8rem] md:text-[10rem] leading-[0.8] tracking-tighter mix-blend-multiply opacity-90">
                  MR
                </span>
                {/* Simulated overlapping effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[20px] bg-black/5 blur-xl rotate-45"></div>
             </div>
             
             <h2 className="text-black font-black text-4xl md:text-6xl tracking-tight uppercase text-center leading-none">
               Marques
             </h2>
             <span className="text-black font-bold text-xl md:text-2xl tracking-[0.3em] uppercase mt-2">
               Uniformes
             </span>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-8">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-8 bg-[#E31C25]"></span>
              <span className="text-gray-600 font-bold text-sm tracking-widest uppercase">
                Introdução a empresa
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Um pouco sobre nós
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              MR Marques Uniformes é uma empresa especializada em design, confecção e 
              fornecimento de uniformes corporativos personalizados. Com um compromisso 
              inabalável com a qualidade e inovação, elevamos a identidade empresarial por meio 
              de peças exclusivas e tecidos de alta classe.
            </p>
          </div>

          {/* Feature List Box - White Card effect for contrast */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#E31C25] min-w-[24px] mt-1" size={24} />
                <span className="text-gray-700 font-semibold text-base md:text-lg">
                  Uniformes Corporativos para o Setor de Hotelaria: Elegância e Conforto
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#E31C25] min-w-[24px] mt-1" size={24} />
                <span className="text-gray-700 font-semibold text-base md:text-lg">
                  Uniformes Personalizados para a Indústria: Durabilidade e Identidade Empresarial
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div>
            <button 
              className="group bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 uppercase tracking-wide"
              onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
            >
              <span>Personalize pelo WhatsApp</span>
              <MessageCircle size={20} className="fill-current" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;