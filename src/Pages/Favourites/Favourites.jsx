import "./Favourites.css";

const Favourites = (props) => {
  return (
    <div className="favourites" style={props.isdarkthemeEnabled ? props.dark_theme : {}}>
     <span>See Your Favourites</span>
    </div>
  );
};

export default Favourites;
