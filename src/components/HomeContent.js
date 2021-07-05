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

        </div>
     );
}
 
export default HomeContent;