import React, {useState} from "react";
import "./style.css";
import Menu from "./Menu";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.type;
    })
  ),
  "All",
];

console.log(uniqueList);

const  GroceryList = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  const filterItem = (type) => {
    if (type === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.type === type;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Card menuData={menuData} />
    </>
  );
};
export default GroceryList;