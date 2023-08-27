import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Burger with french fires",
    description: "Beef burger with avocado and french fries",
    price: 22.9,
  },
  {
    id: "2",
    name: "Cesar Salat",
    description: "Very delicious cesar salat",
    price: 18.99,
  },
  {
    id: "3",
    name: "Spaghetti Bolognese",
    description: "Home made spaghetti bolognese",
    price: 20.99,
  },
  {
    id: "4",
    name: "Lasagna",
    description: "Lasagna Alla Napoletana with salat",
    price: 18.9,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return <Card className={classes.meal}>{mealList}</Card>;
};

export default AvailableMeals;
