import { Link } from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound() {
  return (
    <div className="pagenotfound-container">
      <p>Sorry! The Page You are looking for is not found.</p>
      <p><Link to="/home" className="underline">Click here</Link> to go to home page.</p>
    </div>
  );
}

export default PageNotFound;