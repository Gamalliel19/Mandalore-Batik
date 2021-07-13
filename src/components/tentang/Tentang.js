import { useState } from 'react'
import './tentang.css'

const Tentang = () => {

    const [jenisBatik, setJenisBatik] = useState([
        {title: "1. Batik Tulis", description: "batik tulis adalah jenis batik yang dibuat secara manual menggunakan tangan dengan bantuan alat canting untuk menerakan malam ke corak batik.", image: "assets/tentang/Rectangle 207.png", id: 1},
        {title: "2. Batik Cap", description: "Batik cap adalah batik yang dibuat dengan semacam stempel motif batik. Stempel atau cap tersebut terbuat dari tembaga yang fungsinya menggantikan canting sehingga dapat mempersingkat waktu pembuatan batik.", image: "assets/tentang/Rectangle 208.png", id: 2},
        {title: "3. Batik Kombinasi Cap & Tulis", description: "Ada juga jenis batik yang merupakan kombinasi batik tulis dan batik cap. Jenis batik ini dibuat dalam rangka mengurangi kelemahan-kelemahan pada produk batik cap.", image: "assets/tentang/Rectangle 208-1.png", id: 3},
        {title: "4. Batik Printing", description: "Batik printing atau yang disebut juga dengan batik sablon karena dalam proses pembuatan jenis batik ini lebih mirip dengan penyablonan. Dalam pembuatan batik printing menggunakan alat offset atau sablon.", image: "assets/tentang/Rectangle 208-2.png", id: 4},
    ])

    return ( 
        <div className="container tentang">
            <article>

                <section className="tentang-batik">
                    <hr />
                    <h1>Apa itu Batik?</h1>
                    <img src="assets/tentang/Rectangle 104.png" alt="" />
                    <p>
                    Secara umum, pengertian batik adalah kain yang dilukis dengan cairan lilin malam menggunakan alat bernama canting sehingga di atas kain tersebut terdapat lukisan bernilai seni tinggi. Batik berasal dari bahasa Jawa yaitu dari kata “mbat” (melempar) dan “titik”, yang berarti melempar titik berkali-kali pada kain. Sederhananya batik merupakan seni dalam menghias kain dengan penutup lilin untuk membentuk corak hiasan tertentu serta membentuk sebuah bidang pewarnaan.
                    </p>
                </section>

                <section className="jenis-batik">
                    <h2>Jenis Batik</h2>
                    <p className="jenis-desc">
                    Batik dapat dibedakan menjadi beberapa jenis. Sesuai dengan penjelasan mengenai pengertian batik, adapun beberapa jenis batik adalah sebagai berikut:
                    </p>

                    {jenisBatik.map(content => (
                        <div className={`row ${content.id % 2 === 0 ? 'reverse' : "" }`}>
                            <div className="col">
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                            </div>
                            <div className="col">
                                <img src={content.image} alt="jenis-batik-Indonesia" />
                            </div>
                        </div>
                    ))}

                </section>

            </article>
        </div>
     );
}
 
export default Tentang;