import hero2 from "../../imgs/hero2.jpg";
import { Link } from "react-router-dom";


export default function RelatedDishes() {
    return (
        <section className="mt-5">
            <h2 className="mt-4">Related dishes</h2>

            <div className="dish-container">
                <Link to="/dish" class="dish item-link">
                    <img src={hero2} alt="category" />
                    <div class="content">
                        <h3>Nsala</h3>
                        <p>Susy's delight</p>
                        <span><span class="star">&#9733;</span> 4.8</span>
                    </div>
                </Link>

                <Link to="/dish" class="dish item-link">
                    <img src={hero2} alt="category" />
                    <div class="content">
                        <h3>Nsala</h3>
                        <p>Susy's delight</p>
                        <span><span class="star">&#9733;</span> 4.8</span>
                    </div>
                </Link>

                <Link to="/dish" class="dish item-link">
                    <img src={hero2} alt="category" />
                    <div class="content">
                        <h3>Nsala</h3>
                        <p>Susy's delight</p>
                        <span><span class="star">&#9733;</span> 4.8</span>
                    </div>
                </Link>

                <Link to="/dish" class="dish item-link">
                    <img src={hero2} alt="category" />
                    <div class="content">
                        <h3>Nsala</h3>
                        <p>Susy's delight</p>
                        <span><span class="star">&#9733;</span> 4.8</span>
                    </div>
                </Link>
            
            </div>    
        </section>
    )
}