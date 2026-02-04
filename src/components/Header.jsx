const Header = ({ title = "Park Manager", subtitle = "" }) => {
  if (subtitle)
    return (
      <header>
        <h1>{title}</h1>
        <h4 className="text-muted">{subtitle}</h4>
      </header>
    );
  else
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
};

export default Header;
