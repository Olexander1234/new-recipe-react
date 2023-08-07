import {
    HiOutlineChartBar,
    HiOutlineChartPie,
  } from "react-icons/hi";
  import { BsFillAlarmFill } from "react-icons/bs"; 
  import { RecipeInfo } from "./RecipeInfo";
  import {
    RecipeList,
    RecipeCard,
    RecipeImage,
  } from "./Resipe.styled";
  import { Difficulty } from "./Difficulty";
  
  export function Recipe({ name, time, servings, calories, image, difficulty }) {
    return (
      <RecipeCard>
        <h2>{name}</h2>
        <RecipeImage src={image} alt="" />
        <RecipeList>
          <RecipeInfo text={`${time} min`} icon={BsFillAlarmFill} /> {/* Змінили ім'я іконки тут */}
          <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
          <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
        </RecipeList>
        <Difficulty difficulty={difficulty} />
      </RecipeCard>
    );
  }