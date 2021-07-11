import '../components/css/header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">Mandalore</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Production</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="phonenumber">
          <a href="/">+62899952888</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
