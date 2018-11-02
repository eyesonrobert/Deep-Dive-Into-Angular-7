//taking the recipes which were managed in the recipe list and managing them in the service
import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    //Recipe is a model we created and imported
    new Recipe(
      "A Test Recipe",
      "Simply a Test",
      "https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "Simply another test",
      "http://www.helenefm.com/wordpress/wp-content/uploads/2018/01/nutella.jpg?w=1400"
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //slice will return a new array but an exact copy of the one in this service file
  }
}
