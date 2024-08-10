'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutUs from "@/components/common/AboutUs/AboutUs";
import ContactUs from "@/components/common/ContactUs/ContactUs";
import FoodType from "@/components/common/FoodType/FoodType";
import Header from "@/components/common/Header/Header";
import Hero from "@/components/common/Hero/Hero";
import ImageRestaurant from "@/components/common/ImageRestaurant/ImageRestaurant";
import Map from "@/components/common/Map/Map";
import RestaurantInfo from "@/components/common/RestaurantInfo/RestaurantInfo";
import ReviewSection from "@/components/common/Review/ReviewSection";
import Nav from "@/components/layout/Header/Nav";
import Image from "next/image";

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // El componente debe estar al menos 20% visible
    triggerOnce: true, // La animación se dispara solo una vez
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>
      <AnimatedComponent>
        <FoodType />
      </AnimatedComponent>
      <AnimatedComponent>
        <ImageRestaurant />
      </AnimatedComponent>
      <AnimatedComponent>
        <RestaurantInfo />
      </AnimatedComponent>
      <AnimatedComponent>
        <ReviewSection />
      </AnimatedComponent>
      <AnimatedComponent>
        <AboutUs />
      </AnimatedComponent>
      <AnimatedComponent>
        <Map />
      </AnimatedComponent>
      <AnimatedComponent>
        <ContactUs />
      </AnimatedComponent>
    </div>
  );
}
