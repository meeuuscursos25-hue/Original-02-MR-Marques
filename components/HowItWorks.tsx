import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const StepCard: React.FC<{ number: string; title: string; description: string; isLast?: boolean }> = ({ number, title, description, isLast }) => {
  return (
    <div className="relative flex flex-col items-center text-center z-10 group">
      
      {/* Connector Line (Desktop Only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 -z-10 transform translate-x-1/2"></div>
      )}

      {/* Number Box */}
      <div className="w-20 h-20 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100 group-hover:border-[#E31C25]/30 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
        {/* Decorative gradient inside number box */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="absolute bottom-0 w-full h-1 bg-[#E31C25]"></div>
        
        <span className="text-4xl font-black text-[#E31C25] relative z-10 font-sans">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="max-w-[280px]">
        <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#E31C25] transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Fale com a gente no WhatsApp",
      description: "Conte o que sua empresa precisa e tire dúvidas com um consultor especialista."
    },
    {
      number: "2",
      title: "Escolha o modelo e personalize",
      description: "Escolha seu uniforme, e nós adaptamos para seu time e sua marca."
    },
    {
      number: "3",
      title: "Aprove o orçamento",
      description: "Sem complicação: tudo claro, direto e no seu tempo."
    },
    {
      number: "4",
      title: "Receba no prazo combinado",
      description: "Entrega a partir de 15 dias úteis, com qualidade e garantia MR Marques"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#E31C25]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#E31C25] font-bold text-sm tracking-[0.2em] uppercase block mb-3">
            PASSO A PASSO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Como funciona?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <button 
            className="group relative bg-[#E31C25] hover:bg-[#c4151d] text-white font-black py-4 px-10 rounded-2xl shadow-[0_10px_25px_rgba(227,28,37,0.25)] hover:shadow-[0_15px_35px_rgba(227,28,37,0.35)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 uppercase tracking-wide text-sm md:text-base"
            onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
          >
            <span>Personalize pelo WhatsApp</span>
            <MessageCircle size={22} className="fill-current" />
            
            {/* Glossy Effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;