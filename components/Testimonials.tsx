import React from 'react';
import { Quote, MessageCircle } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text }) => {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 relative group transition-transform duration-300 hover:-translate-y-2">
      {/* Decorative Quote Mark */}
      <div className="absolute top-8 right-8">
        <Quote size={48} className="text-[#E31C25] fill-[#E31C25] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">
          "{text}"
        </p>

        {/* User Profile */}
        <div>
          <h4 className="text-gray-900 font-bold text-lg leading-none mb-1">
            {name}
          </h4>
          <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Camila Lima",
      role: "Coordenadora",
      text: "Passando para compartilhar o quanto estou feliz com os uniformes personalizados que encomendei na MR Marques Uniformes. Eles não só captaram perfeitamente a identidade da nossa equipe, mas também nos deixaram super estilosos. Recomendo demais!"
    },
    {
      name: "Isabela Santos",
      role: "Diretora de RH",
      text: "Queria só dizer que a MR Marques Uniformes é a melhor escolha para uniformes personalizados. A atenção aos detalhes e o cuidado com o design fazem toda a diferença. Estamos muito satisfeitos com o resultado final. Recomendo de olhos fechados!"
    },
    {
      name: "Lucas Oliveira",
      role: "Gerente de Vendas",
      text: "Pensa num uniforme que é a nossa cara! A MR Marques Uniformes simplesmente arrasou na personalização. A qualidade é incrível, e a equipe adorou. Agora, todo mundo trabalha com mais estilo e conforto. Valeu demais, pessoal!"
    },
    {
      name: "Rafael Lima",
      role: "CEO",
      text: "Trabalhar com a MR Marques Uniformes foi uma experiência incrível! Eles entenderam perfeitamente a vibe da nossa empresa e criaram uniformes que refletem nossa identidade. Além disso, a entrega foi super rápida. Super recomendo!"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="h-[2px] w-8 bg-[#E31C25]"></span>
             <span className="text-[#E31C25] font-bold text-sm tracking-[0.2em] uppercase">
              Depoimentos
            </span>
            <span className="h-[2px] w-8 bg-[#E31C25]"></span>
          </div>
         
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            NOSSOS DEPOIMENTOS
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-medium">
            Os depoimentos de nossos clientes e parceiros são o coração da MR Marques Uniformes. 
            Eles validam nosso compromisso com a qualidade e personalização, impulsionando nossa busca incessante por excelência.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={index}
              name={t.name}
              role={t.role}
              text={t.text}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button 
            className="group relative bg-[#E31C25] hover:bg-[#c4151d] text-white font-black py-4 px-10 rounded-2xl shadow-[0_0_20px_rgba(227,28,37,0.4)] hover:shadow-[0_0_40px_rgba(227,28,37,0.6)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 uppercase tracking-wide text-sm md:text-base"
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

export default Testimonials;