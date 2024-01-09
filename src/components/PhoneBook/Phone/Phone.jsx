import { Star } from "@mui/icons-material";
import "./Phone.css";
const Phone = (props) => {
  return (
    <div
      className="phone flex"
     
      style={props.isdarkthemeEnabled ? props.dark_theme : {}}
    >
      <div className="wrapper flex" onClick={() => props.displayInfo(props.index)}>
        <img src={props.img} alt="profile" />
        <span>{props.name}</span>
      </div>
      <Star className="star"/>
    </div>
  );
};

export default Phone;
