import { Link } from "react-router-dom";

function SideBar()
{
    return(
        <>
        <ul className="list_unstyles">
            <li>
              <Link to={'/products'}>Get All Products</Link>
            </li>
            <li>
              <Link  to={'/categories'}>Get All Categories</Link>
            </li>
        </ul>
        
        </>
    );
}
export default SideBar;