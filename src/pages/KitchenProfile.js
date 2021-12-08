import hero2 from "../imgs/hero2.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectedKitchen } from "../redux/actions/kitchenActions";
import KitchenCuisines from "../components/mini/KitchenCuisines";


export default function KitchenProfile() {

    const { kitId } = useParams()
    const dispatch = useDispatch()
    const kitchens = useSelector((state) => state.allKitchens.kitchens)
    
    const actualKit = kitchens.filter((value) => {
        return value.id === Number(kitId)
    })
    
    const { name, hearts, description } = actualKit[0]

    useEffect(() => {
        dispatch(selectedKitchen(kitId))
    }, [kitId, dispatch])

    return (
        <div className="m-3">
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={hero2} className="dish-banner" alt="" />
                </div>
                <div className="col-md-8 mt-4 mt-md-0">
                    <h1>{name}</h1>
                    <span><i className="fa fa-heart-o"></i> {hearts}</span>
                    {/* description */}
                    <p className="mt-2">{description}</p>
                </div>

            </div>

            {/* cuisines */}
            <section className="mt-5">

                
                <div className="dish-container">
                    <KitchenCuisines kitId={kitId} />
                </div>
            </section>

        </div>
    )
}