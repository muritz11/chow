import hero2 from "../../imgs/hero2.jpg";
import { Link } from "react-router-dom";

export default function Aedh() {
    return (
        <section class="new-dishes">
                <h1 class="txt-ctr mar-down">As e Dey Hot</h1>
                <hr />
                <div class="dish-container">
                    <Link to='/dish' class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Fried rice</h3>
                            <p>Elly's cuisine</p>
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
                            <h3>Abacha</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Bread fruit</h3>
                            <p>Elly's cuisine</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>
    
                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Jeloff rice</h3>
                            <p>Susy's delight</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>
    
                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Yam w/Hot sauce</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>
    
                    
                </div>
            </section>
    )
}