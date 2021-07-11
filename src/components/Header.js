<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Mandalore</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/produksi">Produksi</Link>
                        </li>
                        <li>
                            <Link to="/batik-daerah">Batik Daerah</Link>
                        </li>
                        <li>
                            <Link to="/pengalaman">Pengalaman</Link>
                        </li>
                    </ul>
                </nav>
                <div className="phonenumber">
                    <Link to="/">+62899952888</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
>>>>>>> 9673010638d0e2ef7043f7d211700044bc80a868
