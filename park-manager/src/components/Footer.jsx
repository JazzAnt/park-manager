const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} &copy; Jason Januar</p>
    </footer>
  );
};

export default Footer;
