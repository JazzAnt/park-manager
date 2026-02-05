const Header = ({ title = "Park Manager", subtitle = "" }) =>
  subtitle ? (
    <header>
      <h1>{title}</h1>
      <h4 className="text-muted">{subtitle}</h4>
    </header>
  ) : (
    <header>
      <h1>{title}</h1>
    </header>
  );

export default Header;
