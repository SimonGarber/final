import React, { useState, createContext, useEffect, useReducer } from 'react';
// import Axios from 'axios';
export const RecipesContext = createContext();

export const RecipesProvider = (props) => {
  // Axios.get(
  //   'https://api2.bigoven.com/recipe/steps/196802?api_key=kYmJ0liqms7d9D2lK5v1vUo7D37a456U'
  // )
  //   .then(function(response) {
  //     console.log(response.data);
  //   })
  //   .catch(function(e) {
  //     console.log(e);
  //   });

  const [recipes, setRecipes] = useState([
    {
      RecipeID: 196802,
      Title: 'Quinoa & Mango Salad',
      Description:
        'yummy warm or chilled. You can add some fresh squeezed lemon juice to this also. If no parsley I have made it with chives, and tarragon (fresh)',
      Category: 'Salad',
      ImageURL: 'http://redirect.bigoven.com/pics/quinoa-and-mango-salad-5.jpg',
      Ingredients: [
        {
          IngredientId: 2016375,
          Name: 'Olive Oil',
          MetricUnit: 'ml',
          MetricQuantity: 59,
          DisplayQuantity: '1/4',
          Quantity: 0.25,
          Unit: 'cup'
        },

        {
          IngredientId: 2016376,
          Name: 'Dijon mustard',
          MetricUnit: 'ml',
          MetricQuantity: 1,
          DisplayQuantity: '1',
          Quantity: 1.0,
          Unit: 'tablespoon'
        },
        {
          IngredientId: 2016376,
          Name: 'quinoa',
          MetricUnit: 'cup',
          MetricQuantity: 1,
          DisplayQuantity: '1',
          Quantity: 1.0,
          Unit: 'cup'
        },
        {
          IngredientId: 2016377,
          Name: 'broth ',
          MetricUnit: 'ml',
          MetricQuantity: 473,
          DisplayQuantity: '2',
          Quantity: 2.0,
          Unit: 'cup'
        },
        {
          IngredientId: 2016378,
          Name: 'mango',
          MetricUnit: 'each',
          MetricQuantity: 2.0,
          DisplayQuantity: '2',
          Quantity: 0.25,
          Unit: 'each'
        },
        {
          IngredientId: 2016379,
          Name: 'green onion',
          MetricUnit: 'c',
          MetricQuantity: 59,
          DisplayQuantity: '1/4',
          Quantity: 0.25,
          Unit: 'cup'
        },
        {
          IngredientId: 2016380,
          Name: 'dried cranberries',
          MetricUnit: 'ml',
          MetricQuantity: 118.0,
          DisplayQuantity: '1/2',
          Quantity: 0.5,
          Unit: 'cup'
        },
        {
          IngredientId: 2016381,
          Name: 'parsley',
          MetricUnit: 'ml',
          MetricQuantity: 59,
          DisplayQuantity: '1/4',
          Quantity: 0.25,
          Unit: 'cup'
        },

        {
          IngredientId: 2016383,
          Name: 'White Vinegar',
          MetricUnit: 'ml',
          MetricQuantity: 1,
          DisplayQuantity: '1',
          Quantity: 1.0,
          Unit: 'tablespoon'
        }
      ]
    }
  ]);
  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipesContext.Provider>
  );
};
