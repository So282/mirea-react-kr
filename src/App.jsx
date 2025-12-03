import React, { useState } from 'react';
import recipes from './data/recipes';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="app-container">
      <h1>Каталог рецептов</h1>
      {!selectedRecipe ? (
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;