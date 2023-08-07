import { Recipe } from './Recipe/Recipe';
import recipies from './recipes.json';


export const App = () => {
  return (
    <>
      {recipies.map(({name, time, servings, calories, image, difficulty}) => (
        <Recipe
          key={image}
          name={name}
          time={time}
          servings={servings}
          calories={calories}
          image={image}
          difficulty={difficulty}
        />
    
        ))
      }
</>
  )
    }