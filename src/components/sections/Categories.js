import hero2 from "../../imgs/hero2.jpg";

export default function Categories() {
    return (
        <section class="categories">
                <h1>
                    Top categories
                    <span class="more"><a href="/">See more</a></span>
                </h1>
                <div class="cat-container">
                    <div class="cat">
                        <img src={hero2} alt="Category" />
                        <div class="content">
                            <h3>Soups</h3>
                        </div>
                    </div>
    
                    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Rice</h3>
                        </div>
                    </div>
    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Veggies</h3>
                        </div>
                    </div>
    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Fruits</h3>
                        </div>
                    </div>
    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Bakery</h3>
                        </div>
                    </div>
    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Pastas</h3>
                        </div>
                    </div>
    
                    <div class="cat">
                        <img src={hero2} alt="category" />
                        <div class="content">
                            <h3>Salads</h3>
                        </div>
                    </div>
    
                </div>
            </section>
    )
}