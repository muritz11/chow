import hero2 from "../imgs/hero2.jpg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectedDish } from "../redux/actions/dishActions";
import RelatedDishes from "../components/mini/RelatedDishes";

export default function Dish() {

    const { dishId } = useParams()
    const dispatch = useDispatch()
    const dishes = useSelector((state) => state.allDishes.dishes)
    
    const actualDish = dishes.filter((value) => {
        return value.id === Number(dishId)
    })
    console.log(dishId)
    
    const { title, kitchen, kitId, rating, description, price } = actualDish[0]

    useEffect(() => {
        dispatch(selectedDish(dishId))
    }, [dishId])

    return (
        <div className="m-3">
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={hero2} className="dish-banner" />
                </div>
                <div className="col-md-8 mt-4 mt-md-0">
                    <h1>{title}</h1>
                    <p><Link to={`/kitchen-profile/${kitId}`}>{kitchen}</Link></p>
                    <span><span class="star">&#9733;</span> {rating}</span>
                    <p className="mt-2">{description}</p>
                    <h5 className="price"><b>{price}</b></h5>
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
            <RelatedDishes />

        </div>
    )
}