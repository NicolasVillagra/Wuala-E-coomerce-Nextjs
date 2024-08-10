import React from 'react';

interface CardProps {
  image: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="relative grid h-[20rem] w-full max-w-[18rem] overflow-hidden rounded-xl bg-black text-center">
      <img
        src={image}
        alt="card image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex h-full w-full flex-col justify-center bg-black bg-opacity-50 p-6">
        <h2 className="text-2xl font-medium text-white">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default Card;
