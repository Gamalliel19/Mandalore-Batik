import { Link } from 'react-router-dom'

const HomeContent = () => {
    return (  
        <div className="container">
            <section className="hero">
                <div className="left-hero">
                    <h1>Batik Indonesia</h1>
                    <p>
                        Mari lindungi warisan seni budaya yang berasal dari leluhur Bangsa Indonesia untuk generasi masa depan.
                    </p>
                    <Link to="/" className="button-black">
                        Pelajari Lebih Lanjut
                    </Link>
                </div>
                <div className="right-hero">
                    <img src="assets/jumbotron.png" alt="Batik Indonesia" className="jumbotron-image" />
                </div>
            </section>

            <section className="belajar-batik">
                <h2>
                    Pelajari Batik Indonesia
                </h2>
                <p>
                    Penjelasan mengenai batik, filosofi, dan proses pembuatan batik.
                </p>
                <div className="cards">
                    <Link to="/tentang" className="card">
                        <img src="assets/apaitubatik.png" alt="" className="card-img" />
                        <p>Apa itu Batik?</p>
                    </Link>
                    <Link to="/filosofi-batik" className="card">
                        <img src="assets/filosofibatik.png" alt="" className="card-img" />
                        <p>Filosofi Batik</p>
                    </Link>
                    <Link to="/produksi" className="card">
                        <img src="assets/carabuatbatik.png" alt="" className="card-img" />
                        <p>Proses Pembuatan Batik</p>
                    </Link>
                </div>
            </section>

            <section className="card-section">
                <Link to="/" className="card-long">
                    {/* <img src="assets/lestarikan.png" alt="" className="card-section-img" /> */}
                    <h1>Lestarikan Batik Indonesia</h1>
                    <p>
                        Mari lingungi warisan budaya Indonesia dengan melestarikan batik
                    </p>
                    <div className="button-white">
                        Pelajari lebih lanjut
                    </div>
                </Link>
            </section>

            <section className="produk-batik">
                <h2>
                    Pelajari Juga
                </h2>
                <p>
                    Pelajari lebih lanjut mengenai batik mulai dari sejarah hingga terdaftar di UNESCO
                </p>
                <div className="cards">
                    <Link to="/sejarah" className="card">
                        <img src="assets/8Bg8N8HtiWI-1.png" alt="" className="card-img" />
                        <p>Sejarah Batik</p>
                    </Link>
                    <Link to="/aturan" className="card">
                        <img src="assets/8Bg8N8HtiWI-2.png" alt="" className="card-img" />
                        <p>Aturan Pakai Batik</p>
                    </Link>
                    <Link to="/unesco" className="card">
                        <img src="assets/8Bg8N8HtiWI.png" alt="" className="card-img" />
                        <p>UNESCO | Batik Indonesia</p>
                    </Link>
                </div>
            </section>

            <section className="card-section">
                <Link to="/" className="card-long-dua">
                    {/* <img src="assets/lestarikan.png" alt="" className="card-section-img" /> */}
                    <h1>Telusuri Model Batik Daerah Indonesia</h1>
                    <p>
                        Temukan evolusi motif batik selama berabad-abad dan pilih favoritmu.
                    </p>
                    <div className="button-white">
                        Pelajari lebih lanjut
                    </div>
                </Link>
            </section>

        </div>
     );
}
 
export default HomeContent;