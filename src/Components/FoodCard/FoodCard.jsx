import Image from "next/image";
import React from "react";

const FoodCard = ({ food }) => {
  const { name, description, category, image, price } = food;
  return (
    <div>
      <div className="card card-body card-border border-gray-300 shadow-sm">
        <Image width={500} height={500} alt={name} src={image} />
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center justify-between">
          <p className="tabs-xl font-semibold">Catagory: {category}</p>
          <p className="text-red-600 font-semibold">{price}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
