import React from 'react';
import { Timer, MessageSquare, ShieldCheck, Tag, MessageCircle } from 'lucide-react';

interface DifferentialCardProps {
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const DifferentialCard: React.FC<DifferentialCardProps> = ({ title, description, badge, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-[#E31C25] transition-all duration-300 group flex flex-col h-full">
      {/* Header with Icon and Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-red-50 rounded-xl group-hover:bg-[#E31C25] transition-colors duration-300">
          <Icon size={24} className="text-[#E31C25] group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
          {badge}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

const Differentials: React.FC = () => {
  const features = [
    {
      title: "Produção Rápida Sem Perder Qualidade",
      description: "15 dias de produção é o nosso padrão, não promessa furada. Planejamos bem para não te deixar na mão.",
      badge: "Entrega Garantida",
      icon: Timer
    },
    {
      title: "Atendimento Direto - Zero Call Center",
      description: "Você fala com quem realmente produz. WhatsApp direto, respostas em horas, não em dias. Empresa familiar que se importa.",
      badge: "Resposta Rápida",
      icon: MessageSquare
    },
    {
      title: "Tecidos Que Resistem a Centenas de Lavagens",
      description: "Não usamos tecido fino de fornecedor barato. Nossos uniformes duram 2, 3 anos - e você sente a diferença no tato.",
      badge: "Qualidade Premium",
      icon: ShieldCheck
    },
    {
      title: "Preço Justo - Nem Barato, Nem Absurdo",
      description: "Não somos os mais baratos (qualidade custa). Mas cobramos o justo: você paga pelo que dura, não pelo que descarta.",
      badge: "Custo-Benefício Real",
      icon: Tag
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gray-500 font-bold text-sm tracking-[0.2em] uppercase block mb-3">
            O QUE NOS TORNA DIFERENTES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#E31C25] leading-tight">
            Por Que Mais de 500 Empresas Escolheram a MR Marques
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <DifferentialCard 
              key={index}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button 
            className="group relative bg-[#E31C25] hover:bg-[#c4151d] text-white font-black py-4 px-8 rounded-2xl shadow-[0_4px_14px_0_rgba(227,28,37,0.39)] flex items-center justify-center gap-3 uppercase tracking-wide transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
          >
            <span>Personalize pelo WhatsApp</span>
            <MessageCircle size={24} className="fill-current" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Differentials;