import hero2 from "../imgs/hero2.jpg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectedDishReducer } from "../redux/reducers/dishReducer";

export default function Dish() {

    const { dishId } = useParams()
    const dispatch = useDispatch()
    const dishes = useSelector((state) => state.allDishes.dishes)
    const dish = useSelector((state) => state.dish)
    
    const dishObj = dishes.filter((value) => {
        return value.id == dishId
    })
    
    console.log(dishObj)


    useEffect(() => {
        dispatch(selectedDishReducer([dishId]))
    }, [dishId])



    return (
        <div className="m-3">
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={hero2} className="dish-banner" />
                </div>
                <div className="col-md-8 mt-4 mt-md-0">
                    {/* food title */}
                    <h1>Fried rice</h1>
                    {/* vendor */}
                    <p>Elly's cuisine</p>
                    {/* rating */}
                    <span><span class="star">&#9733;</span> 4.8</span>
                    {/* description */}
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet nemo dolorem natus incidunt est in quam voluptate sunt dicta repellendus illum, cupiditate quas, delectus expedita eveniet quia saepe ullam.
                    </p>
                    {/* price */}
                    <h5 className="price"><b>NGN1300</b></h5>
                    {/* serving and add to cart */}
                    <div className="row mt-3">
                        <div className="col-6">
                            Meals:
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-orange">Order Now</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* related */}
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

        </div>
    )
}