import FoodType from "@/components/common/FoodType/FoodType";
import Header from "@/components/common/Header/Header";
import Hero from "@/components/common/Hero/Hero";
import ImageRestaurant from "@/components/common/ImageRestaurant/ImageRestaurant";
import RestaurantInfo from "@/components/common/RestaurantInfo/RestaurantInfo";
import Nav from "@/components/layout/Header/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FoodType/>
      <ImageRestaurant/>
      <RestaurantInfo/>
    </div>
  );
}
