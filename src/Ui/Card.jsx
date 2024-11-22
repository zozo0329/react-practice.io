import "./Card.css";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Image from "../Components/Image";
const Card = () => {
  return (
    <div className="content-container">
      <Header />
      <div className="login-section">
        <div className="for-user">
          <Login />
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
    </div>
  );
};
export default Card;
