import './pengalaman.css'
import { Link } from 'react-router-dom'

const Pengalaman = () => {
    return ( 
        <div className="container pengalaman">
            <section className="hero-pengalaman">
                    <hr />
                    <h1>Batik Untuk Semua Orang</h1>
                    <p className="pengalaman-hero-desc">Ini cara kami untuk melestarikan warisan leluhur Bangsa Indonesia</p>
                    <img src="assets/pengalaman/Group 283.png" alt="" />
            </section>

            <section className="pengalamans">
                    <hr />
                    <h1>Apa yang kami upayakan?</h1>
                    <p className="pengalaman-hero-desc">Kami ingin melestarikan dan memperkenalkan budaya <br /> Batik Indonesia pada semua orang diseluruh <br /> penjuru dunia. </p>
                    <div className="row">
                        <div className="col">
                            <h3>Bangga menggunakan batik</h3>
                            <p>Menjadi warisan budaya bukan berarti kain Batik hanya disimpan di museum atau bahkan lemari Anda. Dengan menggunakannya, Anda telah membantu mempromosikan Batik kepada orang lain secara tidak langsung. Tentunya dengan mempromosikan kain khas Indonesia ini akan membuatnya semakin terkenal dan masyarakat seluruh dunia tahu bahwa Batik adalah milik Indonesia. </p>
                        </div>
                        <div className="col">
                            <h3>Melibatkan generasi muda untuk memproduksi Batik</h3>
                            <p>Memproduksi Batik dengan orang-orang tua yang sudah berumur. Jika hal ini terus dibiarkan, maka tidak akan ada anak muda yang akan meneruskan kesenian membantik. Oleh sebab itu, mengajarkan generasi muda untuk membatik bisa membantu melestarikan Batik agar tetap hadir sebagai warisan budaya Indonesia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Dukungan pemerintah kepada pelaku bisnis Batik</h3>
                            <p>Kain Batik bisa hadir di tengah-tengah masyarakat saat ini tidak lepas dari kerja para produsen dan pelaku bisnis kerajinan ini. Jika para pebisnis berperan untuk memproduksi Batik, maka peranan pemerintah ialah mendukung para pebisnis ini. Caranya, cukup bantu mereka memasarkan produk Batik hingga ke mancanegara. Dengan begitu, pemerintah telah melakukan langkah besar untuk melestarikan Batik nusantara.</p>
                        </div>
                        <div className="col">
                            <h3>Memperkenalkan Batik ke kancah Internasional</h3>
                            <p>Banyak negara yang menggelar pameran bertema Produk Khas Luar Negeri yang bisa diikuti oleh berbagai negara di seluruh dunia. Dengan mengikuti acara ini, Indonesia bisa melestarikan Batik dan kain khas lainnya.. Tujuannya lainnya adalah untuk memberikan informasi bahwa Batik milik Indonesia dan keindahannya bisa Anda nikmati dengan membelinya. Sekali mendayung dua tiga pulau terlampaui, kan? Produknya di beli dan menghasilkan keuntungan untuk para pembuat Batik dan informasi pentingnya berhasil disampaikan dengan baik.</p>
                        </div>
                    </div>
            </section>

            <section className="cara-kerja">
                <hr />
                <h1>Bagikan Pengalaman Batikmu</h1>
                <p className="pengalaman-hero-desc">Bagikan foto anda menggunakan batik kesukaanmu pada platform social media anda.</p>
                <h2>Cara Kerja</h2>
                <div className="row">
                    <div className="col">
                        <h3>Ambil foto menggunakan pakaian batik</h3>
                        <p>Ambil foto di tempat favoritmu menggunakan pakaian batik kesukaanmu dan pilih foto terbaikmu.</p>
                    </div>
                    <div className="col">
                        <img src="assets/pengalaman/Rectangle 207.png" alt="" />
                    </div>
                </div>
                <div className="row reverse">
                    <div className="col">
                        <h3>Unggah Fotomu pada platform social media</h3>
                        <p>Tulis caption terbaikmu dan jangan lupa sisipkan #PAKAIBATIK #BANGGAPAKAIBATIK #LOKALPRIDE #LOCALPRIDEINDONESIA</p>
                    </div>
                    <div className="col">
                        <img src="assets/pengalaman/Rectangle 208.png" alt="" />
                    </div>
                </div>
            </section>               
             <div className="button">
                <Link to="/" className="btn-outline">Mulai Bagikan Pengalamanmu</Link>
             </div>
            
        </div>
     );
}
 
export default Pengalaman;