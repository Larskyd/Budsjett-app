import './Header.css'
import logo from "../../../assets/sparsom-logo.png";

export default function Header() {
  return (
    <header className="Header">
    <img src={logo} alt="Hoved-logo" className="logo"/>
      <h1>Sparsom</h1>
    </header>
  );
}

