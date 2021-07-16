import { useState, useEffect } from "react";
import axios from "axios";
import './batikdaerah.css'
import {Link} from 'react-router-dom'

const BatikDaerah = () => {

    const [data, setData] = useState([])

    const daerah  = [
        {id: 1, daerah: "Jawa Barat"},
        {id: 2, daerah: "Jawa Timur"},
        {id: 3, daerah: "Jawa Tengah"},
        {id: 4, daerah: "Jakarta"},
        {id: 5, daerah: "Banten"},
        {id: 6, daerah: "Yogyakarta"},
        {id: 7, daerah: "Aceh"},
        {id: 8, daerah: "Sumatera Utara"},
        {id: 9, daerah: "Riau"},
        {id: 10, daerah: "Kepulauan Riau"},
        {id: 11, daerah: "Sumatera Barat"},
        {id: 12, daerah: "Bangka Belitung"},
        {id: 13, daerah: "Bengkulu"},
        {id: 14, daerah: "Jambi"},
        {id: 15, daerah: "Lampung"},
        {id: 16, daerah: "Sumatera Selatan"},
        {id: 17, daerah: "Bali"},
        {id: 18, daerah: "Kalimantan Tengah"},
        {id: 19, daerah: "Kalimantan Timur"},
        {id: 20, daerah: "Kalimantan Selatan"},
        {id: 21, daerah: "Kalimantan Barat"},
        {id: 22, daerah: "Kalimantan Utara"},
        {id: 23, daerah: "Sulawesi Utara"},
        {id: 24, daerah: "Sulawesi Selatan"},
        {id: 25, daerah: "Sulawesi Tenggara"},
        {id: 26, daerah: "Sulawesi Tengah"},
        {id: 27, daerah: "Sulawesi Barat"},
        {id: 28, daerah: "Gorontalo"},
        {id: 29, daerah: "Maluku"},
        {id: 30, daerah: "Maluku Utara"},
        {id: 31, daerah: "Nusa Tenggara Timur"},
        {id: 32, daerah: "Nusa Tenggara Barat"},
        {id: 33, daerah: "Papua Barat"},
        {id: 34, daerah: "Papua"},
    ]

    useEffect(() => {
        const axiosPost = async () => {
          const response = await axios(
            "https://my-batik-api.herokuapp.com/batik"
          );
          setData(response.data)
        };
        axiosPost();
      }, []);

    return (    
        <div className="container batik-list">
            <h1>Telusuri Motif Batik <br /> Dari Setiap Daerah <br /> Di Nusantara.</h1>
            
                {daerah.map((daerah) => (
                    <div key={daerah.id}>
                        <div className="batik-daerah-title">
                            <h2>{daerah.daerah}</h2>
                        </div>
                        <div className="batik-list-image">
                        {data.map((datas) => (
                            daerah.daerah === datas.daerah ?
                            <div key={datas.id}>
                                <Link to="/" className="batik-card">
                                        <div className="card-img">
                                            <img src={datas.image} alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <h3>{datas.nama_batik}</h3>
                                        </div>
                                </Link>     
                            </div> : ""
                        ))}
                        </div>
                    </div>
                ))}

            <div className="blank-box"></div>

        </div>
     );
}
 
export default BatikDaerah;