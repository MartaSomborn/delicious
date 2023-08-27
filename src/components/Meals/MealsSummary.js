import { Fragment } from "react";
import classes from "./MealsSummary.module.css";
import Card from "../UI/Card";
const MealsSummary = () => {
  return (
    <Card className={classes.card}>
      <h2>Delicoius Food</h2>
      <p>
        Delicious food tantalizes the senses with its rich blend of flavors,
        inviting aromas, and satisfying textures.
      </p>
      <p>
        It has the remarkable ability to evoke emotions, create memories, and
        bring people together in joyful moments of shared indulgence.
      </p>
      <p>
        From intricately spiced dishes to decadent desserts, the world of
        delicious food is a boundless adventure for culinary enthusiasts.
      </p>
    </Card>
  );
};

export default MealsSummary;
