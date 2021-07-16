import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-container">
                <div className="top">
                    <div className="satu">
                        <p>TENTANG</p>
                        <Link to="/">Apa itu Batik?</Link>
                        <Link to="/">Filosofi Batik</Link>
                        <Link to="/">Proses Pembuatan Batik</Link>
                        <Link to="/">Produk</Link>
                        <Link to="/">Sejarah Batik</Link>
                        <Link to="/">Aturan Pakai Batik</Link>
                    </div>
                    <div className="dua">
                        <p>KOMUNITAS</p>
                        <Link to="/">Batik Story</Link>
                        <Link to="/">Batik Fashion Indonesia</Link>
                        <Link to="/">Batik Boutique</Link>
                        <Link to="/">Batik.org</Link>
                        <Link to="/">Pakai Batik Tiap Hari</Link>
                        <Link to="/">Lokal Pride Indonesia</Link>
                    </div>
                    <div className="tiga">
                        <p>PENGALAMAN</p>
                        <Link to="/">#PAKAIBATIK</Link>
                        <Link to="/">#BANGGAPAKAIBATIK</Link>
                        <Link to="/">#LOKALPRIDE</Link>
                        <Link to="/">#LOCALPRIDEINDONESIA</Link>
                    </div>
                    <div className="empat">
                        <p>DUKUNGAN</p>
                        <Link to="/">Pusat Bantuan</Link>
                        <Link to="/">Aturan Pakai Batik</Link>
                        <Link to="/">Privasi</Link>
                        <Link to="/">Ketentuan</Link>
                        <Link to="/">Cookies</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span>© 2021 Mandalore, Inc.</span>
                    </div>
                    <div className="right">
                        <Link to="/">FB</Link>
                        <Link to="/">IG</Link>
                        <Link to="/">TW</Link>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;