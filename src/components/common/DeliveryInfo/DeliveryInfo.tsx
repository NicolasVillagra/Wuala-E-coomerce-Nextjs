import React from "react";
import styles from "./delivery.module.css";
import Card from "./Card";

const DeliveryInfo = () => {
    const data = [
        {
            text:"Express Meal Delivery",
            image:"https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text:"Weekly Meal Plans",
            image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text:"Customized Orders",
            image:"https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text:"Corporate Catering",
            image:"https://images.unsplash.com/photo-1576842546422-60562b9242ae?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text:"Family Meals",
            image:"https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text:"Local Favorites",
            image:"https://images.unsplash.com/photo-1621241441637-ea2d3f59db32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
  return (
    <div className="w-full h-full">
      <section className={styles.container}>
        <div className={styles.wave}></div>
      </section>
      <div className="bg-black w-full h-full">
        <h1 className="text-white text-5xl font-bold text-center">Introducing Our Services</h1>
        <div>
            {data.map((e,index)=>(
                <Card key={index} image={e.image} text={e.text} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
