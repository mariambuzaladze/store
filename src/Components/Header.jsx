import SearchIcon from "/search.png";
import BurgerMenuIcon from "/burger-menu.png";
import HeaderCSS from "./CSS/header.module.css";

export default function Header() {
  return (
    <header>
      <h1>logo</h1>
      <div className={HeaderCSS["icon-container"]}>
        <img src={SearchIcon} alt="search icon" />
        <img src={BurgerMenuIcon} alt="burger menu icon" />
      </div>
    </header>
  );
}
