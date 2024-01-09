import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import { useState } from "react";
import img from "./components/PhoneBook/logo.webp";
import Favourites from "./Pages/Favourites/Favourites";
import Settings from "./Pages/Settings/Settings";

const App = () => {
  const dark_theme = {
    background: "rgb(50, 57, 57)",
    color: "white",
  };
  const [isdarkthemeEnabled, setIsDarkThemeEnabled] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isediting, setisediting] = useState(false);
  const [data, setData] = useState([]);

  const handleonclick = () => {
    if (name.length !== 0 && number.length !== 0) {
      setData((prev) => {
        return [
          ...prev,
          {
            name: name,
            number: number,
            img: img,
          },
        ];
      });
    }
    setIsVisible(!isVisible);
  };
  const [info, setInfo] = useState();

  const displayInfo = (key) => {
    console.log("sujal");
    setInfo(() => {
      return {
        name: data[key].name,
        img: data[key].img,
        number: data[key].number,
      };
    });
  };

  const editArray = () => {
    if (name.length !== 0 && number.length !== 0) {
      setData(() => {
        return data.map((value) => {
          if (value.name === info.name) {
            value.name = name;
            value.number = number;
          }
          return value;
        });
      });
    }

    setInfo();
    setIsVisible(!isVisible);
    setisediting(false);
  };

  const remove = () => {
    setData(() => {
      return data.filter((value) => {
        return value.name !== info.name;
      });
    });
    setInfo();
  };

  return (
    <div
      className="app"
      style={isdarkthemeEnabled ? { background: "rgb(45, 43, 43)" } : {}}
    >
      <BrowserRouter>
        <Header
          setIsDarkThemeEnabled={setIsDarkThemeEnabled}
          isdarkthemeEnabled={isdarkthemeEnabled}
          dark_theme={dark_theme}
        />
        <Routes>
          <Route
            exact
            path="/phone-book"
            element={
              <PhoneBook
                name={name}
                number={number}
                isVisible={isVisible}
                isediting={isediting}
                data={data}
                handleonclick={handleonclick}
                info={info}
                displayInfo={displayInfo}
                editArray={editArray}
                remove={remove}
                setName={setName}
                setNumber={setNumber}
                setIsVisible={setIsVisible}
                setisediting={setisediting}
                setData={setData}
                setInfo={setInfo}
                isdarkthemeEnabled={isdarkthemeEnabled}
                dark_theme={dark_theme}
              />
            }
          ></Route>
          <Route
            exact
            path="/Favourites"
            element={
              <Favourites
                isdarkthemeEnabled={isdarkthemeEnabled}
                dark_theme={dark_theme}
              />
            }
          ></Route>
          <Route
            exact
            path="/Settings"
            element={
              <Settings
                isdarkthemeEnabled={isdarkthemeEnabled}
                dark_theme={dark_theme}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
