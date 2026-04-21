import React from 'react';

export const renderWithKoLab = (text: string) => {
  return text.split(/(Ko\+Lab)/g).map((part, i) => 
    part === 'Ko+Lab' ? (
      <span key={i} className="font-extrabold tracking-tight">
        <span className="text-black">Ko</span>
        <span className="text-yellow-400">+</span>
        <span className="text-black">Lab</span>
      </span>
    ) : part
  );
};
