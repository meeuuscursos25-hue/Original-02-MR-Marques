import React, { useEffect, useRef, useState } from 'react';

const LogoContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`flex-shrink-0 flex items-center justify-center h-28 w-56 mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-105 select-none ${className}`}>
    {children}
  </div>
);

const Clients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 0.8; // Smooth auto-scroll speed
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Logo Components
  const Logos = () => (
    <>
      {/* 1. LOG fit Logística */}
      <LogoContainer>
        <div className="flex flex-col items-center">
           <div className="flex items-center text-[#E66D26] font-bold text-4xl tracking-tight leading-none">
              <span>LOG</span>
              {/* Hexagon-like brackets */}
              <div className="flex items-center mx-1 relative">
                 <div className="text-4xl font-light scale-y-125 text-[#E66D26]">{'{'}</div>
                 <span className="mx-0.5 text-2xl font-bold mt-1">fit</span>
                 <div className="text-4xl font-light scale-y-125 text-[#E66D26]">{'}'}</div>
              </div>
           </div>
           <span className="text-[#E66D26] text-[10px] uppercase tracking-[0.3em] font-medium w-full text-center mt-1">Logística</span>
        </div>
      </LogoContainer>

      {/* 2. PINTEC */}
      <LogoContainer>
         <div className="flex flex-col items-center">
            <div className="flex relative mb-1 h-10 w-16 justify-center">
               {/* Simplified Geometric Logo */}
               <div className="absolute left-0 top-0 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-[#1a237e]"></div>
               <div className="absolute right-0 top-0 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-[#1a237e]"></div>
               <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-gray-400"></div>
            </div>
            <span className="text-black font-black text-2xl tracking-[0.15em] leading-none scale-x-110">PINTEC</span>
            <span className="text-gray-500 text-[7px] font-bold uppercase tracking-widest mt-1">Estruturas Metálicas</span>
         </div>
      </LogoContainer>

      {/* 3. Vitral */}
      <LogoContainer>
        <div className="bg-[#FFD100] w-40 h-24 flex items-center justify-center relative overflow-hidden rounded-md shadow-sm">
           {/* Sunburst effect */}
           <div className="absolute inset-0 opacity-20 bg-[repeating-conic-gradient(#fff_0_15deg,transparent_15deg_30deg)]"></div>
           <div className="relative z-10 flex flex-col items-center transform -rotate-6">
              <span className="text-[#E31C25] font-black text-4xl italic leading-none" style={{textShadow: '2px 2px 0px #fff'}}>Vitral</span>
              <span className="text-[#0055A4] font-bold text-sm font-handwriting italic leading-none bg-white/50 px-2 rounded-full mt-1">O Original</span>
           </div>
           <div className="absolute top-2 left-2 w-20 h-20 border-t-4 border-r-4 border-[#0055A4] rounded-full opacity-30 transform -rotate-12"></div>
        </div>
      </LogoContainer>

      {/* 4. Clio Style */}
      <LogoContainer>
         <div className="flex items-center">
            <div className="relative">
              <span className="text-black font-bold text-5xl tracking-tighter">CLIO</span>
              {/* Orange Dot on I */}
              <div className="absolute top-[12px] right-[28px] w-3 h-3 bg-[#F95700] rounded-full"></div>
            </div>
            <div className="flex flex-col justify-end h-10 ml-1">
                <span className="text-black font-bold text-xs tracking-widest uppercase mb-1">style</span>
            </div>
         </div>
      </LogoContainer>

      {/* 5. CINCY (New) */}
      <LogoContainer>
        <div className="flex items-center gap-2">
           {/* C Icon */}
           <div className="w-10 h-10 border-[5px] border-[#C8102E] rounded-full border-r-transparent transform -rotate-45"></div>
           <div className="flex flex-col">
              <span className="text-[#C8102E] font-black text-3xl leading-none tracking-tighter">CINCY</span>
              <span className="text-[#C8102E] text-[7px] font-bold uppercase tracking-widest">Produtos Automotivos</span>
           </div>
        </div>
      </LogoContainer>

      {/* 6. MRA Transportes */}
      <LogoContainer>
        <div className="flex flex-col items-center">
           {/* Abstract Truck */}
           <div className="flex mb-1 w-full justify-center">
              <div className="w-6 h-3 bg-[#0066cc] transform -skew-x-12 rounded-sm mr-1"></div>
              <div className="w-10 h-3 bg-[#009933] transform -skew-x-12 rounded-sm"></div>
           </div>
           <span className="text-[#0066cc] font-black text-4xl leading-none">MRA</span>
           <span className="text-[#009933] font-bold text-[10px] tracking-[0.25em] uppercase leading-none mt-1">Transportes</span>
        </div>
      </LogoContainer>

      {/* 7. XFS */}
      <LogoContainer>
         <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center relative">
                   <div className="w-5 h-5 rounded-full border border-black transform translate-y-2"></div>
                   <div className="absolute top-0 w-full h-full border-t border-black rounded-full opacity-50"></div>
                </div>
                <span className="text-black font-serif font-bold text-4xl">XFS</span>
            </div>
            <span className="text-gray-500 text-[6px] tracking-[0.3em] uppercase mt-2 w-full text-center border-t border-gray-200 pt-1">Construction do Brasil</span>
         </div>
      </LogoContainer>

      {/* 8. Processo Apell */}
      <LogoContainer>
         <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
             <div className="absolute inset-0 border-[3px] border-[#4A3B89] transform rotate-45 rounded-sm bg-white z-10"></div>
             <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#E66D26] mb-2"></div>
                <div className="absolute w-2 h-4 bg-[#E66D26] mt-2"></div>
             </div>
             {/* Blue corners */}
             <div className="absolute bottom-1 left-2 w-3 h-3 bg-[#4A3B89] z-20 transform rotate-45"></div>
             <div className="absolute bottom-1 right-2 w-3 h-3 bg-[#4A3B89] z-20 transform rotate-45"></div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gray-500 text-[8px] font-medium lowercase tracking-widest leading-none">processo</span>
            <span className="text-[#555] font-bold text-3xl tracking-tight leading-none">apell</span>
            <span className="text-gray-400 text-[8px] font-bold uppercase tracking-widest leading-none mt-0.5">Campos Elíseos</span>
          </div>
        </div>
      </LogoContainer>

      {/* 9. Nitriflex */}
      <LogoContainer>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0055A4] to-[#003366] rounded-md flex items-center justify-center relative overflow-hidden shadow-sm">
             <div className="absolute w-full h-[40%] bg-white/30 top-0 skew-y-12 transform origin-top-left"></div>
             <span className="text-white font-black text-2xl italic">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#333] font-black text-2xl tracking-tight leading-none">Nitriflex</span>
            <span className="text-gray-400 text-[6px] font-medium tracking-wide leading-none mt-1">Presença brasileira em elastômeros</span>
          </div>
        </div>
      </LogoContainer>

      {/* 10. GO fit */}
      <LogoContainer>
        <div className="flex items-center gap-1">
          <span className="text-[#F95700] font-bold text-4xl tracking-tighter">GOfit</span>
          <div className="flex flex-col justify-center h-full ml-1 space-y-[2px]">
             <div className="w-2 h-6 border-r-4 border-[#F95700] transform skew-x-[-20deg]"></div>
             <div className="w-2 h-6 border-r-4 border-[#F95700] transform skew-x-[-20deg] opacity-60 absolute translate-x-1.5"></div>
          </div>
        </div>
      </LogoContainer>
      
      {/* 11. Engesul */}
      <LogoContainer>
        <div className="bg-[#002672] px-4 py-2 rounded-sm flex flex-col items-center justify-center shadow-md">
           <div className="relative w-6 h-6 mb-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white rotate-45"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white"></div>
           </div>
           <span className="text-white font-serif font-bold text-sm tracking-[0.2em]">ENGESUL</span>
        </div>
      </LogoContainer>

      {/* 12. Braskem */}
      <LogoContainer>
         <div className="flex items-center gap-1">
            <span className="text-[#005599] font-bold text-3xl tracking-tight">Braskem</span>
            <div className="w-3 h-5 bg-gradient-to-br from-[#FFD100] to-[#0099CC] rounded-r-full rounded-bl-full ml-1"></div>
         </div>
      </LogoContainer>

      {/* 13. Assecampe */}
      <LogoContainer>
         <div className="flex items-center gap-2">
            <div className="flex items-end gap-[2px]">
               <div className="w-2.5 h-4 bg-[#0055A4] rounded-t-full rounded-bl-full"></div>
               <div className="w-2.5 h-6 bg-[#FFD100] rounded-t-full -mb-1"></div>
               <div className="w-2.5 h-4 bg-[#009933] rounded-t-full rounded-br-full"></div>
            </div>
            <div className="flex flex-col">
               <span className="text-gray-500 font-medium text-lg leading-none">assecampe</span>
               <span className="text-[#0055A4] font-bold text-[8px]">20 ANOS</span>
            </div>
         </div>
      </LogoContainer>

       {/* 14. Widi Care */}
       <LogoContainer>
          <div className="flex flex-col items-center">
             <span className="text-black font-medium text-4xl tracking-tighter leading-none lowercase">widi</span>
             <span className="text-black font-medium text-xs tracking-[0.4em] leading-none uppercase mt-1">care</span>
          </div>
       </LogoContainer>
       
       {/* 15. Outlet Premium */}
       <LogoContainer>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center bg-[#E31C25] relative">
                <div className="absolute inset-0 border border-dashed border-[#FFD100] rounded-full m-0.5"></div>
                <div className="w-2 h-2 bg-[#FFD100] rounded-full border border-black"></div>
             </div>
             <div className="flex flex-col">
                <span className="text-[#990000] font-serif font-bold text-lg leading-none">OUTLET</span>
                <span className="text-[#990000] font-serif text-base leading-none">premium</span>
             </div>
          </div>
       </LogoContainer>

       {/* 16. Metta */}
       <LogoContainer>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-[#000066] relative overflow-hidden flex items-center justify-center">
                <div className="w-2 h-12 bg-[#F95700] transform rotate-[30deg]"></div>
             </div>
             <span className="text-[#000066] font-bold text-3xl lowercase tracking-tight">metta</span>
          </div>
      </LogoContainer>

    </>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-100 overflow-hidden select-none">
      <div className="w-full relative">
        
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <span className="text-gray-400 font-bold text-xs md:text-sm tracking-[0.3em] uppercase block mb-3">
            NOSSOS PARCEIROS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Quem confia na MR Marques
          </h2>
          <div className="h-1 w-20 bg-[#E31C25] mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-100 via-gray-100/90 to-transparent z-20 pointer-events-none"></div>

          {/* Scrollable Track - Render Logos Twice for Infinite Effect */}
          <div 
            ref={scrollRef}
            className="flex items-center overflow-x-auto scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center">
                <Logos />
            </div>
            <div className="flex items-center">
                <Logos />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;