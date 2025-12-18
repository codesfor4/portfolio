import React from 'react';

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Cosmic background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
        style={{
          backgroundImage: 'url(/assets/cosmic.avif)',
          backgroundSize: '120% 120%',
        }}
      />
      {/* Dark overlay to reduce brightness */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Background3D;
