import HeroHeader from "../components/sections/Header";
import Categories from "../components/sections/Categories";
import Aedh from "../components/sections/Aedh";
import Chef from "../components/sections/chef";
import Kitchens from "../components/sections/kitchens";

export default function Home() {
    return (
        <div className="containa">
            <HeroHeader />
            <main>
                <Categories />
                <Aedh />
            </main>
            <Chef />
            <main>
                <Kitchens />
            </main>
        </div>
    )
}