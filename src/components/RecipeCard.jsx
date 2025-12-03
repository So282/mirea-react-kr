import React from 'react';

const RecipeCard = ({ recipe, onSelect }) => (
  <div className="recipe-card" onClick={() => onSelect(recipe)}>
    <img
      src={recipe.image}
      alt={recipe.name}
      className="recipe-card-image"
      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
    />
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
  </div>
);

export default RecipeCard;