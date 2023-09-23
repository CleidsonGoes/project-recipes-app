import React from 'react';

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
  index: number;
}

function RecipeCard({ id, name, image, index }: RecipeCardProps) {
  return (
    <div data-testid={ `${index}-recipe-card` } style={ { cursor: 'pointer' } }>
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-card-img` }
        style={ { maxWidth: '200px', height: 'auto' } }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

export default RecipeCard;
