import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Array<{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }>;
}

function MealRecipeList({ recipes }: RecipeListProps) {
  const limitedRecipes = recipes.slice(0, 12);

  return (
    <div>
      {limitedRecipes.map((recipe, index) => (
        <RecipeCard
          key={ recipe.idMeal }
          index={ index }
          id={ recipe.idMeal }
          name={ recipe.strMeal }
          image={ recipe.strMealThumb }
        />
      ))}
    </div>
  );
}

export default MealRecipeList;
