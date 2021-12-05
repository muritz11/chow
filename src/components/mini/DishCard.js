
export default function DishCard() {
    return (
        <Link to="/dish" class="dish item-link">
            <img src={hero2} alt="category" />
            <div class="content">
                <h3>Nsala</h3>
                <p>Susy's delight</p>
                <span><span class="star">&#9733;</span> 4.8</span>
            </div>
        </Link>
    )
}