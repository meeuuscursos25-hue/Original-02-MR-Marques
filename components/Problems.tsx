import React from 'react';
import { XCircle, MessageCircle, ArrowDown } from 'lucide-react';

const ProblemCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="group relative bg-[#1F1F1F] rounded-2xl p-8 border border-white/5 hover:border-[#E31C25]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(227,28,37,0.1)] h-full flex flex-col">
      
      {/* Icon Area */}
      <div className="mb-6 flex items-center justify-between">
        <div className="p-3 bg-[#E31C25]/10 rounded-full group-hover:bg-[#E31C25]/20 transition-colors">
          <XCircle size={32} className="text-[#E31C25]" />
        </div>
        {/* Decorative line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E31C25]/50 to-transparent ml-4 opacity-30"></div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#E31C25] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

const Problems: React.FC = () => {
  const problems = [
    {
      title: "Uniformes que Parecem Trapos em 2 Meses",
      description: "Tecido fino que desbota, encolhe e rasga. Sua equipe parece desleixada e sua marca vai junto."
    },
    {
      title: "Fornecedor Promete e Não Cumpre",
      description: "\"Entrego em 10 dias\" vira 2 meses. Você fica sem uniforme, funcionário improvisando e cliente julgando."
    },
    {
      title: "Atendimento que Desaparece Quando Você Precisa",
      description: "WhatsApp ignorado, e-mail sem resposta. Quando dá problema, você está sozinho no vácuo."
    },
    {
      title: "Preço Baixo que Sai Caro no Final",
      description: "Comprou barato, trocou 3 vezes no ano. Custo real? O triplo. Tempo perdido? Incalculável."
    }
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#0a0a0a] border-t border-white/5">
       {/* Background subtle gradient spot */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E31C25] font-bold text-sm tracking-[0.2em] uppercase block mb-3 opacity-80">
            RECONHECE ESSES PROBLEMAS?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Por Que a Maioria das Empresas Sofre com seus Uniformes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((prob, index) => (
            <ProblemCard 
              key={index}
              title={prob.title}
              description={prob.description}
            />
          ))}
        </div>

        {/* Transition / Conclusion */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#E31C25] to-transparent"></div>
          
          <p className="text-2xl md:text-3xl font-bold text-white max-w-2xl leading-tight">
            Existe um jeito melhor. <br />
            <span className="text-gray-400 font-medium text-xl md:text-2xl">E não custa o olho da cara.</span>
          </p>
          
          {/* Animated Arrow */}
          <ArrowDown className="text-[#E31C25] animate-bounce mt-4 mb-2" size={32} />
          
          {/* Premium CTA Button */}
          <button 
            className="group relative bg-[#E31C25] hover:bg-[#c4151d] text-white font-black py-4 px-10 rounded-full shadow-[0_0_20px_rgba(227,28,37,0.4)] hover:shadow-[0_0_40px_rgba(227,28,37,0.6)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 uppercase tracking-wide text-sm md:text-base"
            onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
          >
            <span>Personalize pelo WhatsApp</span>
            <MessageCircle size={20} className="fill-current" />
            
            {/* Inner Ring for Premium Finish */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all pointer-events-none"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Problems;