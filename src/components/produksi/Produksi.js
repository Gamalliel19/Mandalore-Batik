import './index.css'
// import {Link} from 'react-router-dom'
import ChildHeader from '../ChildHeader'

const Produksi = () => {
    return ( 
        <div className="container produksi">
            <h1>Ada 7 langkah yang  <br />
                dilakukan untuk <br /> membuat kain <br /> 
                batik yang <br />
                cantik <br />
            </h1>

            {/* Content */}
            <div className="row">
                <div className="col">
                    <h3>01. Nglengreng</h3>
                    <p>
                    Nglengreng adalah proses menggambar pola Batik pada selembar kain linen dengan tangan menggunakan alat lilin dan perunggu yang disebut Canting. Pertama-tama, letakkan kain linen di atas sepotong kayu berbentuk persegi atau di atas permukaan yang rata. Rebus lilin hingga 60 – 70 derajat Celcius. Setelah cairan lilin siap, ambil cairan panas dengan menggunakan alat perunggu Canting dan gambar pola pada linen sekaligus. 
                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI.png" alt="" />
                </div>
            </div>

            <div className="row reverse">
                <div className="col">
                    <h3>02. Ngecap </h3>
                    <p>
                    Ngecap adalah proses yang mengacu pada menghasilkan pola Batik pada selembar kain linen dengan menggunakan stempel perunggu yang diisi dengan lilin yang meleleh. Rebus lilin hingga 60 – 70 derajat Celcius. Setelah cairan lilin siap, celupkan stempel perunggu ke dalam mangkuk lilin. Keluarkan stempel dari mangkuk dan singkirkan tetesan cairan yang berlebihan. Letakkan linen di permukaan yang rata dan tempelkan cairan lilin di atas tekstil.                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-1.png" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>03. Nyelup</h3>
                    <p>
                    Nyelup mengacu pada proses perendaman tekstil Batik dalam tong yang diisi dengan larutan pewarna alami atau kimia. Proses perendaman warna bisa memakan waktu berhari-hari bahkan berbulan-bulan tergantung kerumitan desain batik. Misalnya, jenis Batik tertentu seperti Batik Genthongan Bangkalan di Pulau Madura mungkin memerlukan proses perendaman selama 6 bulan.                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-2.png" alt="" />
                </div>
            </div>

            <div className="row reverse">
                <div className="col">
                    <h3>04. Nembok </h3>
                    <p>
                    Nembok mengacu pada menutupi bagian yang diinginkan dengan lilin untuk melindungi area tersebut agar tidak diwarnai. Alat yang sempurna untuk proses ini adalah Canting dengan cerat yang lebih besar. Alat ini membantu produsen untuk mengeluarkan cairan lilin tanpa repot. Setelah selesai,
tekstil dapat diwarnai pada proses pewarnaan selanjutnya.                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-3.png" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>05. Nyolet</h3>
                    <p>
                    Nyolet mengacu pada melukis garis dan pola Batik menggunakan kuas dan pewarna. Pengrajin menggunakan berbagai jenis kuas untuk melukis garis besar dan detail motif. Disarankan untuk menggunakan kuas yang lebih besar untuk menguraikan proses dan yang kecil untuk lukisan yang detail.                     </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-4.png" alt="" />
                </div>
            </div>

            <div className="row reverse">
                <div className="col">
                    <h3>06. Nglorod</h3>
                    <p>
                    Nglorod mengacu pada proses penghilangan lilin dengan mencuci tekstil Batik dalam air matang panas dengan campuran larutan soda ash (natrium karbonat). Setelah lilin dihilangkan, tekstil dicuci dengan air dingin. Proses ini dapat memakan waktu hingga 2-3 hari tergantung pada ketebalan lilin.                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-5.png" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>07. Njemur</h3>
                    <p>
                    Njemur mengacu pada proses pengeringan kain. Proses pengeringan bisa memakan waktu 1-2 hari tergantung cuaca. Setelah kering, tekstil harus dilipat dengan rapi dan disimpan di tempat yang kering dan terhindar dari sinar matahari langsung.                    </p>
                </div>
                <div className="col">
                    <img src="assets/produksi/8Bg8N8HtiWI-6.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Produksi;