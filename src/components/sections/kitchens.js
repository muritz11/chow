import hero2 from "../../imgs/hero2.jpg";
import { Link } from "react-router-dom";

export default function Kitchens() {
    return (
        <section class="kitchen">
                <h1>
                    Discover amazing kitchens
                </h1>
                <div class="kit-container">
                    <Link to="/kitchen-profile" class="kit item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Elly's cuisine</h3>
                            <span><i className="fa fa-heart-o"></i> 273</span>
                        </div>
                    </Link>
    
                    
                    <Link to="/kitchen-profile" class="kit item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Susy's delight</h3>
                            <span><i className="fa fa-heart-o"></i> 273</span>
                        </div>
                    </Link>
    
                    <Link to="/kitchen-profile" class="kit item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Toks grills</h3>
                            <span><i className="fa fa-heart-o"></i> 273</span>
                        </div>
                    </Link>
    
                </div>
                <h3 className="txt-ctr kit-more"><Link to="/kitchens">See more</Link></h3>
            </section>
    )
}