// import hero2 from "../../imgs/hero2.jpg";
import { Link } from "react-router-dom";
import KitchenListing from "../mini/KitchenListing";

export default function Kitchens() {
    return (
        <section class="kitchen">
                <h1>
                    Discover amazing kitchens
                </h1>
                <div class="kit-container">
                    
                    <KitchenListing />
    
                </div>
                <h3 className="txt-ctr kit-more"><Link to="/kitchens">See more</Link></h3>
            </section>
    )
}