import { Link } from "react-router-dom";
import hero2 from "../imgs/hero2.jpg";

export default function KitchenProfile() {
    return (
        <div className="m-3">
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={hero2} className="dish-banner" />
                </div>
                <div className="col-md-8 mt-4 mt-md-0">
                    {/* kitchen title */}
                    <h1>Toks grills</h1>
                    <span><i className="fa fa-heart-o"></i> 273</span>
                    {/* description */}
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.
                    </p>
                </div>

            </div>

            {/* related */}
            <section className="mt-5">
                {/* <h2 className="mt-4">Related dishes</h2> */}

                <div className="dish-container">
                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>

                    <Link to="/dish" class="dish item-link">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Suya</h3>
                            <p>Toks grills</p>
                            <span><span class="star">&#9733;</span> 4.8</span>
                        </div>
                    </Link>
                    
                </div>    
            </section>

        </div>
    )
}