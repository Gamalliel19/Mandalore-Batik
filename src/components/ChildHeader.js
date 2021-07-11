import {Link} from 'react-router-dom';

const ChildHeader = () => {
    return ( 
        <header>
            <div className="header-container">
                <Link to="/" className="logo">MANDALORE</Link>
            </div>
        </header>
     );
}
 
export default ChildHeader;