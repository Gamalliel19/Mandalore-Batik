// import JumbotronImage from ''
const HomeContent = () => {
    return (  
        <div className="container">
            <section className="hero">
                <div className="left-hero">
                    <h1>Batik Indonesia</h1>
                    <p>
                        Mari lindungi warisan seni budaya yang berasal dari leluhur Bangsa Indonesia untuk generasi masa depan.
                    </p>
                    <a href="/" className="button-black">
                        Pelajari Lebih Lanjut
                    </a>
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
                    <a href="/" className="card">
                        <img src="assets/apaitubatik.png" alt="" className="card-img" />
                        <p>Apa itu Batik?</p>
                    </a>
                    <a href="/" className="card">
                        <img src="assets/filosofibatik.png" alt="" className="card-img" />
                        <p>Filosofi Batik</p>
                    </a>
                    <a href="/" className="card">
                        <img src="assets/carabuatbatik.png" alt="" className="card-img" />
                        <p>Proses Pembuatan Batik</p>
                    </a>
                </div>
            </section>

            <section className="card-section">
                <a href="/" className="card-long">
                    {/* <img src="assets/lestarikan.png" alt="" className="card-section-img" /> */}
                    <h1>Lestarikan Batik Indonesia</h1>
                    <p>
                        Mari lingungi warisan budaya Indonesia dengan melestarikan batik
                    </p>
                    <div className="button-white">
                        Pelajari lebih lanjut
                    </div>
                </a>
            </section>

            <section className="produk-batik">
                <h2>
                    Produk Batik Indonesia
                </h2>
                <p>
                    Lihat dan temukan jenis-jenis produk Batik khas Indonesia ter-favorit.
                </p>
                <div className="cards">
                    <a href="/" className="card">
                        <img src="assets/pakaian.png" alt="" className="card-img" />
                        <p>Pakaian Batik</p>
                    </a>
                    <a href="/" className="card">
                        <img src="assets/aksesoris.png" alt="" className="card-img" />
                        <p>Aksesoris Batik</p>
                    </a>
                    <a href="/" className="card">
                        <img src="assets/homedecor.png" alt="" className="card-img" />
                        <p>Dekorasi Rumah</p>
                    </a>
                </div>
            </section>

            <section className="card-section">
                <a href="/" className="card-long-dua">
                    {/* <img src="assets/lestarikan.png" alt="" className="card-section-img" /> */}
                    <h1>Telusuri Model Batik Daerah Indonesia</h1>
                    <p>
                        Temukan evolusi motif batik selama berabad-abad dan pilih favoritmu.
                    </p>
                    <div className="button-white">
                        Pelajari lebih lanjut
                    </div>
                </a>
            </section>

        </div>
     );
}
 
export default HomeContent;