import DishListing from "../mini/DishListing";

export default function Aedh() {
    return (
        <section class="new-dishes">
                <h1 className="txt-ctr mar-down">As e Dey Hot</h1>
                <hr />
                <div className="dish-container">
                    <DishListing />
                </div>
            </section>
    )
}