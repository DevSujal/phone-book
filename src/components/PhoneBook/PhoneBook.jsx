import Phone from "./Phone/Phone";
import "./phonebook.css";
import { Add } from "@mui/icons-material";
const PhoneBook = ({
  name,
  number,
  isVisible,
  isediting,
  data,
  handleonclick,
  info,
  displayInfo,
  editArray,
  remove,
  setName,
  setNumber,
  setIsVisible,
  setisediting,
  isdarkthemeEnabled,
  dark_theme,
  setfavourite,
  favourites
}) => {
  return (
    <div className="phonebook">
      {data.length === 0 && <span className="span" style = {isdarkthemeEnabled ? dark_theme : {}}>Phone Book is empty</span> }
      {data.map((value, index) => {
        return (
          <Phone
            key={index}
            index={index}
            name={value.name}
            img={value.img}
            displayInfo={displayInfo}
            dark_theme = {dark_theme}
            isdarkthemeEnabled = {isdarkthemeEnabled}
            setfavourite = {setfavourite}
            favourites = {favourites}
          />
        );
      })}

      {info && (
        <div className="displayInfo flex" style={isdarkthemeEnabled ? dark_theme : {}}>
          <img src={info.img} alt="profile" />
          <span>Name : {info.name}</span>
          <span>Mobile No : {info.number}</span>
          <div className="buttons flex">
            <button
              className="edit"
              onClick={() => {
                setIsVisible(!isVisible);
                setisediting(true);
              }}
            >
              Edit
            </button>
            <button className="delete" onClick={remove}>
              Delete
            </button>
          </div>
        </div>
      )}
      {isVisible && (
        <div className="form flex" style={isdarkthemeEnabled ? dark_theme : {}}>
          <span>Enter Your Details</span>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="numer"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </label>
          <button
            className="button"
            onClick={isediting ? editArray : handleonclick}
          >
            Add
          </button>
        </div>
      )}
      <Add className="add" onClick={() => setIsVisible(!isVisible)} style={isdarkthemeEnabled ? dark_theme : {}} />
    </div>
  );
};

export default PhoneBook;
