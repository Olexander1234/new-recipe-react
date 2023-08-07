import styled from "styled-components";

export const RecipeList = styled.ul`
  display: flex;
  justify-content: center;
  text-alaing:center;
  background-color: grey;
  border-radius: 5px ;
  width: 160px
`;

export const RecipeCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px

`;

export const RecipeImage = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const DifficultyList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
`;

export const DifficultyItem = styled.li`
  background-color: ${(props) => (props.selected ? "green" : "white")};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
  width: 160px;
  display: flex;
`;
