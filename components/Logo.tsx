import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* New Text Logo */}
      <span className="text-[#E31C25] font-black text-4xl md:text-5xl tracking-tighter">
        MR
      </span>
      <span className="text-black font-black text-4xl md:text-5xl tracking-tighter">
        Marques
      </span>
    </div>
  );
};

export default Logo;