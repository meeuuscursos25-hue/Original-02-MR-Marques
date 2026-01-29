import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-black py-2 px-4 text-center z-50 relative">
      <p className="text-white text-xs md:text-sm font-bold tracking-wide uppercase">
        PEDIDO MÍNIMO DE 10 UNIDADES
      </p>
    </div>
  );
};

export default TopBar;