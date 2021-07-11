import { Link } from 'react-router-dom'

const MobileMenu = () => {
    return ( 
        <div className="mobile-menu">
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
        </div>
     );
}
 
export default MobileMenu;