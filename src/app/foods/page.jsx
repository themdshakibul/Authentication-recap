import FoodCard from "@/Components/FoodCard/FoodCard";

const FoodsPage = async () => {
  const res = await fetch("http://localhost:4000/foods");
  const foods = await res.json();

  return (
    <div className="container mx-auto px-2 mt-5">
      <div className="grid grid-cols-4 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
