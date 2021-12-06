import { useSelector } from "react-redux"
import hero2 from "../../imgs/hero2.jpg"
import { Link } from "react-router-dom"



export default function DishListing() {

    const kitchens = useSelector((state) => state.allKitchens.kitchens)
    
    const renderList = kitchens.map((kitchens) => {
        
        const { id, name, hearts } = kitchens

        return (<Link to={`/kitchen-profile/${id}`} class="kit item-link" key={id}>
            <img src={hero2} alt="category" />
            <div class="content">
                <h3>{name}</h3>
                <span><i className="fa fa-heart-o"></i> {hearts}</span>
            </div>
        </Link>)

    })

    return (
        <>{renderList}</>
    )
}