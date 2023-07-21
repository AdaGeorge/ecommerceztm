import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./directoryItem.style.js";

const DirectoryItem = ({ category }) => {
  const { route, imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
