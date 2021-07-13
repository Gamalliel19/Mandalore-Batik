import './filosofi.css'

const Filosofi = () => {
    return ( 
        <div className="container filosofi">
            <section className="filosofi-batik">
                    <hr />
                    <h1>Filosofi Batik</h1>
                    <img src="assets/filosofi.png" alt="" />
            </section>

            <section className="batik-modern">
                <h3>Batik Modern</h3>
                <div className="row">
                    <div className="col">
                        <p>Awalnya, Batik berasal dari bahasa Jawa yaitu amba yang artinya menulis. Sedangkan titik yang artinya titik. Nah, jika kedua kata tersebut digabungkan, maka arti dari kata batik ini kurang lebih adalah menulis titik-titik. Dengan kata lain, menulis titik-titik untuk menghasilkan sebuah motif yang Indah. Seperti yang telah dijelaskan sebelumnya, bahwa hampir setiap daerah di Indonesia mempunyai motif tersendiri dalam kain batik. Bisanya, motif tertentu yang dibuat setiap daerah ini akan dinamai berdasarkan nama daerah asalnya. Misalnya saja adalah </p>
                    </div>
                    <div className="col">
                        <p>batik motif Cirebon, Banyumas, dan batik lain-lainnya. Motif yang beragam ini, juga akan dipengaruhi oleh ciri khas dan juga keyakinan di tiap daerah tersebut. Total motif yang tercatat pada kain batik di Indonesia sekarang adalah 30 jenis motif. Hampir menyamai jumlah provinsi di Indonesia.  Di setiap daerah yang mempunyai batik, mempunyai ciri khas dan maknanya masing-masing. Bahkan, bisa dikatakan bahwa dari selembar kain batik ini, kita akan belajar banyak mengenai kehidupan dan sejarah yang ada di masa lampau.</p>
                    </div>
                </div>
            </section>

            <section className="nilai-filosofis">
                <h3>Nilai Filosofis</h3>
                <div className="row">
                    <div className="col">
                        <p>Batik memiliki makna semiotik dan simbolik intrinsik, motif sakral digunakan oleh orang-orang tertentu dan dalam acara-acara tertentu (raja, pernikahan, acara kenegaraan, dll). Misalnya, motif Sidomulyo adalah salah satu motif klasik Jawa, yang khusus digunakan untuk pakaian pengantin dalam pernikahan kerajaan Jawa. Ini melambangkan keinginan baik bagi pemakainya untuk mencapai kemuliaan, keluarga yang harmonis, dan status sosial yang sangat dihormati. Setiap motif batik yang dikembangkan di setiap daerah mengandung kekayaan kearifan lokal, sejarah, dan nilai-nilai sosial budaya yang ada di masyarakat setempat. Seperti telah dijelaskan sebelumnya, bahwa setiap motif batik mempunyai </p>
                    </div>
                    <div className="col">
                        <p> maknanya sendiri-sendiri. Hal ini di karenakan pada kain batik tersebut terdapat motif yang tercipta berdasarkan keyakinan masyarakat dimana asal kain batik tersebut.
                            Bahkan, ada beberapa motif pada kain batik yang konon hanya akan digunakan oleh keluarga keraton atau kerajaan pada zaman dahulu. Hal ini, di karenakan mempunyai filosofi yang berbeda-beda dari kain batik yang dapat digunakan oleh semua kalangan.
                            Adanya filosofi serta makna tersendiri dari kain batik ini, membuat kain batik ini tidak hanya sekedar kain yang digunakan untuk menutup tubuh. Namun, kain batik ini mempunyai arti yang sangat mendalam bagi masyarakat di daerah-daerah tersebut.</p>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Filosofi;