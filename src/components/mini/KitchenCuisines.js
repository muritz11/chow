import { useSelector } from "react-redux"
import hero2 from "../../imgs/hero2.jpg"
import { Link } from "react-router-dom"



export default function KitchenCuisines(props) {
    
    const dishes = useSelector((state) => state.allDishes.dishes)

    const kitchenCuisines = dishes.filter((value) => {
        return value.kitId === Number(props.kitId)
    })
    
    const renderList = kitchenCuisines.map((dishes) => {
        
        const { id, title, kitchen, rating } = dishes

        return (<Link to={`/dish/${id}`} class="dish item-link">
            <img src={hero2} alt="category" />
            <div class="content">
                <h3>{title}</h3>
                <p>{kitchen}</p>
                <span><span class="star">&#9733;</span> {rating}</span>
            </div>
        </Link>
        )

    })


    return (
        <>{renderList}</>
    )
}