import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px", display: "flex", gap: "15px" }}>
      <Link to="/">Головна</Link>
      <Link to="/contacts">Контакти</Link>
      <Link to="/about">Про мене</Link>
    </header>
  );
};

export default Header;
