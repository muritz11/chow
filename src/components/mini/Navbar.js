import { Link } from "react-router-dom";
import logo from "../../imgs/try.png";

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" width="172" height="57" />
                </Link>
            </div>
            <div className="nav-items">
                <button className="menu-btn"><i className="fa fa-bars txt-black"></i></button>
                <Link to="/" className="txt-black active">Home</Link>
                <Link to="/categories" className="txt-black">Categories</Link>
                <Link to="/kitchens" className="txt-black">Kitchens</Link>
                <Link to="/orders" className="txt-black">My Orders</Link>
                <div class="inline-block">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-shopping-basket"></i>
                    <i className="fa fa-user"></i>
                </div>
            </div>
        </nav>
    )
}