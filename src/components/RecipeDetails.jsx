import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => (
  <div className="recipe-details">
    <button onClick={onBack}>Назад к списку</button>
    <h2>{recipe.name}</h2>
    <img
      src={recipe.image}
      alt={recipe.name}
      style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', margin: '1rem 0' }}
    />
    <h4>Описание:</h4>
    <p>{recipe.description}</p>
    <h4>Ингредиенты:</h4>
    <ul>
      {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
    </ul>
    <h4>Шаги приготовления:</h4>
    <ol>
      {recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
    </ol>
  </div>
);

export default RecipeDetails;