import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';
import {RecipeList } from './Resipe.styled'
export function Recipe ({name, time, servings, calories, image}){
    return <div>
        <h2>{name}</h2>
        <img src={image} alt="" width="450" />
        <RecipeList >
            <RecipeInfo 
                text={`${time} min`} 
                icon={BsAlarm}/>
            <RecipeInfo 
                text={`${servings} servings`} 
                icon={HiOutlineChartPie}/>
            <RecipeInfo 
                text={`${calories} calories`} 
                icon={HiOutlineChartBar}/>
        </RecipeList >
    </div>
}