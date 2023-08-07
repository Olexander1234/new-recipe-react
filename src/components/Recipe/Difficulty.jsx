import PropTypes from "prop-types";
import { DifficultyList, DifficultyItem } from "./Resipe.styled.jsx";

export const Difficulty = ({ difficulty }) => {
  return (
    <div>
      <h1>Difficulty</h1>
      <DifficultyList>
        <DifficultyItem selected={difficulty === 0}>easy</DifficultyItem>
        <DifficultyItem selected={difficulty === 1}>medium</DifficultyItem>
        <DifficultyItem selected={difficulty === 2}>hard</DifficultyItem>
      </DifficultyList>
    </div>
  );
};

Difficulty.propTypes = {
  difficulty: PropTypes.oneOf([0, 1, 2]),
};