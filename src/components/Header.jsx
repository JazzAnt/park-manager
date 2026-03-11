import NavBar from "./NavBar";
const Header = ({ title = "Park Manager", subtitle = "" }) =>
  subtitle ? (
    <header>
      <h1>{title}</h1>
      <h4 className="text-muted">{subtitle}</h4>
      <NavBar/>
    </header>
  ) : (
    <header>
      <h1>{title}</h1>
      <NavBar/>
    </header>
  );

export default Header;
