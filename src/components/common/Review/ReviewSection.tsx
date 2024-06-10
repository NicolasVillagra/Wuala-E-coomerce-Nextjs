'use client'
import React, { useState, useEffect } from 'react';
import Card from './Card';

const ReviewSection = () => {
  const reviewPerson = [
    {
      name: "Isabella",
      text: "Wuala is a gem in Argentina! The food is delicious, and the atmosphere is perfect. The staff is incredibly friendly and attentive. Highly recommend for a memorable dining experience. Thank you, Wuala!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Laura",
      text: "Wuala is a culinary gem in Argentina! The food is exquisite, and the ambiance is perfect. The staff is incredibly welcoming and attentive. I highly recommend this restaurant for an unforgettable dining experience. Thank you, Wuala!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Martin",
      text: "Wuala is an absolute gem! The food was delicious, and the service was outstanding. The ambiance made our dining experience unforgettable. Highly recommend this restaurant to anyone visiting Argentina. Thank you, Wuala!",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewPerson.length);
    }, 3000); // Cambia de tarjeta cada 3 segundos

    return () => clearInterval(interval);
  }, [reviewPerson.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewPerson.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviewPerson.length - 1 : prevSlide - 1));
  };

  return (
    <div className="w-full sm:h-full flex flex-col p-10 ">
      <div className="carousel w-full relative">
        {reviewPerson.map((person, index) => (
          <div key={index} className={`carousel-item w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
            <Card text={person.text} image={person.image} name={person.name} />
          </div>
        ))}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={handlePrev} className="btn btn-circle">❮</button>
          <button onClick={handleNext} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
