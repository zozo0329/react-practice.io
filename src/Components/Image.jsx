import "./Image.css";
import backgroundImage from "./login-img.jpg";
const Image = () => {
  return (
    <div className="image-container">
      <img src={backgroundImage} alt="Background-image" />
    </div>
  );
};
export default Image;
