import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image?: string;
  isDark?: boolean;
  isList?: boolean;
  listItems?: string[];
  buttonText?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  image, 
  isDark = false, 
  isList = false, 
  listItems = [],
  buttonText,
  className = "" 
}) => {
  if (isDark) {
    return (
      <div className={`relative h-[320px] rounded-[2rem] p-8 flex flex-col justify-center items-start bg-[#222222] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
        <h3 className="text-2xl font-black mb-6 leading-tight">{title}</h3>
        <button 
          className="bg-[#E31C25] hover:bg-[#c4151d] text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
          onClick={() => window.open('https://wa.link/opz1j7', '_blank')}
        >
          {buttonText || 'Saiba mais'}
          <MessageCircle size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className={`relative h-[320px] rounded-[2rem] p-6 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(227,28,37,0.15)] transition-all duration-300 overflow-hidden group flex flex-col ${className}`}>
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-black text-gray-900 z-10 relative leading-tight max-w-[80%]">
        {title}
      </h3>

      {/* Content: List or Image */}
      {isList ? (
        <div className="mt-6 flex flex-col gap-3 z-10">
          {listItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600 font-medium">
              <CheckCircle2 size={18} className="text-[#E31C25]" />
              <span>{item}</span>
            </div>
          ))}
          <p className="text-sm text-gray-400 mt-2 font-medium">Entre outros!</p>
        </div>
      ) : (
        <div className="absolute bottom-0 right-0 left-0 h-[80%] z-0">
            {/* Gradient Overlay for better text readability if image goes high, though specifically styled to be bottom aligned */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center transform translate-y-4 group-hover:scale-105 group-hover:translate-y-2 transition-transform duration-500"
            />
        </div>
      )}
      
      {/* Decorative circle background for list items or plain cards to give depth */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-50 rounded-full z-[-1] group-hover:bg-[#E31C25]/5 transition-colors"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Uniformes Industriais",
      image: "https://i.postimg.cc/HLPDnNdm/Gemini-Generated-Image-qmhdimqmhdimqmhd.png",
    },
    {
      title: "Uniformes FR",
      image: "https://i.postimg.cc/nzs2kR7b/3fdbfd93-8998-42b0-9d5e-791ebadd7d39-removebg-preview.png",
    },
    {
      title: "Uniformes Administrativos",
      image: "https://i.postimg.cc/vT0Ww55H/Sem-nome-(1200-x-900-px)-(640-x-800-px).png",
    },
    {
      title: "Uniformes Escolares",
      image: "https://i.postimg.cc/kXk26jMq/Sem-nome-(1200-x-900-px)-(640-x-800-px)-(1).png",
    },
    {
      title: "Opções para Copa e Cozinha",
      image: "https://i.postimg.cc/zv4Tf8PN/0f7e2fb1-ca9d-457b-afbf-7a99ed7348df.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white max-w-[1400px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-[#E31C25] font-bold text-sm tracking-widest uppercase mb-2 block">
            — Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
            Conheça alguns de nossos <br />
            <span className="text-[#E31C25]">Serviços!</span>
          </h2>
        </div>
        <div className="max-w-lg">
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            MR Marques Uniformes: Sua fonte confiável de uniformes corporativos personalizados. 
            Oferecemos design, qualidade e entrega eficiente para elevar a imagem de sua empresa.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Render Image Cards */}
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            image={service.image} 
          />
        ))}

        {/* Customization Card */}
        <ServiceCard 
          title="Personalizamos com sua Marca"
          isList={true}
          listItems={['Bordado digital', 'Silk screen', 'Sublimação']}
        />

        {/* CTA Card */}
        <ServiceCard 
          title="Conheça todos os serviços"
          isDark={true}
          buttonText="Personalize pelo WhatsApp"
        />
      </div>
    </section>
  );
};

export default Services;