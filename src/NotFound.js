import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, we couldn't find that page</h2>
            <Link to={'/'}>Back home...</Link>
        </div>
     );
}

export default NotFound;