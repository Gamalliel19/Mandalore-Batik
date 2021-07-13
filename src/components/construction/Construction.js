import { Link } from 'react-router-dom'
import './construction.css'

const Construction = () => {
    return ( 
        <div className="container construction">
                <span>We're Sorry,</span>
                <h1>
                    This Page is under Construction.
                </h1>
                <Link to="/">back to home</Link>
        </div>
     );
}
 
export default Construction;